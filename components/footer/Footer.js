import styles from "../../styles/footer/Footer.module.css";
import Contact from "./footer_cnt/Contact";
import Logo from "./footer_cnt/Logo";
import PagesLinks from "./footer_cnt/PagesLinks";
import ProductsLinks from "./footer_cnt/ProductsLinks";
import Socials from "./footer_cnt/Socials";
import UnderLogo from "./footer_cnt/UnderLogo";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={`${styles.footer_box} container-fluid`}>
        <div className={`${styles.footer_row} row`}>
          <div
            className={`${styles.footer_side} col-lg-4 col-md-3 col-sm-12 col-xs-12`}
            id={styles.footerL}
          >
            <div className={styles.footer_side_cnt}>
              <Logo />
              <UnderLogo />
            </div>
          </div>
          <div
            className={`${styles.footer_side} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
            id={styles.footerM}
          >
            <div className={styles.footer_side_cnt}>
              <PagesLinks />
              <ProductsLinks />
            </div>
          </div>
          <div
            className={`${styles.footer_side} col-lg-3 col-md-3 col-sm-12 col-xs-12`}
            id={styles.footerR}
          >
            <div className={styles.footer_side_cnt}>
              <Socials />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
