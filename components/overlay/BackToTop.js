import { useEffect } from "react";

import { FaChevronCircleUp } from "react-icons/fa";

import styles from "../../styles/js/Js.module.css";

const BackToTop = () => {
  useEffect(() => {
    const B2T = document.getElementById("backToTop");

    function triggerB2T() {
      if (window.scrollY <= 90) {
        B2T.style.bottom = "-160px";
      } else {
        B2T.style.bottom = "20px";
      }
    }

    window.addEventListener("scroll", triggerB2T);
    window.addEventListener("load", triggerB2T);
    B2T.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <button id="backToTop" className={`${styles.back_to_top} page-transition`}>
      <FaChevronCircleUp />
    </button>
  );
};

export default BackToTop;
