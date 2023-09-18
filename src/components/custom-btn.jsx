import PropTypes from "prop-types";
import React from "react";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export default function CustomBtn(props){
    const { text = "Menu Item", path='/'} = props;


    return(
        <>
            <div className="btn-section">
                <p className="btn-text">{text}</p> <TrendingFlatIcon/>
            </div>
        </>
    )


}
//janeth ocampo

CustomBtn.propTypes = {
    text: PropTypes.string,
    path: PropTypes.string,
  };
  