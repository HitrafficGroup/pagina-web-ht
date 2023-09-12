/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { EssentialIconsRightArrow7 } from "../../icons/EssentialIconsRightArrow7";
import "./style.css";

export const Button = ({
  variant,
  type,
  size,
  className,
  text = "Button",
  labelClassName,
  essentialIconsRightArrow7Color = "#8C30F5",
}) => {
  return (
    <div className={`button ${variant} ${type} ${size} ${className}`}>
      {["label", "primary", "secondary"].includes(type) && (
        <div className="div">
          {variant === "filled" && <>{text}</>}

          {variant === "link" && <>Get started</>}
        </div>
      )}

      {type === "label-icon" && (
        <>
          <div className={`label-2 ${labelClassName}`}>
            {variant === "outlined" && <>Explore all</>}

            {variant === "link" && <>Get started</>}
          </div>
          <EssentialIconsRightArrow7
            className={`${size === "large" && "class"} ${variant === "outlined" && size === "medium" && "class-2"} ${
              variant === "outlined" && size === "small" && "class-3"
            } ${variant === "link" && size === "medium" && "class-4"} ${
              variant === "link" && size === "small" && "class-5"
            }`}
            color={essentialIconsRightArrow7Color}
          />
        </>
      )}

      {type === "play-label" && (
        <>
          <img
            className={`path ${labelClassName}`}
            alt="Path"
            src={
              size === "medium"
                ? "https://cdn.animaapp.com/projects/65007d9a904ea957862af503/releases/65007dd76963f7376cdc05aa/img/path-1.svg"
                : size === "small"
                ? "https://cdn.animaapp.com/projects/65007d9a904ea957862af503/releases/65007dd76963f7376cdc05aa/img/path-2.svg"
                : "https://cdn.animaapp.com/projects/65007d9a904ea957862af503/releases/65007dd76963f7376cdc05aa/img/path.svg"
            }
          />
          <div className="label-3">Watch video</div>
        </>
      )}
    </div>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["outlined", "link", "filled"]),
  type: PropTypes.oneOf(["secondary", "primary", "play-label", "label", "label-icon"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  text: PropTypes.string,
  essentialIconsRightArrow7Color: PropTypes.string,
};
