import Head from "next/head";
import { useEffect } from "react";

import OnAllPages from "../../helpers/OnAllPages";

import Footer from "../../components/footer/Footer";

import Top from "../../components/store/meats/Top";
import Main from "../../components/store/meats/Main";

import styles from "../../styles/store/Store.module.css";

export default function Meats() {
  useEffect(() => {
    const NAV = document.querySelector("nav");

    NAV.style.position = "relative";
    NAV.style.backgroundColor = "#1d1c1c";
  }, []);

  return (
    <div>
      <Head>
        <title>A Fresh Place | Store Page (Meats)</title>

        <meta
          name="description"
          content="Browse our current selection of meats that we at A Fresh Place are currently providing."
        />
        <meta
          name="keywords"
          content="A Fresh Place, grocery, food, produce items, fresh foods, meat products, meats, store page, meats page"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="A Fresh Place | Store Page (Meats)"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content="/store/meats" />

        <link rel="canonical" href="/store/meats" />
        {/*
         */}
        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/icons/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/icons/favicon-16x16.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Staatliches&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <OnAllPages />

      <div id={styles.meatsBody}>
        <Top />
        <Main />
      </div>

      <Footer />
    </div>
  );
}
