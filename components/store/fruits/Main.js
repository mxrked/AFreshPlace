import { Component } from "react";

import AddToCartList from "../../../helpers/functions/AddToCartList";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

// Objects
import {
  FruitOBJ1,
  FruitOBJ2,
  FruitOBJ3,
  FruitOBJ4,
  FruitOBJ5,
} from "../../../assets/objects/Fruit_OBJECTS";

import { FaCartPlus } from "react-icons/fa";

import styles from "../../../styles/store/Store.module.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.createProductInner = this.createProductInner.bind(this);
  }

  createProductInner(props) {
    return (
      <div className={styles.product_inner}>
        <img
          data-src={props.productIMG}
          className="lazyload"
          alt={`${props.productName} Image.`}
        />

        <div className={styles.product_inner_deets}>
          <h3>{props.productName}</h3>

          <div>
            <p>Fruit</p>

            <span>{props.productSPAN}</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id={styles.fruitsMain}>
        <div className={`${styles.products_main_box} container-fluid`}>
          <div className={`${styles.products_main_row} row`}>
            <div
              className={`${styles.product_item} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
            >
              <div className={styles.product_item_cnt}>
                <this.createProductInner
                  productIMG={FruitOBJ1.src}
                  productName={FruitOBJ1.name}
                  productSPAN={FruitOBJ1.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Apple", FruitOBJ1);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div
              className={`${styles.product_item} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
            >
              <div className={styles.product_item_cnt}>
                <this.createProductInner
                  productIMG={FruitOBJ2.src}
                  productName={FruitOBJ2.name}
                  productSPAN={FruitOBJ2.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Banana", FruitOBJ2);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div
              className={`${styles.product_item} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
            >
              <div className={styles.product_item_cnt}>
                <this.createProductInner
                  productIMG={FruitOBJ3.src}
                  productName={FruitOBJ3.name}
                  productSPAN={FruitOBJ3.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Strawberries", FruitOBJ3);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div
              className={`${styles.product_item} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
            >
              <div className={styles.product_item_cnt}>
                <this.createProductInner
                  productIMG={FruitOBJ4.src}
                  productName={FruitOBJ4.name}
                  productSPAN={FruitOBJ4.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Blueberries", FruitOBJ4);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div
              className={`${styles.product_item} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
            >
              <div className={styles.product_item_cnt}>
                <this.createProductInner
                  productIMG={FruitOBJ5.src}
                  productName={FruitOBJ5.name}
                  productSPAN={FruitOBJ5.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Watermelon", FruitOBJ5);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
