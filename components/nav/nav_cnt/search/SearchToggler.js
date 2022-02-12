import { useEffect } from "react";

import { FaSearch } from "react-icons/fa";

import styles from "../../../../styles/nav/Nav.module.css";

import ManipulateScroll from "../../../../helpers/functions/ManipulateScroll";

const SearchToggler = () => {
  //! Toggling Search
  useEffect(() => {
    document.querySelectorAll("#searchToggler").forEach((toggler) => {
      toggler.addEventListener("click", () => {
        document.getElementById("searchDarken").style.display = "block";
        document.getElementById("search").style.display = "block";
        sessionStorage.setItem("Search Opened.", true);

        ManipulateScroll();

        document.getElementById("search").style.display = "block";

        setTimeout(() => {
          document.getElementById("searchDarken").classList.remove("deactive");
        }, 500);

        setTimeout(() => {
          document.getElementById("searchCnt").classList.remove("deactive");
        }, 1000);

        setTimeout(() => {
          document.getElementById("searchCnt").style.pointerEvents = "auto";
        }, 1500);
      });
    });
  }, []);

  return (
    <button
      id="searchToggler"
      className={`${styles.search_toggler} page-transition`}
    >
      <FaSearch />
    </button>
  );
};

export default SearchToggler;
