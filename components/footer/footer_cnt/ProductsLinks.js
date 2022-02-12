import Link from "next/link";

import styles from "../../../styles/footer/Footer.module.css";

const ProductsLinks = () => {
  return (
    <div id={styles.productsLinks}>
      <h3>Products</h3>

      <ul>
        <li>
          <Link href="/next-projects/afreshplace/store/">
            <a className="page-transition">All Products</a>
          </Link>
        </li>
        <li>
          <Link href="/next-projects/afreshplace/store/meats/">
            <a className="page-transition">Meats</a>
          </Link>
        </li>
        <li>
          <Link href="/next-projects/afreshplace/store/fruits/">
            <a className="page-transition">Fruits</a>
          </Link>
        </li>
        <li>
          <Link href="/next-projects/afreshplace/store/veggies/">
            <a className="page-transition">Veggies</a>
          </Link>
        </li>
        <li>
          <Link href="/next-projects/afreshplace/store/desserts/">
            <a className="page-transition">Desserts</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductsLinks;
