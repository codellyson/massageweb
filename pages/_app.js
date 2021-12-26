import { useEffect } from "react";
import Aos from "aos";
import Head from "next/head";
import Footer from "../components/Footer";
import "aos/dist/aos.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../../apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../favicon-16x16.png"
        />
        <link rel="icon" type="image/ico" sizes="16x16" href="../favicon.ico" />
      </Head>
      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
