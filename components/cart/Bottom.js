import { useRouter } from "next/router";
import { useEffect } from "react";

import styles from "../../styles/cart/Cart.module.css";

const Bottom = () => {
  const router = useRouter();
  const env = process.env.NODE_ENV;

  // This will count up all the item prices and will calculate a total price
  useEffect(() => {
    var i;

    let price_val;
    let quantity_val;
    var cartTotalPrice;

    function appendTotal() {
      const cartPrices = [];
      document.querySelectorAll(".cart-item-price").forEach((p) => {
        price_val = p.innerHTML;
        quantity_val = p
          .closest(".c-item")
          .querySelector(".cart-item-side input").value;

        const subTotal = price_val * quantity_val;

        cartPrices.push(parseFloat(subTotal).toFixed(2));
      });

      const convertCartPrices = cartPrices.map(Number);

      cartTotalPrice = 0;
      for (i = 0; i < convertCartPrices.length; i++) {
        cartTotalPrice += convertCartPrices[i];
      }

      document.getElementById("cartTotal").innerHTML = `$ ${
        Math.round(cartTotalPrice * 100) / 100
      }`;
    }

    // This will update the price of the item based on its quantity
    setTimeout(() => {
      document.querySelectorAll(".cart-item-side input").forEach((input) => {
        input.value = 1;
        input.addEventListener("change", () => {
          appendTotal();
        });
      });
    }, 100);

    // Load the current price
    setTimeout(() => {
      appendTotal();
    }, 100);
  }, []);

  // This is for the buttons at the bottom
  useEffect(() => {
    //! Cart Purchase
    document.getElementById("cartPurchase").addEventListener("click", () => {
      if (env == "development") {
        router.push("/");
      }

      if (env == "production") {
        router.push("/next-projects/afreshplace/");
      }
    });

    //! Cart Clear
    document.getElementById("cartClear").addEventListener("click", () => {
      document.querySelectorAll(".cart-item-name").forEach((n) => {
        const nameVal = n.innerHTML;

        sessionStorage.removeItem(nameVal);
        router.reload();
      });
    });
  }, []);

  return (
    <div id={styles.cartBottom}>
      <div className={styles.cart_bottom_side} id={styles.cartBottomL}>
        <div className={styles.cart_bottom_side_cnt}>
          <div>
            <p>Total: </p>

            <span id="cartTotal">$0.00</span>
          </div>
        </div>
      </div>
      <div className={styles.cart_bottom_side} id={styles.cartBottomR}>
        <div className={styles.cart_bottom_side_cnt}>
          <button id="cartPurchase" className="page-transition">
            Proceed to Checkout
          </button>

          <button id="cartClear" className="page-transition">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
