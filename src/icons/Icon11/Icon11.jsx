/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon11 = ({ color = "#263238", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="30"
      viewBox="0 0 44 30"
      width="44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.226 16.2378L16.561 27.6527L9.89613 16.2378H23.226ZM25.0115 15.2176H8.10341L16.561 29.6717L25.0115 15.2176Z"
        fill={color}
      />
      <path
        d="M34.8137 2.0404L41.4786 13.4552H28.1487L34.8137 2.0404ZM34.8137 0L26.356 14.454H43.2713L34.8137 0Z"
        fill={color}
      />
      <path d="M0 0L7.09143 12.7846L14.8406 0.321025L0 0Z" fill="#4CAF4F" />
      <path d="M16.5612 1.11996L23.9996 13.8333H9.10834L16.5612 1.11996Z" fill="#4CAF4F" />
      <path d="M25.9152 16.6088L33.3608 29.6718H18.1153L25.6838 16.6088H25.9152Z" fill="#4CAF4F" />
      <path d="M27.5271 15.8169L34.8137 28.68L42.2015 15.8169H27.5271Z" fill="#4CAF4F" />
    </svg>
  );
};

Icon11.propTypes = {
  color: PropTypes.string,
};
