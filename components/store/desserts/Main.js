import { Component } from "react";

import AddToCartList from "../../../helpers/functions/AddToCartList";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

// Objects
import {
  DessertOBJ1,
  DessertOBJ2,
  DessertOBJ3,
  DessertOBJ4,
  DessertOBJ5,
} from "../../../assets/objects/Dessert_OBJECTS";

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
            <p>Dessert</p>

            <span>{props.productSPAN}</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id={styles.dessertsMain}>
        <div className={`${styles.products_main_box} container-fluid`}>
          <div className={`${styles.products_main_row} row`}>
            <div
              className={`${styles.product_item} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
            >
              <div className={styles.product_item_cnt}>
                <this.createProductInner
                  productIMG={DessertOBJ1.src}
                  productName={DessertOBJ1.name}
                  productSPAN={DessertOBJ1.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Chocolate Cake", DessertOBJ1);
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
                  productIMG={DessertOBJ2.src}
                  productName={DessertOBJ2.name}
                  productSPAN={DessertOBJ2.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Keylime Pie", DessertOBJ2);
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
                  productIMG={DessertOBJ3.src}
                  productName={DessertOBJ3.name}
                  productSPAN={DessertOBJ3.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Mochi", DessertOBJ3);
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
                  productIMG={DessertOBJ4.src}
                  productName={DessertOBJ4.name}
                  productSPAN={DessertOBJ4.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Cinnamon Roll", DessertOBJ4);
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
                  productIMG={DessertOBJ5.src}
                  productName={DessertOBJ5.name}
                  productSPAN={DessertOBJ5.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Strawberry Ice Cream", DessertOBJ5);
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
