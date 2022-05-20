import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Header from "../components/Header";
import UserDetail from "../components/UserDetails";
import SearchBar from "../components/SearchBar";
import SearchContext from "../components/SearchContext";
import { getUserData } from "../utils/api";
import { GitHubUser } from "../utils/types";
import { APP_NAME, USERNAME_ONLOAD } from "../utils/constants";

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
  max-width: 730px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default Home;
