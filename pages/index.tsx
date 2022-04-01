import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/Header";

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
      <main className="main"></main>
    </div>
  );
};

export default Home;
