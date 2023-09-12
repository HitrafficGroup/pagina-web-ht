
import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';
export const HeaderMenuDefault = (props) => {
  const { text = "Menu Item", className, path='/',estatus=false } = props;
  const navigate = useNavigate(); 
  const cambiarVista = ( ) => {
    navigate(path);
} 
  return (
    <div className={`header-menu-default ${className}`}>
      <div className={estatus ? "active-url":"text-wrapper"} onClick={cambiarVista}>{text}</div>
    </div>
  );
};

HeaderMenuDefault.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  estatus: PropTypes.bool
};
