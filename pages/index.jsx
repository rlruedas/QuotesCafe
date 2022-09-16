import Head from "next/head";
import Landing from "./landing";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <Landing />
      </div>
    </>
  );
}
