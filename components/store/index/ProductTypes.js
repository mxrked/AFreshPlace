import { Component } from "react";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import styles from "../../../styles/store/Store.module.css";
import Link from "next/link";

class ProductTypes extends Component {
  constructor(props) {
    super(props);

    this.createProductType = this.createProductType.bind(this);
  }

  createProductType(props) {
    return (
      <div
        className={`${styles.store_product_types_row} ${styles.store_product_types_1} row`}
      >
        <div
          className={`${styles.store_product_types_side} ${styles.store_product_types_img_side} col-lg-6 col-md-6 col-sm-6 col-xs-12 order-lg-0 order-md-0 order-sm-0 order-xs-0`}
        >
          <div className={styles.store_product_types_side_cnt}>
            <img
              data-src={`https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/index/${props.storeProductIMG}`}
              alt={props.storeProductImgALT}
              className={`lazyload blur_up`}
            />
          </div>
        </div>
        <div
          className={`${styles.store_product_types_side} ${styles.store_product_types_text_side} col-lg-6 col-md-6 col-sm-6 col-xs-12 order-lg-1 order-md-1 order-sm-1 order-xs-1`}
        >
          <div className={styles.store_product_types_side_cnt}>
            <h2>{props.storeProductH2}</h2>

            <p>Includes: {props.storeProductP}</p>

            <Link href={props.storeProductHREF}>
              <a className="page-transition">View Type</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id={styles.storeProductTypes}>
        <div
          className={`${styles.store_product_types_box} container-fluid`}
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <this.createProductType
            storeProductIMG="meat-type.png"
            storeProductImgALT="Meat Type Image."
            storeProductH2="Meat Products."
            storeProductP="Lobster Tail, Steak, Chicken, Pork and Turkey."
            storeProductHREF="/store/meats"
          />
        </div>
        <div
          className={`${styles.store_product_types_box} container-fluid`}
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <this.createProductType
            storeProductIMG="fruit-type.png"
            storeProductImgALT="Fruits Type Image."
            storeProductH2="Fruit Products."
            storeProductP="Apple, Banana, Strawberries, Blueberries and Watermelon."
            storeProductHREF="/store/fruits"
          />
        </div>
        <div
          className={`${styles.store_product_types_box} container-fluid`}
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <this.createProductType
            storeProductIMG="veggies-type.png"
            storeProductImgALT="Veggies Type Image."
            storeProductH2="Veggie Products."
            storeProductP="Asparagus, Bell Peppers, Corn, Mushrooms and Potatoes."
            storeProductHREF="/store/veggies"
          />
        </div>
        <div
          className={`${styles.store_product_types_box} container-fluid`}
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <this.createProductType
            storeProductIMG="desserts-type.png"
            storeProductImgALT="Desserts Type Image."
            storeProductH2="Dessert Products."
            storeProductP="Chocolate Cake, Keylime Pie, Mochi, Cinnamon Roll and Strawberry Ice Cream."
            storeProductHREF="/store/desserts"
          />
        </div>
      </div>
    );
  }
}

export default ProductTypes;
