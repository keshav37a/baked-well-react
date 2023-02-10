import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../Button";
import styles from "./BakeryItems.module.css";

function BakeryItems({ className, items }) {
  return (
    <div className={cx(styles["bakery-items"], className)}>
      {items.map(({ name, coverImg, description, id }) => (
        <div key={id} class={styles["single-bakery-item"]}>
          <div class={styles["bakery-item_cover_photo_container"]}>
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
          <div className={cx(styles["bakery-item-btn-container"])}>
            <Button
              className={cx(styles["bakery-item-btn-invisible"])}
              btnClassName={styles["bakery-item-btn"]}
              isFullWidth={true}
            >
              Quick Add
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
