import Link from "next/link";

import styles from "../../../styles/footer/Footer.module.css";

const ProductsLinks = () => {
  return (
    <div id={styles.productsLinks}>
      <h3>Products</h3>

      <ul>
        <li>
          <Link href="/store">
            <a className="page-transition">All Products</a>
          </Link>
        </li>
        <li>
          <Link href="/store/meats">
            <a className="page-transition">Meats</a>
          </Link>
        </li>
        <li>
          <Link href="/store/fruits">
            <a className="page-transition">Fruits</a>
          </Link>
        </li>
        <li>
          <Link href="/store/veggies">
            <a className="page-transition">Veggies</a>
          </Link>
        </li>
        <li>
          <Link href="/store/desserts">
            <a className="page-transition">Desserts</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductsLinks;
