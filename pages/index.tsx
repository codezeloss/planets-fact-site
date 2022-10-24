import Head from "next/head";
import Earth from "./earth";
import stars from "/assets/background-stars.svg";

const Home = () => {
  return (
    <div className={`bg-${stars}`}>
      <Head>
        <title>The planets | Earth</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Earth />
      </main>
    </div>
  );
};

export default Home;
