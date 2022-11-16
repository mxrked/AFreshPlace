import Link from "next/link";

import styles from "../../../styles/nav/Nav.module.css";

const NavLogo = () => {
  return (
    <Link href="/">
      <a className="page-transition" id={styles.navLogo}>
        <div>
          <h1>A Fresh Place</h1>

          <ul>
            <li>Meats</li>|<li>Fruits</li>|<li>Veggies</li>|<li>Desserts</li>
          </ul>
        </div>
      </a>
    </Link>
  );
};

export default NavLogo;
