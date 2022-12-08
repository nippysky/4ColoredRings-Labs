import type { NextPage } from "next";
import Head from "next/head";
import Doings from "../components/Doings";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ReachUs from "../components/ReachUs";
import Team from "../components/Team";
import ScrollUp from "../components/ScrollUp";
import LabBirth from "../components/LabBirth";

const Home: NextPage = () => {
  return (
    <section className="bg-mainBG dark:bg-darkBG w-full">
      <Head>
        <title>4ColoredRings Labs</title>
        <meta name="description" content="Exploring Blockchain Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="m-0 z-0">
        <Hero />
        <Doings />
        <LabBirth />
        <Team />
        <ReachUs />
      </main>

      <ScrollUp />
    </section>
  );
};

export default Home;
