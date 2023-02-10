import { useSelector } from "react-redux";
import Button from "../Button";
import CheckoutItemCard from "../CheckoutItemCard";
import styles from "./CheckoutList.module.css";

function CheckoutList({ onClickBackToMenu }) {
  const {
    totalAmount,
    totalQuantity,
    items: cartItems,
  } = useSelector((state) => state?.mainSlice?.cartData);

  if (totalAmount === 0 || totalQuantity === 0) {
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
    });
    alert(JSON.stringify(payload));
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
          console.log("value: ", value);
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
      <Button onClick={handleProceedToBuyClick}>Proceed to Buy</Button>
    </div>
  );
}

export default CheckoutList;
