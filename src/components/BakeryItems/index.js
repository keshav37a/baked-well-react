import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import cx from "classnames";
import { addToCart } from "../../store/main-slice";
import Button from "../Button";
import styles from "./BakeryItems.module.css";

function BakeryItems({ className, items }) {
  const dispatch = useDispatch();

  function handleAddToCart(singleItem) {
    dispatch(
      addToCart({
        newItem: singleItem,
      })
    );
  }

  return (
    <div className={cx(styles["bakery-items"], className)}>
      {items.map((singleItem) => {
        const { id, name, coverImg, description, price } = singleItem;
        return (
          <div key={id} className={styles["single-bakery-item"]}>
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
                className={cx(styles["bakery-item-btn-invisible"])}
                btnClassName={styles["bakery-item-btn"]}
                isFullWidth={true}
              >
                Add to cart
              </Button>
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
