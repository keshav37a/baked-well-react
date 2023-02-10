import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({
  onClick,
  isDisabled,
  isFullWidth,
  children = "Button",
  className,
  btnClassName,
  isCenter = false,
}) {
  return (
    <div
      className={cx(`btnContainer`, className, {
        [styles[`btn-full-width`]]: isFullWidth,
        [styles["btn-centered"]]: isCenter,
      })}
    >
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={cx(btnClassName, styles["btn"], {
          [styles["btn-disabled"]]: isDisabled,
          [styles[`btn-full-width`]]: isFullWidth,
          [styles[`btn-not-full-width`]]: !isFullWidth,
        })}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  btnClassName: PropTypes.string,
};

export default Button;
