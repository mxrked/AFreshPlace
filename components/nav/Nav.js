import styles from "../../styles/nav/Nav.module.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

import MenuToggler from "./nav_cnt/menu/MenuToggler";
import NavLogo from "./nav_cnt/NavLogo";
import SearchToggler from "./nav_cnt/search/SearchToggler";
import CartLink from "./nav_cnt/CartLink";
import ManipulateScroll from "../../helpers/functions/ManipulateScroll";

const Nav = () => {
  const router = useRouter();

  //! Clearing SS for search and menu when changing pages/routes and enabling vertical scroll
  useEffect(() => {
    function removingSSForOverflow() {
      sessionStorage.removeItem("Menu Opened.");
      sessionStorage.removeItem("Search Opened.");
    }

    removingSSForOverflow();
    setTimeout(() => {
      ManipulateScroll();
    }, 10);
  }, [router]);

  //! Checking which page the user is on and will manipulate the navigation
  useEffect(() => {
    const NAV = document.querySelector("nav");

    function manipNav() {
      if (
        !router.pathname.indexOf("store") > -1 ||
        !router.pathname.indexOf("about") > -1 ||
        !router.pathname.indexOf("support") > -1
      ) {
        if (window.scrollY > 20) {
          NAV.style.top = "-500px";
        } else {
          NAV.style.top = "0";
        }
      }
    }

    if (router.pathname === "/") {
      window.addEventListener("load", manipNav);
      window.addEventListener("scroll", manipNav);
    }
  }, [router]);

  return (
    <nav id={styles.navigation}>
      <div className={`${styles.navigation_box} container-fluid`}>
        <div className={`${styles.navigation_row} row`}>
          <div
            className={`${styles.navigation_side} col-lg-4 col-md-4 col-sm-6 col-xs-6`}
            id={styles.navigationL}
          >
            <div className={styles.navigation_side_cnt}>
              <MenuToggler />
            </div>
          </div>
          <div
            className={`${styles.navigation_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            id={styles.navigationM}
          >
            <div className={styles.navigation_side_cnt}>
              <NavLogo />
            </div>
          </div>
          <div
            className={`${styles.navigation_side} col-lg-4 col-md-4 col-sm-6 col-xs-6`}
            id={styles.navigationR}
          >
            <div className={styles.navigation_side_cnt}>
              <SearchToggler />
              <CartLink />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
