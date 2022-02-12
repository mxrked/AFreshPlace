import Link from "next/link";

import styles from "../../../styles/footer/Footer.module.css";

const PagesLinks = () => {
  return (
    <div id={styles.pagesLinks}>
      <h3>Pages</h3>

      <ul>
        <li>
          <Link href="/next-projects/afreshplace/">
            <a className="page-transition">Home/Index</a>
          </Link>
        </li>
        <li>
          <Link href="/next-projects/afreshplace/about/">
            <a className="page-transition">About AFP</a>
          </Link>
        </li>
        <li>
          <Link href="/next-projects/afreshplace/cart/">
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
