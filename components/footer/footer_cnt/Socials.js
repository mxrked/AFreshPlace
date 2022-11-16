import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import styles from "../../../styles/footer/Footer.module.css";

const Socials = () => {
  return (
    <div id={styles.footerSocials}>
      <ul>
        <li>
          <span className="page-transition">
            <FaFacebook />
          </span>
        </li>
        <li>
          <span className="page-transition">
            <FaTwitter />
          </span>
        </li>
        <li>
          <span className="page-transition">
            <FaGithub />
          </span>
        </li>
        <li>
          <span className="page-transition">
            <FaLinkedin />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
