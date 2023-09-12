/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const EssentialIconsRightArrow7 = ({ color = "#18191F", className }) => {
  return (
    <svg
      className={`essential-icons-right-arrow-7 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-2"
        d="M12.7443 5.58928C12.4188 5.26384 12.4188 4.7362 12.7443 4.41076C13.0697 4.08533 13.5973 4.08533 13.9228 4.41076L18.9228 9.41077C19.2482 9.7362 19.2482 10.2638 18.9228 10.5893L13.9228 15.5893C13.5973 15.9147 13.0697 15.9147 12.7443 15.5893C12.4188 15.2638 12.4188 14.7362 12.7443 14.4108L16.3217 10.8333H1.67585C1.21054 10.8333 0.833328 10.4602 0.833328 10C0.833328 9.53977 1.21054 9.16667 1.67585 9.16667H16.3217L12.7443 5.58928Z"
        fill={color}
      />
    </svg>
  );
};

EssentialIconsRightArrow7.propTypes = {
  color: PropTypes.string,
};
