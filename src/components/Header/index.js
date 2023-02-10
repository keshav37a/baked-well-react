import cartIcon from "../../assets/cart.ico";
import styles from "./Header.module.css";

function Header({
  showOrderBanner = true,
  orderBannerText = "Orders placed after 8pm will be delivered the next day",
}) {
  return (
    <div className={styles["header"]}>
      {showOrderBanner ? (
        <div className={styles["header-order-banner"]}>
          <p className={styles["header-order-banner_msg"]}>{orderBannerText}</p>
        </div>
      ) : null}
      <div className={styles["header-wrapper"]}>
        <h1 className={styles["header-title"]}>Baked Well</h1>
        <div className={styles["header-cart_wrapper"]}>
          <img
            alt="cart"
            className={styles["header-cart_img"]}
            src={cartIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
