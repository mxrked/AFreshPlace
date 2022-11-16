import { useRouter } from "next/router";
import { useEffect } from "react";

// import "lazysizes";
// import "lazysizes/plugins/parent-fit/ls.parent-fit";

import styles from "../../styles/js/Js.module.css";

const RefreshFix = () => {
  const router = useRouter();

  useEffect(() => {
    const RF = document.getElementById("refreshFix");
    window.addEventListener("load", () => {
      setTimeout(() => {
        RF.classList.toggle("deactive");
        sessionStorage.setItem("Refresh Fix", true);
      }, 300);
    });

    if (sessionStorage.getItem("Refresh Fix")) {
      RF.style.display = "none";
    }
  }, [router]);

  return (
    <div id="refreshFix" className={`${styles.refresh_fix} full-second`}>
      <img
        src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/loader.gif"
        // className="lazyload"
        alt="Loader GIF"
      />
    </div>
  );
};

export default RefreshFix;
