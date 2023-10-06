import React from "react";
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import DirectionsIcon from '@mui/icons-material/Directions';
import CustomBtn from "./custom-btn";
import PropTypes from "prop-types";
export default function CardHome(props) {


    const icondefault = <DirectionsIcon sx={{ color: "rgba(140, 48, 245, 1)" }} />

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    }));
    const { text = "Menu Item", path = '/', description = '', icon = icondefault } = props;
    return (

        <Item>
            <div>
                <div className="encabezado">
                    <div className="feature-icons" >
                        {icon}
                    </div>
                    <h2 style={{ margin: 0, color: "black" }} >{text}</h2>
                </div>
                <div className="details">
                    <p className="description">
                        {description}
                    </p>
                    <CustomBtn text={"Ir a seccion"} />
                </div>

            </div>
        </Item>
    )
}

CardHome.propTypes = {
    text: PropTypes.string,
    path: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.any,
};