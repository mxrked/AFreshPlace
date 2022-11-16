import { useEffect } from "react";

import Link from "next/link";

import { FaTimesCircle } from "react-icons/fa";

import styles from "../../../../styles/nav/Nav.module.css";
import CartLink from "../CartLink";
import SearchToggler from "../search/SearchToggler";

const Menu = () => {
  //! Defaults
  useEffect(() => {
    document.getElementById("menuDarken").style.display = "none";
    document.getElementById("menuDarken").classList.toggle("deactive");
    document.getElementById("menuMain").style.display = "none";
    document.getElementById("menuMain").style.width = "0";
    document.getElementById("menuLinks").classList.toggle("deactive");
    document.getElementById("menuLinks").style.transform = "translateY(-280px)";
    document.querySelector("#menuMain h1").style.transform =
      "translateY(-160px)";
    document.getElementById("menuMainControlsCnt").style.transform =
      "translateX(-160px)";
    document.getElementById("menu").style.pointerEvents = "none";
  }, []);

  //! Closer
  useEffect(() => {
    function closeMenu() {
      document.getElementById("menu").style.pointerEvents = "none";
      document.getElementById("menuLinks").classList.toggle("deactive");
      document.querySelector("#menuMain h1").style.transform =
        "translateY(-160px)";
      document.getElementById("menuMainControlsCnt").style.transform =
        "translateX(-160px)";
      document.getElementById("menuLinks").style.transform =
        "translateY(-160px)";

      setTimeout(() => {
        document.getElementById("menuMain").style.width = "0";
      }, 200);

      setTimeout(() => {
        document.getElementById("menuDarken").classList.toggle("deactive");
      }, 500);

      setTimeout(() => {
        sessionStorage.removeItem("Menu Opened.");
        document.body.style.overflowY = "auto";
        document.querySelector("nav").style.pointerEvents = "auto";
      }, 900);
    }

    document.getElementById("menuCloser").addEventListener("click", closeMenu);
    document.getElementById("menuDarken").addEventListener("click", closeMenu);
  }, []);

  return (
    <div id="menu" className={styles.menu}>
      <div id="menuDarken" className={`${styles.menu_darken} full-second`} />

      <div className={`${styles.menu_main} full-second`} id="menuMain">
        <div className={styles.menu_main_controls}>
          <h1 className="page-transition">AFP</h1>

          <div
            className={styles.menu_main_controls_cnt}
            id="menuMainControlsCnt"
          >
            <button id="menuCloser" className={styles.menu_closer}>
              <FaTimesCircle />
            </button>

            <SearchToggler />

            <CartLink />
          </div>
        </div>

        <div className={styles.menu_main_links} id="menuLinks">
          <div className={styles.menu_main_links_set}>
            <div>
              <h1>General</h1>

              <ul>
                <li>
                  <Link href="/">
                    <a className="page-transition">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="page-transition">About AFP</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.menu_main_links_set}>
            <div>
              <h1>Store</h1>

              <ul>
                <li>
                  <Link href="/store/meats">
                    <a className="page-transition">Meats</a>
                  </Link>
                </li>
                <li>
                  <Link href="/store/fruits">
                    <a className="page-transition">Fruits</a>
                  </Link>
                </li>
                <li>
                  <Link href="/store/veggies">
                    <a className="page-transition">Veggies</a>
                  </Link>
                </li>
                <li>
                  <Link href="/store/desserts">
                    <a className="page-transition">Desserts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/store">
                    <a className="page-transition">All Products</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
