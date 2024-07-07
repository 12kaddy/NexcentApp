/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SixteenArrowsDirectionsRight30 = ({ color = "#717171", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2502 11.0001L13.72 8.53039C14.0129 8.23749 14.0129 7.7626 13.72 7.4697L11.2502 4.99997M13.5003 8.00004L2.50001 8.00004"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.1"
      />
    </svg>
  );
};

SixteenArrowsDirectionsRight30.propTypes = {
  color: PropTypes.string,
};
