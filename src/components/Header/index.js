import cartIcon from "../../assets/cart.ico";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

function Header({
  showOrderBanner = true,
  orderBannerText = "Orders placed after 8pm will be delivered the next day",
  onHandleNavigateToCheckout,
}) {
  const totalQuantity = useSelector(
    (state) => state?.mainSlice?.cartData?.totalQuantity
  );

  return (
    <div className={styles["header"]}>
      {showOrderBanner ? (
        <div className={styles["header-order-banner"]}>
          <p className={styles["header-order-banner_msg"]}>{orderBannerText}</p>
        </div>
      ) : null}
      <div className={styles["header-wrapper"]}>
        <h1 className={styles["header-title"]}>Baked Well</h1>
        <div
          onClick={onHandleNavigateToCheckout}
          className={styles["header-cart_wrapper"]}
        >
          <img
            alt="cart"
            className={styles["header-cart_img"]}
            src={cartIcon}
          />
          <div className={styles["header-cart_qty_wrapper"]}>
            {totalQuantity > 0 ? (
              <div className={styles["header-cart_qty"]}>{totalQuantity}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
