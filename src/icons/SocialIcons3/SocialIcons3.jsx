/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SocialIcons3 = ({ color = "white", opacity = "unset", fill = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
        fill={color}
        fillRule="evenodd"
        opacity={opacity}
      />
      <path
        clipRule="evenodd"
        d="M22.6677 10.4996C23.4021 10.7011 23.9804 11.2948 24.1767 12.0488C24.5333 13.4154 24.5333 16.2667 24.5333 16.2667C24.5333 16.2667 24.5333 19.1179 24.1767 20.4845C23.9804 21.2386 23.4021 21.8323 22.6677 22.0339C21.3369 22.4 16 22.4 16 22.4C16 22.4 10.6631 22.4 9.33218 22.0339C8.59783 21.8323 8.0195 21.2386 7.82323 20.4845C7.46667 19.1179 7.46667 16.2667 7.46667 16.2667C7.46667 16.2667 7.46667 13.4154 7.82323 12.0488C8.0195 11.2948 8.59783 10.7011 9.33218 10.4996C10.6631 10.1334 16 10.1334 16 10.1334C16 10.1334 21.3369 10.1334 22.6677 10.4996ZM14.4 13.8666V19.2L18.6667 16.5334L14.4 13.8666Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

SocialIcons3.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  fill: PropTypes.string,
};
