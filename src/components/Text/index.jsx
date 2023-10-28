import React from "react";

const sizeClasses = {
  txtJostRomanBold50: "font-bold font-jost",
  txtPoppinsSemiBold50: "font-poppins font-semibold",
  txtPoppinsMedium50: "font-medium font-poppins",
  txtPoppinsSemiBold50Black900: "font-poppins font-semibold",
  txtPoppinsBold30: "font-bold font-poppins",
  txtJostRomanBold70: "font-bold font-jost",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtPoppinsBold50Black900: "font-bold font-poppins",
  txtPoppinsBold35: "font-bold font-poppins",
  txtPoppinsRegular27: "font-normal font-poppins",
  txtPoppinsSemiBold35: "font-poppins font-semibold",
  txtPoppinsSemiBold37: "font-poppins font-semibold",
  txtPoppinsRegular50: "font-normal font-poppins",
  txtPoppinsBold60: "font-bold font-poppins",
  txtPoppinsSemiBold30WhiteA700: "font-poppins font-semibold",
  txtJostRomanRegular36: "font-jost font-normal",
  txtPoppinsBoldItalic35: "font-bold font-poppins italic",
  txtJostRomanBold47: "font-bold font-jost",
  txtPoppinsSemiBold60Lightblue900: "font-poppins font-semibold",
  txtPoppinsSemiBold60: "font-poppins font-semibold",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsMedium60: "font-medium font-poppins",
  txtPoppinsMediumItalic24: "font-medium font-poppins italic",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsSemiBold40Lightblue900: "font-poppins font-semibold",
  txtPoppinsMediumItalic20: "font-medium font-poppins italic",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtPoppinsMedium25: "font-medium font-poppins",
  txtPoppinsSemiBold60Black900: "font-poppins font-semibold",
  txtPoppinsBold70: "font-bold font-poppins",
  txtPoppinsBold35Gray70002: "font-bold font-poppins",
  txtPoppinsMedium40: "font-medium font-poppins",
  txtPoppinsRegular64: "font-normal font-poppins",
  txtPoppinsBold50: "font-bold font-poppins",
  txtPoppinsSemiBold45: "font-poppins font-semibold",
  txtPoppinsBold35Gray800: "font-bold font-poppins",
  txtPoppinsBold35Black900: "font-bold font-poppins",
  txtPoppinsSemiBold100: "font-poppins font-semibold",
  txtPoppinsSemiBold40WhiteA700: "font-poppins font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
