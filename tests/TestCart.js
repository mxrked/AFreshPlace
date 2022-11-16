import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CartList } from "../assets/arrays/CartList";

// Prototype cart
const TestCart = () => {
  const router = useRouter();
  const [isDisplayed, setIsDisplayed] = useState(false);

  const cartListArray = CartList.map(function (d, idx) {
    return (
      <div key={idx} className="cart-item">
        <div>
          Name: <span className="cart-item-name">{d.name}</span>
        </div>

        <ul>
          <li>Type: {d.type}</li>
          <li className="cart-item-price">{d.price}</li>
          <li>
            Img: <span>{d.src}</span>
          </li>
        </ul>
        <span
          className="cart-remover"
          onClick={() => {
            sessionStorage.removeItem(d.name);
            router.reload();
          }}
        >
          <FaTimes />
        </span>
      </div>
    );
  });

  useEffect(() => {
    setIsDisplayed(true); //! This will be used to show the test cart and keep it on the screen
  }, []);

  return (
    <div id="testCart">
      {isDisplayed && (
        <>
          <br /> <br />
          <h1>Test Cart (For Dev eyes Only..)</h1>
          {cartListArray}
          <span id="cartTotal">$0.00</span>
          <div>
            Number of Items:
            <span id="cartItemsAmount">&nbsp;</span>
          </div>
          <br /> <br />
        </>
      )}
    </div>
  );
};

export default TestCart;
