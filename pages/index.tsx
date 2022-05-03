import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import UserDetail from "../components/UserDetail";
import SearchBar from "../components/SearchBar";
import { getUserData } from "../utils/api";
import { GitHubUser } from "../types";
import { USERNAME_ONLOAD } from "../constants";
const appName = "devfinder";

const Home: NextPage<{ userData: GitHubUser }> = ({ userData }) => {
  return (
    <Wrapper>
      <Head>
        <title>{appName}</title>
        <meta name="description" content="Search github users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <SearchBar />
        <UserDetail userData={userData} />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 730px;
  padding: 32px 24px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const getStaticProps: GetStaticProps = async () => {
  const userData: GitHubUser = await getUserData(USERNAME_ONLOAD);
  return {
    props: {
      userData,
    },
  };
};

export default Home;
