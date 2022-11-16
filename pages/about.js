import Head from "next/head";
import { useEffect } from "react";
import { motion } from "framer-motion";

import OnAllPages from "../helpers/OnAllPages";

import Footer from "../components/footer/Footer";

import PageFade from "../assets/animations/fades/PageFade";

import styles from "../styles/about/About.module.css";
import Top from "../components/about/Top";
import Background from "../components/about/Background";

export default function About() {
  useEffect(() => {
    const NAV = document.querySelector("nav");

    NAV.style.position = "relative";
    NAV.style.backgroundColor = "#1d1c1c";
  }, []);

  return (
    <div>
      <Head>
        <title>A Fresh Place | About Page</title>

        <meta
          name="description"
          content="Learn the history and background on A Fresh Place and get familiar with how we do our services."
        />
        <meta
          name="keywords"
          content="A Fresh Place, grocery, food, produce items, fresh foods, meat products, meats, fruit products, fruits, veggie products, veggies, dessert products, desserts"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="A Fresh Place | About Page" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content="/about" />

        <link rel="canonical" href="/about" />

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
        id={styles.aboutBody}
        variants={PageFade}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <Top />
        <Background />
      </motion.div>

      <Footer />
    </div>
  );
}
