import { FaCopyright } from "react-icons/fa";
import styles from "../../../styles/footer/Footer.module.css";

const UnderLogo = () => {
  return (
    <div id={styles.underLogo}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <span>
        <FaCopyright /> <p>Copyright 2022, All rights reserved.</p>
      </span>
    </div>
  );
};

export default UnderLogo;
