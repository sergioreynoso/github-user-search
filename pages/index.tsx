import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/header/Header";
import ProfileCard from "../components/profileCard/ProfileCard";
import SearchBar from "../components/searchBar/SearchBar";

const appName = "devfinder";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>{appName}</title>
        <meta name="description" content="Search github users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <SearchBar />
        <ProfileCard />
      </main>
    </div>
  );
};

export default Home;
