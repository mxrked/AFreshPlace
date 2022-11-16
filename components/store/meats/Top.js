import styles from "../../../styles/store/Store.module.css";

const Top = () => {
  return (
    <div id={styles.meatsTop} className={styles.product_type_top}>
      <div>
        <h1>Our Meat Products.</h1>

        <p>
          Our meat products include: Lobster Tail, Steak, Chicken, Pork and
          Turkey.
        </p>
      </div>
    </div>
  );
};

export default Top;
