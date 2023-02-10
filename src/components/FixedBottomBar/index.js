import styles from "./FixedBottomBar.module.css";
import { useSelector } from "react-redux";

function FixedBottomBar({ onClick, title = "Proceed to checkout." }) {
  const cartData = useSelector((state) => state?.mainSlice?.cartData);
  const { totalQuantity, totalAmount } = cartData;

  return (
    <div onClick={onClick} className={styles["fixed-bar_wrapper"]}>
      <div className={styles["fixed-bar_title"]}>{title}</div>
      <div>
        <div>
          <span className={styles["fixed-bar_total_qty"]}>
            {totalQuantity}&nbsp;
          </span>
          <span>{totalQuantity > 1 ? "Items" : "Item"} in cart</span>
        </div>
        <div className={styles["fixed-bar_cart_info"]}>
          <span>Amount: ₹</span>
          <span className={styles["fixed-bar_total_amount"]}>
            &nbsp;{totalAmount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FixedBottomBar;
