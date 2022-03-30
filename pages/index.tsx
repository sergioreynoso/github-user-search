import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const appName = "devfinder";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{appName}</title>
        <meta name="description" content="Search github users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>{appName}</h1>
        <div>dark</div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
