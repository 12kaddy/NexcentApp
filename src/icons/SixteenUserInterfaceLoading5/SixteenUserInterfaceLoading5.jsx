/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SixteenUserInterfaceLoading5 = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 1.33334L8 3.33334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
      <path d="M8 12.6667L8 14.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
      <path d="M14.6667 8L12.6667 8" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
      <path d="M3.33334 8L1.33334 8" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
      <path
        d="M12.714 3.28595L11.2998 4.70016"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
      />
      <path
        d="M4.70016 11.3L3.28595 12.7142"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
      />
      <path
        d="M3.28598 3.28595L4.7002 4.70016"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
      />
      <path
        d="M11.2998 11.3L12.714 12.7142"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
      />
    </svg>
  );
};

SixteenUserInterfaceLoading5.propTypes = {
  color: PropTypes.string,
};
