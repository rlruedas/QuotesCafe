import Head from "next/head";
import Landing from "./landing";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <Head>
          <title>Quotes Cafe</title>
          <meta name="description" content="Created with Love" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Landing />
      </div>
    </>
  );
}
