
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HeaderMenuDefault = ({ className, text = "MenuItem" }) => {

  const changeRoutes = ()=>{
    
  }
  return (
    <div className={`header-menu-default ${className}`}>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

HeaderMenuDefault.propTypes = {
  text: PropTypes.string,
};
