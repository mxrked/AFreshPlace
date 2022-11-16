import styles from "../../styles/about/About.module.css";

import { BackgroundImage } from "react-image-and-background-image-fade";

const Background = () => {
  return (
    <div id={styles.aboutBackground}>
      <div className={`${styles.about_background_bg_holder}`}>
        <BackgroundImage
          src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/index/index-about-bg.webp"
          width="100%"
          height="100%"
          className={styles.about_background_bg}
        />
      </div>

      <div className={`${styles.about_background_text_holder}`}>
        <div>
          <h2>Our Interesting Background.</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Background;
