import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import cx from "classnames";
import _get from "lodash/get";
import { addToCart, removeFromCart } from "../../store/main-slice";
import Button from "../Button";
import styles from "./BakeryItems.module.css";

function BakeryItems({ className, items, onHandleToggleCheckoutBar }) {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state?.mainSlice?.cartData);

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

  useEffect(() => {
    const totalQuantity = _get(cartData, `totalQuantity`, 0);
    if (totalQuantity > 0) {
      onHandleToggleCheckoutBar(true);
    } else {
      onHandleToggleCheckoutBar(false);
    }
  }, [cartData]);

  return (
    <div className={cx(styles["bakery-items"], className)}>
      {items.map((singleItem) => {
        const { id: itemId, name, coverImg, description, price } = singleItem;
        const currQty = _get(cartData, `items[${itemId}].quantity`, 0);

        return (
          <div key={itemId} className={styles["single-bakery-item"]}>
            <div className={styles["bakery-item_cover_photo_container"]}>
              <img
                alt="bakery-item"
                className={styles["bakery-item_cover_photo_img"]}
                src={coverImg}
              />
            </div>
            <h4
              className={cx(styles["bakery-item_title"], styles["text-center"])}
            >
              {name}
            </h4>
            <p className={styles["bakery-item_desc"]}>{description}</p>
            <h5
              className={cx(styles["bakery-item_price"], styles["text-center"])}
            >
              ₹{price}
            </h5>
            <div className={cx(styles["bakery-item-btn-container"])}>
              <Button
                onClick={() => handleAddToCart(singleItem)}
                btnClassName={cx(
                  styles["bakery-item-btn"],
                  styles["bakery-item-add-btn"]
                )}
                isFullWidth={true}
              >
                Add to cart
              </Button>
              <div className={cx(styles["bakery-item-remove-btn-container"])}>
                {currQty > 0 ? (
                  <Button
                    onClick={() => handleRemoveFromCart(itemId)}
                    className={styles["bakery-item-remove-btn"]}
                    btnClassName={cx(
                      styles["bakery-item-btn"],
                      styles["bakery-item-remove-btn-content"]
                    )}
                    isFullWidth={true}
                  >
                    Remove from cart
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

BakeryItems.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
};

export default BakeryItems;
