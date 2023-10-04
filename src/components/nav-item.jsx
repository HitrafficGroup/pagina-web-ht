import React, { useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import PropTypes from "prop-types";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


export default function NavItem(props) {
    const { text = "Menu Item", estatus = false, child = false, childrens = [], auxClick, icon } = props;
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    if (child) {
        return (
            <>

                <ListItemButton onClick={handleClick}>
                    <ListItemIcon sx={{ color: estatus ? "#2ECC71" : "" }}>
                        {icon}
                    </ListItemIcon>
                    <ListItemText sx={{ color: estatus ? "#2ECC71" : "" }} primary={text} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List sx={{ listStyleType: "circle" }} component="div" disablePadding>
                        {childrens.map((item) => {
                            return (
                                <>
                                    <ListItemButton sx={{ pl: 4 }} onClick={auxClick}>
                                        <ListItemText primary={item.name} />
                                    </ListItemButton>
                                </>
                            );
                        })}

                    </List>
                </Collapse>
            </>
        )

    } else {

        return (
            <>
                <ListItem disablePadding>
                    <ListItemButton onClick={auxClick}>
                        <ListItemIcon sx={{ color: estatus ? "#2ECC71" : "" }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText sx={{ color: estatus ? "#2ECC71" : "" }} primary={text} />
                    </ListItemButton>
                </ListItem>

            </>
        )
    }

}

NavItem.propTypes = {
    text: PropTypes.string,
    estatus: PropTypes.bool,
    child: PropTypes.bool,
    childrens: PropTypes.array,
    auxClick: PropTypes.func,
    icon: PropTypes.any,
};

