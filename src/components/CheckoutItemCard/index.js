import Button from "../Button";
import styles from "./CheckoutItemCard.module.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/main-slice";

function CheckoutItemCard({
  itemId,
  name,
  price,
  totalItemPrice,
  quantity,
  coverImg,
  description,
}) {
  const dispatch = useDispatch();

  function handleAddToCart(singleItem) {
    dispatch(
      addToCart({
        newItem: singleItem,
      })
    );
  }

  function handleRemoveFromCart(itemId) {
    dispatch(
      removeFromCart({
        itemId,
      })
    );
  }

  return (
    <div className={styles["checkout-item-card_wrapper"]}>
      <div className={styles["checkout-item-card_img_wrapper"]}>
        <img
          alt="bakery-item"
          className={styles["checkout-item-card_img"]}
          src={coverImg}
        />
      </div>
      <div className={styles["checkout-item-card_item_details_wrapper"]}>
        <div className={styles["checkout-item-card_item_details_name"]}>
          {name}
        </div>
        <div className={styles["checkout-item-card_item_desc"]}>
          {description}
        </div>
        <div className={styles["checkout-item-card_item_qty_wrapper"]}>
          <div className={styles["checkout-item-card_item_qty"]}>
            Qty. &nbsp;{quantity}
          </div>
          <div className={styles["checkout-item-card_btn_wrapper"]}>
            <Button
              onClick={() =>
                handleAddToCart({
                  id: itemId,
                  name,
                  coverImg,
                  description,
                  price,
                })
              }
              btnClassName={styles["checkout-item-card_item_btn"]}
            >
              +
            </Button>
            <Button
              onClick={() => handleRemoveFromCart(itemId)}
              btnClassName={styles["checkout-item-card_item_btn"]}
            >
              -
            </Button>
          </div>
          <div>₹{totalItemPrice}</div>
        </div>
      </div>
      <div>₹{price}</div>
    </div>
  );
}

export default CheckoutItemCard;
