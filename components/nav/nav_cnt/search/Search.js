import { useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

import { FaSearch, FaTimes } from "react-icons/fa";

import styles from "../../../../styles/nav/Nav.module.css";
import {
  ABOUT_KWS,
  DESSERT_KWS,
  FRUIT_KWS,
  HOME_KWS,
  MEAT_KWS,
  STORE_KWS,
  VEGGIES_KWS,
} from "../../../../assets/arrays/Keywords";

const Search = () => {
  const router = useRouter();
  const env = process.env.NODE_ENV; // This will be used to detect client vs server side for the search

  //! Defaults
  useEffect(() => {
    document.getElementById("search").style.display = "none";
    document.getElementById("searchCnt").classList.toggle("deactive");
    document.getElementById("searchDarken").classList.toggle("deactive");
    document.getElementById("searchCnt").style.pointerEvents = "none";
  }, []);

  //! Closing search
  useEffect(() => {
    document.getElementById("searchCloser").addEventListener("click", () => {
      document.getElementById("searchCnt").classList.toggle("deactive");
      document.getElementById("searchCnt").style.pointerEvents = "none";

      document.getElementById("searchIpt").value = "";

      document.querySelectorAll("#searchLinks li").forEach((li) => {
        li.style.display = "flex";
      });

      setTimeout(() => {
        document.getElementById("searchDarken").classList.toggle("deactive");
      }, 800);

      setTimeout(() => {
        sessionStorage.removeItem("Search Opened.");
        document.body.style.overflowY = "auto";
      }, 1400);
    });
  }, []);

  //! Filter Search Links
  function filterSearch() {
    var ipt, filter, links, links_li, link, i, txtVal;

    ipt = document.getElementById("searchIpt");
    filter = ipt.value.toUpperCase();
    links = document.getElementById("searchLinks");
    links_li = links.getElementsByTagName("li");

    for (i = 0; i < links_li.length; i++) {
      link = links_li[i].getElementsByTagName("a")[0];

      txtVal = link.textContent || link.innerText;

      if (txtVal.toUpperCase().indexOf(filter) > -1) {
        links_li[i].style.display = "";
      } else {
        links_li[i].style.display = "none";
      }
    }
  }

  //! Reroute Search
  // Client side routing
  function localRouting() {
    var i;
    const searchIptVal = document
      .getElementById("searchIpt")
      .value.toLowerCase();

    for (i = 0; i < HOME_KWS.length; i++) {
      if (searchIptVal.indexOf(HOME_KWS[i]) > -1) {
        router.push("/");
      }
    }

    for (i = 0; i < STORE_KWS.length; i++) {
      if (searchIptVal.indexOf(STORE_KWS[i]) > -1) {
        router.push("/store");
      }
    }

    for (i = 0; i < ABOUT_KWS.length; i++) {
      if (searchIptVal.indexOf(ABOUT_KWS[i]) > -1) {
        router.push("/about");
      }
    }

    for (i = 0; i < MEAT_KWS.length; i++) {
      if (searchIptVal.indexOf(MEAT_KWS[i]) > -1) {
        router.push("/store/meats");
      }
    }

    for (i = 0; i < FRUIT_KWS.length; i++) {
      if (searchIptVal.indexOf(FRUIT_KWS[i]) > -1) {
        router.push("/store/fruits");
      }
    }

    for (i = 0; i < VEGGIES_KWS.length; i++) {
      if (searchIptVal.indexOf(VEGGIES_KWS[i]) > -1) {
        router.push("/store/veggies");
      }
    }

    for (i = 0; i < DESSERT_KWS.length; i++) {
      if (searchIptVal.indexOf(DESSERT_KWS[i]) > -1) {
        router.push("/store/desserts");
      }
    }
  }

  // Server side routing
  function serverRouting() {
    var i;
    const searchIptVal = document
      .getElementById("searchIpt")
      .value.toLowerCase();

    for (i = 0; i < HOME_KWS.length; i++) {
      if (searchIptVal.indexOf(HOME_KWS[i]) > -1) {
        router.push("/");
      }
    }

    for (i = 0; i < STORE_KWS.length; i++) {
      if (searchIptVal.indexOf(STORE_KWS[i]) > -1) {
        router.push("/store");
      }
    }

    for (i = 0; i < ABOUT_KWS.length; i++) {
      if (searchIptVal.indexOf(ABOUT_KWS[i]) > -1) {
        router.push("/about");
      }
    }

    for (i = 0; i < MEAT_KWS.length; i++) {
      if (searchIptVal.indexOf(MEAT_KWS[i]) > -1) {
        router.push("/store/meats");
      }
    }

    for (i = 0; i < FRUIT_KWS.length; i++) {
      if (searchIptVal.indexOf(FRUIT_KWS[i]) > -1) {
        router.push("/store/fruits");
      }
    }

    for (i = 0; i < VEGGIES_KWS.length; i++) {
      if (searchIptVal.indexOf(VEGGIES_KWS[i]) > -1) {
        router.push("/store/veggies");
      }
    }

    for (i = 0; i < DESSERT_KWS.length; i++) {
      if (searchIptVal.indexOf(DESSERT_KWS[i]) > -1) {
        router.push("/store/desserts");
      }
    }
  }

  //! Routing Enviroment detection
  useEffect(() => {
    document.getElementById("searchIpt").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (env == "development") {
          localRouting();
        }

        if (env == "production") {
          serverRouting();
        }
      }
    });

    document.getElementById("searchGo").addEventListener("click", () => {
      if (env == "development") {
        localRouting();
      }

      if (env == "production") {
        serverRouting();
      }
    });
  }, [router]);

  return (
    <div id="search">
      <div id="searchDarken" className={styles.search_darken} />

      <div id="searchCnt" className={styles.search_cnt}>
        <div className={styles.search_cnt_inner}>
          <div className={styles.search_cnt_inner_top}>
            <h1>Look something up..</h1>

            <button id="searchCloser">
              Close <FaTimes className={styles.fa_icon} />
            </button>
          </div>

          <div className={styles.search_cnt_inner_main}>
            <div>
              <input
                type="text"
                id="searchIpt"
                placeholder="Ex: Apples"
                autoComplete="off"
                onKeyUp={filterSearch}
              />

              <button id="searchGo" className="page-transition">
                <FaSearch />
              </button>
            </div>

            <ul id="searchLinks">
              <li>
                <Link href="/">
                  <a className="page-transition">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/store">
                  <a className="page-transition">All Products</a>
                </Link>
              </li>
              <li>
                <Link href="/store/meats">
                  <a className="page-transition">All Meats</a>
                </Link>
              </li>
              <li>
                <Link href="/store/fruits">
                  <a className="page-transition">All Fruits</a>
                </Link>
              </li>
              <li>
                <Link href="/store/veggies">
                  <a className="page-transition">All Veggies</a>
                </Link>
              </li>
              <li>
                <Link href="/store/desserts">
                  <a className="page-transition">All Desserts</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="page-transition">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <a className="page-transition">Support Team</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
