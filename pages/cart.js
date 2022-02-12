import Head from "next/head";
import { useEffect } from "react";
import { motion } from "framer-motion";

import OnAllPages from "../helpers/OnAllPages";

import Footer from "../components/footer/Footer";

import TestCart from "../tests/TestCart";
import TestCalculations from "../tests/TestCalculations";

import PageFade from "../assets/animations/fades/PageFade";

import styles from "../styles/cart/Cart.module.css";
import Top from "../components/cart/Top";
import Main from "../components/cart/Main";
import Bottom from "../components/cart/Bottom";

export default function Cart() {
  useEffect(() => {
    const NAV = document.querySelector("nav");

    NAV.style.position = "relative";
    NAV.style.backgroundColor = "#1d1c1c";
  }, []);

  return (
    <div>
      <Head>
        <title>A Fresh Place | Cart Page</title>
        <meta name="robots" content="noindex" />

        <meta property="og:title" content="A Fresh Place | Cart Page" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:url"
          content="http://basicallyeasy.com/next-projects/afreshplace/cart/"
        />

        <link
          rel="canonical"
          href="http://basicallyeasy.com/next-projects/afreshplace/cart/"
        />

        {/*
         */}
        <link
          rel="shortcut icon"
          href="http://basicallyeasy.com/NextJSCDNS/afreshplace/icons/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="http://basicallyeasy.com/NextJSCDNS/afreshplace/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="http://basicallyeasy.com/NextJSCDNS/afreshplace/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="http://basicallyeasy.com/NextJSCDNS/afreshplace/icons/favicon-16x16.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Staatliches&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <OnAllPages />

      <motion.div
        id={styles.cartBody}
        variants={PageFade}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <Top />
        <Main />
        <Bottom />

        {/*
        
        <TestCart />
        <TestCalculations />
        */}
      </motion.div>

      <Footer />
    </div>
  );
}
