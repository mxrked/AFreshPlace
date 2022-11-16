import Head from "next/head";
import { useEffect } from "react";
import { motion } from "framer-motion";

import OnAllPages from "../helpers/OnAllPages";

import Footer from "../components/footer/Footer";

import PageFade from "../assets/animations/fades/PageFade";

import styles from "../styles/home/Home.module.css";

import Top from "../components/home/Top";
import Products from "../components/home/Products";
import Types from "../components/home/Types";
import Background from "../components/home/Background";
import Benefits from "../components/home/Benefits";
// import Support from "../components/home/Support";

export default function Home() {
  useEffect(() => {
    const NAV = document.querySelector("nav");

    NAV.style.position = "fixed";
    NAV.style.backgroundColor = "transparent";
  }, []);

  return (
    <div>
      <Head>
        <title>A Fresh Place | Home Page</title>

        <meta
          name="description"
          content="A Fresh Place is your one stop shop for all of your food needs. Our selection includes: Meats, Fruits, Veggies and Desserts."
        />
        <meta
          name="keywords"
          content="A Fresh Place, grocery, food, produce items, fresh foods, meat products, meats, fruit products, fruits, veggie products, veggies, dessert products, desserts"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="A Fresh Place | Home Page" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content="/" />

        <link rel="canonical" href="/" />

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

      <motion.div
        id={styles.homeBody}
        variants={PageFade}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <Top />
        <Products />
        <Types />
        <Background />
        <Benefits />

        {/* <Support /> */}
      </motion.div>

      <Footer />
    </div>
  );
}
