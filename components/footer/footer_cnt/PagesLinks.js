import Link from "next/link";

import styles from "../../../styles/footer/Footer.module.css";

const PagesLinks = () => {
  return (
    <div id={styles.pagesLinks}>
      <h3>Pages</h3>

      <ul>
        <li>
          <Link href="/">
            <a className="page-transition">Home/Index</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="page-transition">About AFP</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a className="page-transition">Your Cart</a>
          </Link>
        </li>
        <li className={styles.fakeLink}>&nbsp;</li>
        <li className={styles.fakeLink}>&nbsp;</li>
      </ul>
    </div>
  );
};

export default PagesLinks;
