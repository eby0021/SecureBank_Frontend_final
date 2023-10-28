import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[41px]" };
const variants = {
  fill: {
    white_A700_01: "bg-white-A700_01 text-light_blue-900",
    white_A700: "bg-white-A700 text-light_blue-900",
    light_blue_900: "bg-light_blue-900 text-white-A700",
  },
};
const sizes = {
  xs: "p-[7px]",
  sm: "p-2.5",
  md: "p-[13px]",
  lg: "p-[22px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "light_blue_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700_01", "white_A700", "light_blue_900"]),
};

export { Button };
