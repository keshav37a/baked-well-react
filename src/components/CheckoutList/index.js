import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import Button from "../Button";
import CheckoutItemCard from "../CheckoutItemCard";
import { clearCart } from "../../store/main-slice";
import styles from "./CheckoutList.module.css";

function CheckoutList({ onClickBackToMenu }) {
  const {
    totalAmount,
    totalQuantity,
    items: cartItems,
  } = useSelector((state) => state?.mainSlice?.cartData);

  const dispatch = useDispatch();

  if (!totalAmount || !totalQuantity) {
    return (
      <div className={styles["checkout-list-fallback-wrapper"]}>
        <div className={styles["checkout-list-fallback-msg"]}>
          You haven't added anything in your cart. Would you like to go back to
          the menu?
        </div>
        <Button onClick={onClickBackToMenu} isCenter={true}>
          Go To Menu
        </Button>
      </div>
    );
  }

  function handleProceedToBuyClick() {
    let payload = { items: [], totalAmount, totalQuantity };
    Object.entries(cartItems).map(([_, value]) => {
      const { name, price, totalItemPrice, quantity, id } = value;
      payload.items.push({ id, name, price, totalItemPrice, quantity });
      return null;
    });
    alert(JSON.stringify(payload));
    dispatch(clearCart());
    alert("Congrats on your order. Please wait while we process it");
    onClickBackToMenu && onClickBackToMenu();
  }

  return (
    <div className={styles["checkout-list_wrapper"]}>
      <div>
        {Object.entries(cartItems).map(([_, value]) => {
          const {
            name,
            price,
            totalItemPrice,
            quantity,
            id,
            coverImg,
            description,
          } = value;

          return (
            <CheckoutItemCard
              itemId={id}
              key={id}
              name={name}
              totalItemPrice={totalItemPrice}
              price={price}
              quantity={quantity}
              coverImg={coverImg}
              description={description}
            />
          );
        })}
      </div>
      <div className={styles["checkout-info"]}>
        Subtotal&nbsp;({totalQuantity}&nbsp;Items):&nbsp;₹{totalAmount}
      </div>
      <div className={styles["checkout-list_btn_wrapper"]}>
        <Button
          className={cx(styles["checkout-list_btn"])}
          onClick={handleProceedToBuyClick}
        >
          Proceed to Buy
        </Button>
        <Button
          className={cx(styles["checkout-list_btn"])}
          btnClassName={cx(styles["checkout-list_back_btn"])}
          onClick={onClickBackToMenu}
          isCenter={true}
        >
          Go To Menu
        </Button>
      </div>
    </div>
  );
}

export default CheckoutList;
