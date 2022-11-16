import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { CartList } from "../../assets/arrays/CartList";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import styles from "../../styles/cart/Cart.module.css";
import { FaTimes } from "react-icons/fa";

const Main = () => {
  const router = useRouter();
  const [isDisplayed, setIsDisplayed] = useState(false);

  // This will map out the different items inside of the cart
  const mappingCartList = CartList.map(function (d, idx) {
    return (
      <div key={idx} className={`${styles.cart_item} c-item`}>
        <div
          className={`${styles.cart_item_img_side} ${styles.cart_item_side}`}
        >
          <img data-src={d.src} className="lazyload blur_up" alt={d.name} />
        </div>
        <div
          className={`${styles.cart_item_info_side} ${styles.cart_item_side}`}
        >
          <div>
            <h3 className="cart-item-name">{d.name}</h3>
            <span>{d.type}</span>
          </div>
        </div>
        <div
          className={`${styles.cart_item_price_side} ${styles.cart_item_side}`}
        >
          <div>
            <span className={styles.dollar_sign}>$</span>
            <span className={`${styles.cart_item_price} cart-item-price`}>
              {d.price}
            </span>
          </div>
        </div>
        <div
          className={`${styles.cart_item_quantity_side} ${styles.cart_item_side} cart-item-side`}
        >
          <div>
            <span>Q</span>
            <input
              type="number"
              className="cart-item-quantity"
              min="1"
              max="99"
            />
          </div>
        </div>
        <div
          className={`${styles.cart_item_remover_side} ${styles.cart_item_side}`}
        >
          <span
            className={`${styles.cart_remover} cart-remover`}
            onClick={() => {
              sessionStorage.removeItem(d.name);
              router.reload();
            }}
          >
            <FaTimes />
          </span>
        </div>
      </div>
    );
  });

  // This will keep the cart items inside of cart until the user removes them
  useEffect(() => {
    setIsDisplayed(true);
  }, []);

  // This will be to display/hide the cart empty hint
  useEffect(() => {
    const CART_EMPTY = document.getElementById("cartMainEmpty");

    if (CartList.length < 1) {
      CART_EMPTY.style.display = "block";
    } else {
      CART_EMPTY.style.display = "none";
    }
  }, []);

  return (
    <div id={styles.cartMain}>
      <div className={styles.cart_main_empty} id="cartMainEmpty">
        <span>The cart is empty.</span>
      </div>

      {isDisplayed && <>{mappingCartList}</>}
    </div>
  );
};

export default Main;
