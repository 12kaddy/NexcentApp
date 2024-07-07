import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "normal"],
      control: { type: "select" },
    },
    state: {
      options: ["click", "default", "focus", "loading", "hover", "disabled"],
      control: { type: "select" },
    },
    icon: {
      options: ["right", "no", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "primary",
    size: "small",
    state: "click",
    icon: "right",
    className: {},
    divClassName: {},
    text: "Label",
    divClassNameOverride: {},
  },
};
