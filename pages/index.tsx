import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Header from "../components/Header";
import UserDetail from "../components/UserDetail";
import SearchBar from "../components/SearchBar";
import { getUserData } from "../utils/api";
import { GitHubUser } from "../utils/types";
import { APP_NAME, QUERIES, USERNAME_ONLOAD } from "../utils/constants";
import { FadeInAnimation } from "../utils/animations";

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
  console.log(userData);
  return (
    <Wrapper>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="Search github users" />
      </Head>
      <Header />
      <Main>
        <SearchBar setUserData={setUserData} />
        <UserDetail userData={userData} />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 730px;
  max-width: 730px;
  min-width: 327px;
  ${FadeInAnimation({ timing: "500ms", delay: "200ms" })}
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    gap: 24px;
  }
`;

export default Home;
