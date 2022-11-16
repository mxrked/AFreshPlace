import { useEffect } from "react";
import { CartList } from "../assets/arrays/CartList";

// This will be used to add some calculations and data to the cart.
const TestCalculations = () => {
  //! This will be used to calculate the total
  useEffect(() => {
    var i;
    const prices = [];
    var price_val;
    var totalPrice;

    function appendTotal() {
      document.querySelectorAll(".cart-item-price").forEach((p) => {
        price_val = p.innerHTML;

        const subTotal = price_val;

        prices.push(parseFloat(subTotal).toFixed(2));
      });

      const convertedPrices = prices.map(Number);

      totalPrice = 0;
      for (i = 0; i < convertedPrices.length; i++) {
        totalPrice += convertedPrices[i];
      }

      document.getElementById("cartTotal").innerHTML = `Total: $ ${
        Math.round(totalPrice * 100) / 100
      }`;
    }

    setTimeout(() => {
      appendTotal();
    }, 100);
  }, []);

  //! This will be used to add a count of items
  useEffect(() => {
    if (CartList.length < 1) {
      setTimeout(() => {
        document.getElementById("cartItemsAmount").innerHTML = " 0";
      }, 100);
    } else {
      setTimeout(() => {
        document.getElementById(
          "cartItemsAmount"
        ).innerHTML = ` ${CartList.length}`;
      }, 100);
    }
  }, []);

  return "";
};

export default TestCalculations;
