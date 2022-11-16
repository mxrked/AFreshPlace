import Head from "next/head";
import { useEffect } from "react";

import OnAllPages from "../../helpers/OnAllPages";

import Footer from "../../components/footer/Footer";

import Top from "../../components/store/index/Top";

import styles from "../../styles/store/Store.module.css";
import ProductTypes from "../../components/store/index/ProductTypes";

export default function Store() {
  useEffect(() => {
    const NAV = document.querySelector("nav");

    NAV.style.position = "relative";
    NAV.style.backgroundColor = "#1d1c1c";
  }, []);

  return (
    <div>
      <Head>
        <title>A Fresh Place | Store Page</title>

        <meta
          name="description"
          content="Browse and fill your taste buds with our wide and vast selection of meats, fruits, veggies and desserts that A Fresh Place provides."
        />
        <meta
          name="keywords"
          content="A Fresh Place, grocery, food, produce items, fresh foods, meat products, meats, fruit products, fruits, veggie products, veggies, dessert products, desserts, store page, all products"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="A Fresh Place | Store Page" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content="/store" />

        <link rel="canonical" href="/store" />

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

      <div id={styles.storeBody}>
        <Top />
        <ProductTypes />
      </div>

      <Footer />
    </div>
  );
}
