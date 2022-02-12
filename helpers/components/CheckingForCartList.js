import { CartList } from "../../assets/arrays/CartList";

// Objects
import {
  MeatOBJ1,
  MeatOBJ2,
  MeatOBJ3,
  MeatOBJ4,
  MeatOBJ5,
} from "../../assets/objects/Meat_OBJECTS";
import {
  FruitOBJ1,
  FruitOBJ2,
  FruitOBJ3,
  FruitOBJ4,
  FruitOBJ5,
} from "../../assets/objects/Fruit_OBJECTS";
import {
  VeggieOBJ1,
  VeggieOBJ2,
  VeggieOBJ3,
  VeggieOBJ4,
  VeggieOBJ5,
} from "../../assets/objects/Veggie_OBJECTS";
import {
  DessertOBJ1,
  DessertOBJ2,
  DessertOBJ3,
  DessertOBJ4,
  DessertOBJ5,
} from "../../assets/objects/Dessert_OBJECTS";
import { useEffect } from "react";

const CheckingForCartList = () => {
  useEffect(() => {
    CartList.length = 0; // Resets and prevents increase when routing

    // This will be used to create instances instead of alot of if statements
    function checkForCartItem(cookie, object) {
      if (sessionStorage.getItem(cookie) && !CartList.indexOf(object) > -1) {
        CartList.push(object);
      }
    }

    // Meats
    checkForCartItem("Lobster Tail", MeatOBJ1);
    checkForCartItem("Steak", MeatOBJ2);
    checkForCartItem("Chicken", MeatOBJ3);
    checkForCartItem("Pork", MeatOBJ4);
    checkForCartItem("Turkey", MeatOBJ5);

    // Fruits
    checkForCartItem("Apple", FruitOBJ1);
    checkForCartItem("Banana", FruitOBJ2);
    checkForCartItem("Strawberries", FruitOBJ3);
    checkForCartItem("Blueberries", FruitOBJ4);
    checkForCartItem("Watermelon", FruitOBJ5);

    // Veggies
    checkForCartItem("Asparagus", VeggieOBJ1);
    checkForCartItem("Bell Peppers", VeggieOBJ2);
    checkForCartItem("Corn", VeggieOBJ3);
    checkForCartItem("Mushrooms", VeggieOBJ4);
    checkForCartItem("Potatoes", VeggieOBJ5);

    // Desserts
    checkForCartItem("Chocolate Cake", DessertOBJ1);
    checkForCartItem("Keylime Pie", DessertOBJ2);
    checkForCartItem("Mochi", DessertOBJ3);
    checkForCartItem("Cinnamon Roll", DessertOBJ4);
    checkForCartItem("Strawberry Ice Cream", DessertOBJ5);

    // Adds cartList length to cartcounts
    document.querySelectorAll("#cartCount").forEach((ccount) => {
      ccount.innerHTML = CartList.length;
    });

    console.table(CartList);
  }, []);

  return "";
};

export default CheckingForCartList;
