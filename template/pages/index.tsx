import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React project</title>
        <meta name="description" content="React project" />
      </Head>
      <main>
        <p>To save time when spinning up a NextJs app with TS, RTL & Jest</p>
      </main>
    </div>
  );
};

export default Home;
