import Head from "next/head";
import Siderbar from "../components/Siderbar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="">
        <Siderbar />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}
