import Link from "next/link";
import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "../../styles/home/Home.module.css";
import { FadeDown } from "../../assets/animations/fades/FadeDown";

const Top = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id={styles.indexTop}>
      <BackgroundImage
        src="http://basicallyeasy.com/NextJSCDNS/afreshplace/index/index-top-bg.webp"
        width="100%"
        height="100%"
        aria-label="Background image of produce and products."
        className={styles.index_top_bg}
      />

      <div className={styles.index_top_cnt}>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={FadeDown}
        >
          <h1>A Chef&apos;s delight.</h1>

          <p>Explore and create with our foods.</p>

          <Link href="/next-projects/afreshplace/store/">
            <a className="page-transition">View Store</a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Top;
