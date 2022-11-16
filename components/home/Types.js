import Link from "next/link";
import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";

import styles from "../../styles/home/Home.module.css";

const Types = () => {
  //! Link hovers
  useEffect(() => {
    function hoverTypeLink(a, bg) {
      a.addEventListener("mouseenter", () => {
        bg.style.transform = "scale(1.020)";
      });

      a.addEventListener("mouseleave", () => {
        bg.style.transform = "scale(1)";
      });
    }

    const TYPE_BGS = document.querySelectorAll(".index_type_bg");
    const TYPE_LINKS = document.querySelectorAll(".index_type_link");

    hoverTypeLink(TYPE_LINKS[0], TYPE_BGS[0]);
    hoverTypeLink(TYPE_LINKS[1], TYPE_BGS[1]);
    hoverTypeLink(TYPE_LINKS[2], TYPE_BGS[2]);
    hoverTypeLink(TYPE_LINKS[3], TYPE_BGS[3]);
  }, []);

  return (
    <div id={styles.indexTypes}>
      <div
        className={`${styles.index_types_box} container-fluid`}
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <div className={`${styles.index_types_row} row`}>
          <div
            className={`${styles.index_types_type} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/meats/meat-bg.webp"
              width="110%"
              height="110%"
              aria-label="Meats Background"
              className={`${styles.index_types_bg} index_type_bg`}
            />

            <Link href="/store/meats">
              <a className="page-transition index_type_link">
                <div>
                  <span>Meats</span>
                </div>
              </a>
            </Link>
          </div>
          <div
            className={`${styles.index_types_type} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/fruit/fruit-bg.webp"
              width="110%"
              height="110%"
              aria-label="Fruits Background"
              className={`${styles.index_types_bg} index_type_bg`}
            />

            <Link href="/store/fruits">
              <a className="page-transition index_type_link">
                <div>
                  <span>Fruits</span>
                </div>
              </a>
            </Link>
          </div>
          <div
            className={`${styles.index_types_type} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/veggies/veggies-bg.webp"
              width="110%"
              height="110%"
              aria-label="Veggies Background"
              className={`${styles.index_types_bg} index_type_bg`}
            />

            <Link href="/store/veggies">
              <a className="page-transition index_type_link">
                <div>
                  <span>Veggies</span>
                </div>
              </a>
            </Link>
          </div>
          <div
            className={`${styles.index_types_type} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/desserts/dessert-bg.webp"
              width="110%"
              height="110%"
              aria-label="Desserts Background"
              className={`${styles.index_types_bg} index_type_bg`}
            />

            <Link href="/store/desserts">
              <a className="page-transition index_type_link">
                <div>
                  <span>Desserts</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
