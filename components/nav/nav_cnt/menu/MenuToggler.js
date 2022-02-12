import { useEffect } from "react";

import styles from "../../../../styles/nav/Nav.module.css";

import ManipulateScroll from "../../../../helpers/functions/ManipulateScroll";

const MenuToggler = () => {
  //! Toggling Menu
  useEffect(() => {
    document.getElementById("menuToggler").addEventListener("click", () => {
      sessionStorage.setItem("Menu Opened.", true);

      document.getElementById("menu").style.display = "block";
      document.querySelector("nav").style.pointerEvents = "none";

      ManipulateScroll();

      document.getElementById("menuMain").style.display = "flex";
      document.getElementById("menuDarken").style.display = "block";

      setTimeout(() => {
        document.getElementById("menuDarken").classList.remove("deactive");
      }, 600);

      setTimeout(() => {
        document.getElementById("menuMain").style.width = "100%";
      }, 1100);

      setTimeout(() => {
        document.querySelector("#menuMain h1").style.transform =
          "translateY(0)";
        document.getElementById("menuMainControlsCnt").style.transform =
          "translateX(0)";
        document.getElementById("menuLinks").classList.remove("deactive");
        document.getElementById("menuLinks").style.transform = "translateY(0)";
      }, 1600);

      setTimeout(() => {
        document.getElementById("menu").style.pointerEvents = "auto";
      }, 1900);
    });
  }, []);

  return (
    <button id="menuToggler" className={styles.menu_toggler}>
      <span className="page-transition" />
      <span className="page-transition" />
      <span className="page-transition" />
    </button>
  );
};

export default MenuToggler;
