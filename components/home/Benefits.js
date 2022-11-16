import Link from "next/link";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import styles from "../../styles/home/Home.module.css";

const Benefits = () => {
  return (
    <div id={styles.indexBenefits}>
      <div
        className={styles.index_benefits_cnt}
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <h1>Our Amazing Benefits.</h1>

        <div className={`${styles.index_benefits_box} container-fluid`}>
          <div className={`${styles.index_benefits_row} row`}>
            <div
              data-aos="fade-down"
              data-aos-delay="800"
              className={`${styles.index_benefits_benefit} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            >
              <img
                data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/index/benefits/fresh.png"
                className="lazyload blur_up"
                alt="Icon of Produce."
              />

              <div className={styles.index_benefits_benefit_text}>
                <h3>
                  Fresh Produce <br /> and Ingredients.
                </h3>

                <Link href="/store">
                  <a className="page-transition">Learn More</a>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="900"
              className={`${styles.index_benefits_benefit} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            >
              <img
                data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/index/benefits/cooking.png"
                className="lazyload blur_up"
                alt="Icon of Crockpot."
              />

              <div className={styles.index_benefits_benefit_text}>
                <h3>
                  Easy to learn <br /> and work with.
                </h3>

                <Link href="/store">
                  <a className="page-transition">Learn More</a>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="1000"
              className={`${styles.index_benefits_benefit} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            >
              <img
                data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/index/benefits/happy.png"
                className="lazyload blur_up"
                alt="Icon of Smiley Face."
              />

              <div className={styles.index_benefits_benefit_text}>
                <h3>
                  Have an ease <br /> of the mind.
                </h3>

                <Link href="/store">
                  <a className="page-transition">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
