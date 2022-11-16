import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import { FaCartPlus } from "react-icons/fa";

import AddToCartList from "../../helpers/functions/AddToCartList";

// Objects
import {
  MeatOBJ1,
  MeatOBJ2,
  MeatOBJ3,
} from "../../assets/objects/Meat_OBJECTS";
import {
  FruitOBJ1,
  FruitOBJ2,
  FruitOBJ3,
} from "../../assets/objects/Fruit_OBJECTS";
import {
  VeggieOBJ1,
  VeggieOBJ2,
  VeggieOBJ3,
} from "../../assets/objects/Veggie_OBJECTS";
import {
  DessertOBJ1,
  DessertOBJ2,
  DessertOBJ3,
} from "../../assets/objects/Dessert_OBJECTS";

import styles from "../../styles/home/Home.module.css";

const Products = () => {
  const productsSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div id={styles.indexProducts}>
      <div className={styles.index_products_cnt}>
        <div
          className={styles.index_products_top}
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h1>Some of our products.</h1>

          <p>From meats, fruits, veggies and desserts.</p>

          <Link href="/store">
            <a className="page-transition">View Store</a>
          </Link>
        </div>

        <div
          className={styles.index_products_slider_holder}
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <Slider {...productsSettings}>
            {/* Meats */}
            <div className={`${styles.products_slide} page-transition`}>
              <div className={styles.products_slide_cnt}>
                <img
                  data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/meats/lobster.png"
                  className="lazyload blur_up"
                  alt="Lobster Tail"
                />

                <div className={styles.products_slide_cnt_deets}>
                  <h3>{MeatOBJ1.name}</h3>

                  <div>
                    <Link href="/store/meats">
                      <a className="page-transition">Meat</a>
                    </Link>

                    <span>$ {MeatOBJ1.price}</span>
                  </div>
                </div>

                <button
                  className={`${styles.products_slide_adder} cart-adder page-transition`}
                  onClick={() => {
                    AddToCartList("Lobster Tail", MeatOBJ1);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div className={`${styles.products_slide} page-transition`}>
              <div className={styles.products_slide_cnt}>
                <img
                  data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/meats/steak.png"
                  className="lazyload blur_up"
                  alt="Steak"
                />

                <div className={styles.products_slide_cnt_deets}>
                  <h3>{MeatOBJ2.name}</h3>

                  <div>
                    <Link href="/store/meats">
                      <a className="page-transition">Meat</a>
                    </Link>

                    <span>$ {MeatOBJ2.price}</span>
                  </div>
                </div>

                <button
                  className={`${styles.products_slide_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Steak", MeatOBJ2);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div className={`${styles.products_slide} page-transition`}>
              <div className={styles.products_slide_cnt}>
                <img
                  data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/meats/chicken.png"
                  className="lazyload blur_up"
                  alt="Chicken"
                />

                <div className={styles.products_slide_cnt_deets}>
                  <h3>{MeatOBJ3.name}</h3>

                  <div>
                    <Link href="/store/meats">
                      <a className="page-transition">Meat</a>
                    </Link>

                    <span>$ {MeatOBJ3.price}</span>
                  </div>
                </div>

                <button
                  className={`${styles.products_slide_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Chicken", MeatOBJ3);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div className={`${styles.products_slide} page-transition`}>
              <div className={styles.products_slide_cnt}>
                <img
                  data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/fruit/apple.png"
                  className="lazyload blur_up"
                  alt="Apple"
                />

                <div className={styles.products_slide_cnt_deets}>
                  <h3>{FruitOBJ1.name}</h3>

                  <div>
                    <Link href="/store/fruits">
                      <a className="page-transition">Fruit</a>
                    </Link>

                    <span>$3.75</span>
                  </div>
                </div>

                <button
                  className={`${styles.products_slide_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Apple", FruitOBJ1);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div className={`${styles.products_slide} page-transition`}>
              <div className={styles.products_slide_cnt}>
                <img
                  data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/fruit/banana.png"
                  className="lazyload blur_up"
                  alt="Banana"
                />

                <div className={styles.products_slide_cnt_deets}>
                  <h3>{FruitOBJ2.name}</h3>

                  <div>
                    <Link href="/store/fruits">
                      <a className="page-transition">Fruit</a>
                    </Link>

                    <span>$5.40</span>
                  </div>
                </div>

                <button
                  className={`${styles.products_slide_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Banana", FruitOBJ2);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div className={`${styles.products_slide} page-transition`}>
              <div className={styles.products_slide_cnt}>
                <img
                  data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/fruit/strawberries.png"
                  className="lazyload blur_up"
                  alt="Strawberries"
                />

                <div className={styles.products_slide_cnt_deets}>
                  <h3>{FruitOBJ3.name}</h3>

                  <div>
                    <Link href="/store/fruits">
                      <a className="page-transition">Fruit</a>
                    </Link>

                    <span>$3.95</span>
                  </div>
                </div>

                <button
                  className={`${styles.products_slide_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Strawberries", FruitOBJ3);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div className={`${styles.products_slide} page-transition`}>
              <div className={styles.products_slide_cnt}>
                <img
                  data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/veggies/asparagus.png"
                  className="lazyload blur_up"
                  alt="Asparagus"
                />

                <div className={styles.products_slide_cnt_deets}>
                  <h3>{VeggieOBJ1.name}</h3>

                  <div>
                    <Link href="/store/veggies">
                      <a className="page-transition">Veggie</a>
                    </Link>

                    <span>$ {VeggieOBJ1.price}</span>
                  </div>
                </div>

                <button
                  className={`${styles.products_slide_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Asparagus", VeggieOBJ1);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div className={`${styles.products_slide} page-transition`}>
              <div className={styles.products_slide_cnt}>
                <img
                  data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/veggies/bell-peppers.png"
                  className="lazyload blur_up"
                  alt="Bell Peppers"
                />

                <div className={styles.products_slide_cnt_deets}>
                  <h3>{VeggieOBJ2.name}</h3>

                  <div>
                    <Link href="/store/veggies">
                      <a className="page-transition">Veggie</a>
                    </Link>

                    <span>$ {VeggieOBJ2.price}</span>
                  </div>
                </div>

                <button
                  className={`${styles.products_slide_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Bell Peppers", VeggieOBJ2);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div className={`${styles.products_slide} page-transition`}>
              <div className={styles.products_slide_cnt}>
                <img
                  data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/veggies/corn.png"
                  className="lazyload blur_up"
                  alt="Corn"
                />

                <div className={styles.products_slide_cnt_deets}>
                  <h3>{VeggieOBJ3.name}</h3>

                  <div>
                    <Link href="/store/veggies">
                      <a className="page-transition">Veggie</a>
                    </Link>

                    <span>$ {VeggieOBJ3.price}</span>
                  </div>
                </div>

                <button
                  className={`${styles.products_slide_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Corn", VeggieOBJ3);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div className={`${styles.products_slide} page-transition`}>
              <div className={styles.products_slide_cnt}>
                <img
                  data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/desserts/chocolate-cake.png"
                  className="lazyload blur_up"
                  alt="Chocolate Cake"
                />

                <div className={styles.products_slide_cnt_deets}>
                  <h3>{DessertOBJ1.name}</h3>

                  <div>
                    <Link href="/store/desserts">
                      <a className="page-transition">Dessert</a>
                    </Link>

                    <span>$3.95</span>
                  </div>
                </div>

                <button
                  className={`${styles.products_slide_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Chocolate Cake", DessertOBJ1);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div className={`${styles.products_slide} page-transition`}>
              <div className={styles.products_slide_cnt}>
                <img
                  data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/desserts/keylime-pie.png"
                  className="lazyload blur_up"
                  alt="Keylime Pie"
                />

                <div className={styles.products_slide_cnt_deets}>
                  <h3>{DessertOBJ2.name}</h3>

                  <div>
                    <Link href="/store/desserts">
                      <a className="page-transition">Dessert</a>
                    </Link>

                    <span>$3.95</span>
                  </div>
                </div>

                <button
                  className={`${styles.products_slide_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Keylime Pie", DessertOBJ2);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
            <div className={`${styles.products_slide} page-transition`}>
              <div className={styles.products_slide_cnt}>
                <img
                  data-src="https://raw.githubusercontent.com/mxrked/AFreshPlace_CDN/main/store/desserts/mochi-bites.png"
                  className="lazyload blur_up"
                  alt="Mochi"
                />

                <div className={styles.products_slide_cnt_deets}>
                  <h3>{DessertOBJ3.name}</h3>

                  <div>
                    <Link href="/store/desserts">
                      <a className="page-transition">Dessert</a>
                    </Link>

                    <span>$3.95</span>
                  </div>
                </div>

                <button
                  className={`${styles.products_slide_adder} page-transition`}
                  onClick={() => {
                    AddToCartList("Mochi", DessertOBJ3);
                  }}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;
