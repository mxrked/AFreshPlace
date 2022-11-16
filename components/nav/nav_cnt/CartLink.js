import Link from "next/link";

import styles from "../../../styles/nav/Nav.module.css";

import { FaShoppingCart } from "react-icons/fa";

const CartLink = () => {
  return (
    <Link href="/cart">
      <a className={`${styles.cart_link} page-transition`}>
        <div>
          <FaShoppingCart className={styles.fa_icon} />

          <div className={styles.cart_link_inner}>
            <span id="cartCount">0</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CartLink;
