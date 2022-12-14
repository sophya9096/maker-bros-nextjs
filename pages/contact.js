import Head from "next/head";
import Navbar from "./../components/Navbar";
import Contact from "./../containers/Contact";

export default function contact() {
  return (
    <>
      <Head>
        <title>Maker Bros - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Contact />
    </>
  );
}
