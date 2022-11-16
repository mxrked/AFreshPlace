import { Component } from "react";

import AddToCartList from "../../../helpers/functions/AddToCartList";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

// Objects
import {
  VeggieOBJ1,
  VeggieOBJ2,
  VeggieOBJ3,
  VeggieOBJ4,
  VeggieOBJ5,
} from "../../../assets/objects/Veggie_OBJECTS";

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
            <p>Veggie</p>

            <span>{props.productSPAN}</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id={styles.veggiesMain}>
        <div className={`${styles.products_main_box} container-fluid`}>
          <div className={`${styles.products_main_row} row`}>
            <div
              className={`${styles.product_item} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
            >
              <div className={styles.product_item_cnt}>
                <this.createProductInner
                  productIMG={VeggieOBJ1.src}
                  productName={VeggieOBJ1.name}
                  productSPAN={VeggieOBJ1.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Asparagus", VeggieOBJ1);
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
                  productIMG={VeggieOBJ2.src}
                  productName={VeggieOBJ2.name}
                  productSPAN={VeggieOBJ2.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Bell Peppers", VeggieOBJ2);
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
                  productIMG={VeggieOBJ3.src}
                  productName={VeggieOBJ3.name}
                  productSPAN={VeggieOBJ3.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Corn", VeggieOBJ3);
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
                  productIMG={VeggieOBJ4.src}
                  productName={VeggieOBJ4.name}
                  productSPAN={VeggieOBJ4.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Mushrooms", VeggieOBJ4);
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
                  productIMG={VeggieOBJ5.src}
                  productName={VeggieOBJ5.name}
                  productSPAN={VeggieOBJ5.price}
                />

                <button
                  className={`${styles.product_item_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Potatoes", VeggieOBJ5);
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
