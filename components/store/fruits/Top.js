import styles from "../../../styles/store/Store.module.css";

const Top = () => {
  return (
    <div id={styles.fruitsTop} className={styles.product_type_top}>
      <div>
        <h1>Our Fruit Products.</h1>

        <p>
          Our fruit products include: Apple, Banana, Strawberries, Blueberries
          and Watermelon.
        </p>
      </div>
    </div>
  );
};

export default Top;
