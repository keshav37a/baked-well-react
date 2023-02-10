import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../Button";
import styles from "./BakeryItems.module.css";

function BakeryItems({ className, items }) {
  return (
    <div className={cx(styles["bakery-items"], className)}>
      {items.map(({ name, coverImg, description, price, id }) => (
        <div key={id} class={styles["single-bakery-item"]}>
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
              className={cx(styles["bakery-item-btn-invisible"])}
              btnClassName={styles["bakery-item-btn"]}
              isFullWidth={true}
            >
              Add to cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

BakeryItems.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
};

export default BakeryItems;
