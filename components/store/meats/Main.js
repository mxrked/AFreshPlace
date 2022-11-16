import { Component } from "react";

import AddToCartList from "../../../helpers/functions/AddToCartList";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

// Objects
import {
  MeatOBJ1,
  MeatOBJ2,
  MeatOBJ3,
  MeatOBJ4,
  MeatOBJ5,
} from "../../../assets/objects/Meat_OBJECTS";

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
            <p>Meat</p>

            <span>{props.productSPAN}</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id={styles.meatsMain}>
        <div className={`${styles.products_main_box} container-fluid`}>
          <div className={`${styles.products_main_row} row`}>
            <div
              className={`${styles.product_item} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
            >
              <div className={styles.product_item_cnt}>
                <this.createProductInner
                  productIMG={MeatOBJ1.src}
                  productName={MeatOBJ1.name}
                  productSPAN={MeatOBJ1.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Lobster Tail", MeatOBJ1);
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
                  productIMG={MeatOBJ2.src}
                  productName={MeatOBJ2.name}
                  productSPAN={MeatOBJ2.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Steak", MeatOBJ2);
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
                  productIMG={MeatOBJ3.src}
                  productName={MeatOBJ3.name}
                  productSPAN={MeatOBJ3.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Chicken", MeatOBJ3);
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
                  productIMG={
                    "http://basicallyeasy.com/NextJSCDNS/afreshplace/store/meats/pork-2.png"
                  }
                  productName={MeatOBJ4.name}
                  productSPAN={MeatOBJ4.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Pork", MeatOBJ4);
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
                  productIMG={
                    "http://basicallyeasy.com/NextJSCDNS/afreshplace/store/meats/turkey-2.png"
                  }
                  productName={MeatOBJ5.name}
                  productSPAN={MeatOBJ5.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Turkey", MeatOBJ5);
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
