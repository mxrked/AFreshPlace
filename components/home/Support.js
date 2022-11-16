import Link from "next/link";

import { BackgroundImage } from "react-image-and-background-image-fade";

import styles from "../../styles/home/Home.module.css";

const Support = () => {
  return (
    <div id={styles.indexSupport}>
      <div
        className={styles.index_support_cnt}
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <BackgroundImage
          src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/index/index-support-bg.webp"
          width="100%"
          height="100%"
          aria-label="Background Image of Produce."
          className={styles.index_support_cnt_bg}
        >
          <Link href="/support">
            <a className="page-transition">
              <div>
                <h3>Need Some Help?</h3>

                <p>Our team are here to assist you!</p>

                <span className="page-transition">Get Help</span>
              </div>
            </a>
          </Link>
        </BackgroundImage>
      </div>
    </div>
  );
};

export default Support;
