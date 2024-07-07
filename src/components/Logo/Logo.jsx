/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon11 } from "../../icons/Icon11";

export const Logo = ({
  className,
  icon11StyleOverrideClassName,
  icon11Color = "#263238",
  nexcentClassName,
  nexcent = "/img/nexcent.svg",
}) => {
  return (
    <div className={`inline-flex items-center gap-2 relative ${className}`}>
      <Icon11 className={icon11StyleOverrideClassName} color={icon11Color} />
      <img className={`relative w-[111.49px] h-[20.66px] ${nexcentClassName}`} alt="Nexcent" src={nexcent} />
    </div>
  );
};

Logo.propTypes = {
  icon11Color: PropTypes.string,
  nexcent: PropTypes.string,
};
