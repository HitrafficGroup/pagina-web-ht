import PropTypes from "prop-types";
import React from "react";
import "../../style.css";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
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

CustomBtn.propTypes = {
    text: PropTypes.string,
    path: PropTypes.string,
  };
  