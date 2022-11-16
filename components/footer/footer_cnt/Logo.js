import Link from "next/link";

import styles from "../../../styles/footer/Footer.module.css";

const Logo = () => {
  return (
    <div id={styles.footerLogo}>
      <Link href="/">
        <a>
          <h1>A Fresh Place</h1>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
