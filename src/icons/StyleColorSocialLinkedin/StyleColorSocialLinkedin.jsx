/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StyleColorSocialLinkedin = ({ color = "#0077B5", opacity = "unset", fill = "white", className }) => {
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
        d="M11.5459 9.8818C11.5223 8.8136 10.7584 8 9.51803 8C8.27761 8 7.46667 8.8136 7.46667 9.8818C7.46667 10.9279 8.25365 11.7649 9.47096 11.7649H9.49413C10.7584 11.7649 11.5459 10.9279 11.5459 9.8818Z"
        fill={fill}
      />
      <path d="M11.307 13.252H7.68109V24.1464H11.307V13.252Z" fill={fill} />
      <path
        d="M20.2088 12.9961C22.5948 12.9961 24.3836 14.5535 24.3836 17.8998L24.3835 24.1464H20.7577V18.3178C20.7577 16.8538 20.233 15.8548 18.9204 15.8548C17.9186 15.8548 17.3219 16.5283 17.0599 17.1788C16.964 17.4119 16.9405 17.7367 16.9405 18.0623V24.1467H13.3141C13.3141 24.1467 13.3619 14.2745 13.3141 13.2522H16.9405V14.7953C17.4217 14.0535 18.2836 12.9961 20.2088 12.9961Z"
        fill={fill}
      />
    </svg>
  );
};

StyleColorSocialLinkedin.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  fill: PropTypes.string,
};
