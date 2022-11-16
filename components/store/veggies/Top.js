import styles from "../../../styles/store/Store.module.css";

const Top = () => {
  return (
    <div id={styles.veggiesTop} className={styles.product_type_top}>
      <div>
        <h1>Our Veggie Products.</h1>

        <p>
          Our veggie products include: Asparagus, Bell Peppers, Corn, Mushrooms
          and Potatoes.
        </p>
      </div>
    </div>
  );
};

export default Top;
