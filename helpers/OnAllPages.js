import { useEffect } from "react";
import Nav from "../components/nav/Nav";
import Menu from "../components/nav/nav_cnt/menu/Menu";
import Search from "../components/nav/nav_cnt/search/Search";
import CheckingForCartList from "./components/CheckingForCartList";

import AOS from "aos";
import RefreshFix from "../components/overlay/RefreshFix";
import BackToTop from "../components/overlay/BackToTop";

const OnAllPages = () => {
  //! Made with NextJS
  useEffect(() => {
    if (document.getElementById("__next")) {
      console.log("SharpQuills was made with NextJS (v. 12.0.8).");
    }
  }, []);

  //! Activating AOS
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "linear",
      disable: "mobile",
    });
  }, []);

  return (
    <div className="onAllPages">
      <Nav />
      <Search />
      <Menu />
      <CheckingForCartList />
      <RefreshFix />
      <BackToTop />
    </div>
  );
};

export default OnAllPages;
