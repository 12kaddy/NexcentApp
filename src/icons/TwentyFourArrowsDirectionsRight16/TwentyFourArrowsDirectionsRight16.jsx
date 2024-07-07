/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TwentyFourArrowsDirectionsRight16 = ({ color = "#4CAF4F", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="25"
      viewBox="0 0 25 25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 16.399L19.7929 13.1062C20.1834 12.7156 20.1834 12.0825 19.7929 11.6919L16.5 8.39905M19.5 12.399L5.49999 12.399"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

TwentyFourArrowsDirectionsRight16.propTypes = {
  color: PropTypes.string,
};
