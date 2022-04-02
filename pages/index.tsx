import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/header/Header";

const appName = "devfinder";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        {/* <title>{appName}</title> */}
        <meta name="description" content="Search github users" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <Header />
      <main className="main">Hello</main>
    </div>
  );
};

export default Home;
