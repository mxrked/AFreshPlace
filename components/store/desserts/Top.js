import styles from "../../../styles/store/Store.module.css";

const Top = () => {
  return (
    <div id={styles.dessertsTop} className={styles.product_type_top}>
      <div>
        <h1>Our Dessert Products.</h1>

        <p>
          Our dessert products include: Chocolate Cake, Keylime Pie, Mochi,
          Cinnamon Roll and Strawberry Ice Cream.
        </p>
      </div>
    </div>
  );
};

export default Top;
