/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SixteenUserInterface23 = ({ color = "#ABBED1", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 3.33334L8 12.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
      <path d="M12.6667 8L3.33332 8" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
    </svg>
  );
};

SixteenUserInterface23.propTypes = {
  color: PropTypes.string,
};
