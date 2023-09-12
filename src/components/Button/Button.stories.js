import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["outlined", "link", "filled"],
      control: { type: "select" },
    },
    type: {
      options: ["secondary", "primary", "play-label", "label", "label-icon"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "outlined",
    type: "secondary",
    size: "large",
    className: {},
    text: "Button",
    labelClassName: {},
    essentialIconsRightArrow7Color: "#8C30F5",
  },
};
