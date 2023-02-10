import styles from "./FixedBottomBar.module.css";
import { useSelector } from "react-redux";

function FixedBottomBar({ title = "Proceed to checkout." }) {
  const totalQuantity = useSelector(
    (state) => state?.mainSlice?.cartData?.totalQuantity
  );
  return (
    <div className={styles["fixed-bar_wrapper"]}>
      <div className={styles["fixed-bar_title"]}>
        {title}&nbsp;
        <span className={styles["fixed-bar_total_qty"]}>
          {totalQuantity}
        </span>{" "}
        Items in cart
      </div>
    </div>
  );
}

export default FixedBottomBar;
