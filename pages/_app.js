import Head from "next/head";
import Footer from "../components/Footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
