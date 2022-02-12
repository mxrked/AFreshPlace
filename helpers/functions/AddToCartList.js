import { CartList } from "../../assets/arrays/CartList";

const ISSERVER = typeof window === "undefined"; // Prevents defined error

// This will be used to add an item to the cart and will update the cart count when added
export default function AddToCartList(cookie, object) {
  if (!ISSERVER) {
    if (!sessionStorage.getItem(cookie) && !CartList.indexOf(object) > -1) {
      // This will remove the cookie to prevent dupclicating when the user clicks the button multiple times
      sessionStorage.removeItem(cookie);

      // Adding the cookie to ss
      sessionStorage.setItem(cookie, true);
      CartList.push(object);
    }
  }

  document.querySelectorAll("#cartCount").forEach((ccount) => {
    ccount.innerHTML = CartList.length;
  });
}
