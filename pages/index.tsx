import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import UserDetail from "../components/userDetails/UserDetail";
import SearchBar from "../components/SearchBar";
import { getUserData } from "../utils/api";
import { GitHubUser } from "../types";
import { APP_NAME, USERNAME_ONLOAD } from "../constants";
import { SearchContext } from "../context";
import { BREAK_POINTS as bp } from "../constants";

export const getStaticProps: GetStaticProps = async () => {
  const data: GitHubUser = await getUserData(USERNAME_ONLOAD);
  return {
    props: {
      data,
    },
  };
};

const Home: NextPage<{ data: GitHubUser }> = ({ data }) => {
  const [userData, setUserData] = useState(data);

  return (
    <SearchContext.Provider value={{ userData, setUserData }}>
      <Wrapper>
        <Head>
          <title>{APP_NAME}</title>
          <meta name="description" content="Search github users" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Main>
          <SearchBar />
          <UserDetail />
        </Main>
      </Wrapper>
    </SearchContext.Provider>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 730px;
  @media (min-width: ${bp.mobile}) {
    min-width: 327px;
  }
  @media (min-width: ${bp.tablet}) {
    min-width: 573px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default Home;
