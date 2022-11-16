import Link from "next/link";

import { BackgroundImage } from "react-image-and-background-image-fade";

import styles from "../../styles/home/Home.module.css";

const Background = () => {
  return (
    <div id={styles.indexBackground}>
      <div
        className={`${styles.index_background_box} container-fluid`}
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <div className={`${styles.index_background_row} row`}>
          <div
            className={`${styles.index_background_side} col-lg-7 col-md-7 col-sm-8 col-xs-12`}
            id={styles.indexBackgroundL}
          >
            <div className={styles.index_background_side_txt}>
              <h1>
                Getting to <br /> know about AFP.
              </h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <Link href="/about">
                <a className="page-transition">Learn More</a>
              </Link>
            </div>
          </div>
          <div
            className={`${styles.index_background_side} col-lg-5 col-md-5 col-sm-4 col-xs-12`}
            id={styles.indexBackgroundR}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/index/index-about-bg.webp"
              width="100%"
              height="100%"
              aria-label="A Fresh Place Background Image."
              className={styles.index_background_bg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
