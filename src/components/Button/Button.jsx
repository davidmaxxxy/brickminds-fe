import React from "react";
import "./button.scss";
const Button = ({
  icon,
  title,
  width,
  onClickHandler,
  textColor,
  borderRadius,
}) => {
  return (
    <button
      onClick={onClickHandler}
      className="button"
      style={{ width: width, borderRadius: borderRadius }}
    >
      {icon && <img src={icon} alt={`${title} button icon`} />}
      <div className="button__title--container">
        <p
          className="button__title--container-text"
          style={{ color: textColor }}
        >
          {title}
        </p>
      </div>
    </button>
  );
};

export default Button;
