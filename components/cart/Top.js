import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

import { CartList } from "../../assets/arrays/CartList";

import styles from "../../styles/cart/Cart.module.css";

const Top = () => {
  useEffect(() => {
    if (CartList.length < 1) {
      setTimeout(() => {
        document.getElementById("cartTopCount").innerHTML = " 0";
      }, 100);
    } else {
      setTimeout(() => {
        document.getElementById(
          "cartTopCount"
        ).innerHTML = ` ${CartList.length}`;
      }, 100);
    }
  }, []);

  return (
    <div id={styles.cartTop}>
      <div className={styles.cart_top_cnt}>
        <div>
          <h1>My Cart</h1>
          <FaShoppingCart className={styles.fa_icon} />
        </div>

        <div>
          <p>
            You currently have <span id="cartTopCount"></span> items in your
            cart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Top;
