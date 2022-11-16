import styles from "../../../styles/footer/Footer.module.css";

const Contact = () => {
  return (
    <div id={styles.footerContact}>
      <ul>
        <li className="page-transition">contact@basicallyeasy.com</li>

        <li className="page-transition">+1 (202) 555-0993</li>
      </ul>
    </div>
  );
};

export default Contact;
