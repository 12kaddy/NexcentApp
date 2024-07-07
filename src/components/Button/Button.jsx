/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SixteenArrowsDirectionsRight30 } from "../../icons/SixteenArrowsDirectionsRight30";
import { SixteenUserInterface23 } from "../../icons/SixteenUserInterface23";
import { SixteenUserInterfaceLoading4 } from "../../icons/SixteenUserInterfaceLoading4";
import { SixteenUserInterfaceLoading5 } from "../../icons/SixteenUserInterfaceLoading5";
import { TwentyFourArrowsDirectionsRight16 } from "../../icons/TwentyFourArrowsDirectionsRight16";
import { TwentyFourUserInterface4 } from "../../icons/TwentyFourUserInterface4";
import { TwentyFourUserInterfaceLoading8 } from "../../icons/TwentyFourUserInterfaceLoading8";

export const Button = ({ type, size, state, icon, className, divClassName, text = "Label", divClassNameOverride }) => {
  return (
    <div
      className={`inline-flex items-center rounded justify-center relative ${
        state === "focus"
          ? "border-2 border-solid"
          : type === "secondary" && ["default", "hover"].includes(state)
          ? "border border-solid"
          : ""
      } ${
        state === "focus" && ["primary", "tertiary"].includes(type)
          ? "border-neutraldgrey"
          : type === "secondary" && ["default", "hover"].includes(state)
          ? "border-brandprimary"
          : type === "secondary" && state === "focus"
          ? "border-neutrallgrey"
          : ""
      } ${
        (icon === "no" && size === "medium" && state === "click") ||
        (icon === "no" && size === "medium" && state === "default") ||
        (icon === "no" && size === "medium" && state === "focus") ||
        (icon === "no" && size === "medium" && state === "hover") ||
        (icon === "no" && size === "normal" && state === "click") ||
        (icon === "no" && size === "normal" && state === "default") ||
        (icon === "no" && size === "normal" && state === "focus") ||
        (icon === "no" && size === "normal" && state === "hover")
          ? "gap-2.5"
          : "gap-2"
      } ${size === "medium" ? "px-8 py-3.5" : size === "small" ? "px-6 py-2" : "px-8 py-4"} ${
        type === "primary" && ["default", "focus", "hover"].includes(state)
          ? "bg-brandprimary"
          : type === "primary" && ["click", "loading"].includes(state)
          ? "bg-shades-2"
          : (state === "default" && type === "secondary") ||
            (state === "default" && type === "tertiary") ||
            (state === "focus" && type === "tertiary")
          ? "bg-neutralwhite"
          : type === "tertiary" && ["click", "loading"].includes(state)
          ? "bg-tintt-5"
          : "bg-neutralsilver"
      } ${className}`}
    >
      {(icon === "no" || icon === "right" || (icon === "left" && state === "loading")) && (
        <div
          className={`w-fit text-center whitespace-nowrap relative ${
            size === "normal"
              ? "font-button-link-normal"
              : size === "small"
              ? "font-button-link-small"
              : "font-button-link-medium"
          } ${
            (icon === "no" && size === "medium" && state === "click") ||
            (icon === "no" && size === "medium" && state === "loading") ||
            (icon === "right" && size === "normal" && state === "click") ||
            (icon === "right" && size === "normal" && state === "disabled") ||
            (size === "medium" && state === "disabled") ||
            (size === "small" && state === "click") ||
            (size === "small" && state === "disabled") ||
            state === "default" ||
            state === "hover"
              ? "mt-[-1.00px]"
              : state === "focus"
              ? "mt-[-2.00px]"
              : "mt-[-3.00px]"
          } ${
            size === "normal"
              ? "tracking-[var(--button-link-normal-letter-spacing)]"
              : size === "small"
              ? "tracking-[var(--button-link-small-letter-spacing)]"
              : "tracking-[var(--button-link-medium-letter-spacing)]"
          } ${
            size === "normal"
              ? "text-[length:var(--button-link-normal-font-size)]"
              : size === "small"
              ? "text-[length:var(--button-link-small-font-size)]"
              : "text-[length:var(--button-link-medium-font-size)]"
          } ${
            size === "normal"
              ? "[font-style:var(--button-link-normal-font-style)]"
              : size === "small"
              ? "[font-style:var(--button-link-small-font-style)]"
              : "[font-style:var(--button-link-medium-font-style)]"
          } ${
            (state === "click" && type === "primary") ||
            (state === "default" && type === "primary") ||
            (state === "focus" && type === "primary") ||
            (state === "hover" && type === "primary") ||
            (state === "loading" && type === "primary")
              ? "text-neutralwhite"
              : state === "disabled"
              ? "text-neutralgreyblue"
              : "text-brandprimary"
          } ${
            size === "normal"
              ? "font-[number:var(--button-link-normal-font-weight)]"
              : size === "small"
              ? "font-[number:var(--button-link-small-font-weight)]"
              : "font-[number:var(--button-link-medium-font-weight)]"
          } ${
            size === "normal"
              ? "leading-[var(--button-link-normal-line-height)]"
              : size === "small"
              ? "leading-[var(--button-link-small-line-height)]"
              : "leading-[var(--button-link-medium-line-height)]"
          } ${
            icon === "left" || icon === "right" || (icon === "no" && state === "loading")
              ? divClassNameOverride
              : (icon === "no" && state === "click") ||
                (icon === "no" && state === "default") ||
                (icon === "no" && state === "disabled") ||
                (icon === "no" && state === "focus") ||
                (icon === "no" && state === "hover")
              ? divClassName
              : undefined
          }`}
        >
          {text}
        </div>
      )}

      {((icon === "right" && size === "medium" && state === "click") ||
        (icon === "right" && size === "medium" && state === "default") ||
        (icon === "right" && size === "medium" && state === "disabled") ||
        (icon === "right" && size === "medium" && state === "focus") ||
        (icon === "right" && size === "medium" && state === "hover") ||
        (icon === "right" && size === "small" && state === "click") ||
        (icon === "right" && size === "small" && state === "default") ||
        (icon === "right" && size === "small" && state === "disabled") ||
        (icon === "right" && size === "small" && state === "focus") ||
        (icon === "right" && size === "small" && state === "hover")) && (
        <SixteenArrowsDirectionsRight30
          className="!relative !w-4 !h-4"
          color={
            (state === "click" && type === "primary") ||
            (state === "default" && type === "primary") ||
            (state === "focus" && type === "primary") ||
            (state === "hover" && type === "primary")
              ? "white"
              : state === "disabled"
              ? "#ABBED1"
              : "#4CAF4F"
          }
        />
      )}

      {((icon === "left" && size === "medium" && state === "click") ||
        (icon === "left" && size === "medium" && state === "default") ||
        (icon === "left" && size === "medium" && state === "disabled") ||
        (icon === "left" && size === "medium" && state === "focus") ||
        (icon === "left" && size === "medium" && state === "hover") ||
        (icon === "left" && size === "small" && state === "click") ||
        (icon === "left" && size === "small" && state === "default") ||
        (icon === "left" && size === "small" && state === "disabled") ||
        (icon === "left" && size === "small" && state === "focus") ||
        (icon === "left" && size === "small" && state === "hover")) && (
        <SixteenUserInterface23
          className="!relative !w-4 !h-4"
          color={
            (state === "click" && type === "primary") ||
            (state === "default" && type === "primary") ||
            (state === "focus" && type === "primary") ||
            (state === "hover" && type === "primary")
              ? "white"
              : state === "disabled"
              ? "#ABBED1"
              : "#4CAF4F"
          }
        />
      )}

      {((icon === "left" && size === "medium" && state === "loading") ||
        (icon === "right" && size === "medium" && state === "loading") ||
        (size === "small" && state === "loading")) && (
        <SixteenUserInterfaceLoading4
          className="!relative !w-4 !h-4"
          color={type === "primary" ? "white" : "#4CAF4F"}
        />
      )}

      {icon === "no" && state === "loading" && size === "medium" && (
        <SixteenUserInterfaceLoading5
          className="!relative !w-4 !h-4"
          color={type === "primary" ? "white" : "#4CAF4F"}
        />
      )}

      {((icon === "right" && size === "normal" && state === "click") ||
        (icon === "right" && size === "normal" && state === "default") ||
        (icon === "right" && size === "normal" && state === "disabled") ||
        (icon === "right" && size === "normal" && state === "focus") ||
        (icon === "right" && size === "normal" && state === "hover")) && (
        <TwentyFourArrowsDirectionsRight16
          className="!relative !w-6 !h-6"
          color={
            (state === "click" && type === "primary") ||
            (state === "default" && type === "primary") ||
            (state === "focus" && type === "primary") ||
            (state === "hover" && type === "primary")
              ? "white"
              : state === "disabled"
              ? "#ABBED1"
              : "#4CAF4F"
          }
        />
      )}

      {((icon === "left" && size === "normal" && state === "click") ||
        (icon === "left" && size === "normal" && state === "default") ||
        (icon === "left" && size === "normal" && state === "disabled") ||
        (icon === "left" && size === "normal" && state === "focus") ||
        (icon === "left" && size === "normal" && state === "hover")) && (
        <TwentyFourUserInterface4
          className="!relative !w-6 !h-6"
          color={
            (state === "click" && type === "primary") ||
            (state === "default" && type === "primary") ||
            (state === "focus" && type === "primary") ||
            (state === "hover" && type === "primary")
              ? "white"
              : state === "disabled"
              ? "#ABBED1"
              : "#4CAF4F"
          }
        />
      )}

      {((icon === "left" && state === "click") ||
        (icon === "left" && state === "default") ||
        (icon === "left" && state === "disabled") ||
        (icon === "left" && state === "focus") ||
        (icon === "left" && state === "hover")) && (
        <div
          className={`w-fit text-center whitespace-nowrap relative ${
            size === "medium"
              ? "font-button-link-medium"
              : size === "small"
              ? "font-button-link-small"
              : "font-button-link-normal"
          } ${state === "focus" ? "mt-[-2.00px]" : "mt-[-1.00px]"} ${
            size === "medium"
              ? "tracking-[var(--button-link-medium-letter-spacing)]"
              : size === "small"
              ? "tracking-[var(--button-link-small-letter-spacing)]"
              : "tracking-[var(--button-link-normal-letter-spacing)]"
          } ${
            size === "medium"
              ? "text-[length:var(--button-link-medium-font-size)]"
              : size === "small"
              ? "text-[length:var(--button-link-small-font-size)]"
              : "text-[length:var(--button-link-normal-font-size)]"
          } ${
            size === "medium"
              ? "[font-style:var(--button-link-medium-font-style)]"
              : size === "small"
              ? "[font-style:var(--button-link-small-font-style)]"
              : "[font-style:var(--button-link-normal-font-style)]"
          } ${
            (state === "click" && type === "primary") ||
            (state === "default" && type === "primary") ||
            (state === "focus" && type === "primary") ||
            (state === "hover" && type === "primary")
              ? "text-neutralwhite"
              : state === "disabled"
              ? "text-neutralgreyblue"
              : "text-brandprimary"
          } ${
            size === "medium"
              ? "font-[number:var(--button-link-medium-font-weight)]"
              : size === "small"
              ? "font-[number:var(--button-link-small-font-weight)]"
              : "font-[number:var(--button-link-normal-font-weight)]"
          } ${
            size === "medium"
              ? "leading-[var(--button-link-medium-line-height)]"
              : size === "small"
              ? "leading-[var(--button-link-small-line-height)]"
              : "leading-[var(--button-link-normal-line-height)]"
          }`}
        >
          {text}
        </div>
      )}

      {state === "loading" && size === "normal" && (
        <TwentyFourUserInterfaceLoading8
          className="!relative !w-6 !h-6"
          color={type === "primary" ? "white" : "#4CAF4F"}
        />
      )}
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["small", "medium", "normal"]),
  state: PropTypes.oneOf(["click", "default", "focus", "loading", "hover", "disabled"]),
  icon: PropTypes.oneOf(["right", "no", "left"]),
  text: PropTypes.string,
};
