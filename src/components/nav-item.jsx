import React, { useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PropTypes from "prop-types";
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
export default function NavItem(props) {
    const { text = "Menu Item", className, path = '/', estatus = false, child = false, childrens = [],auxClick } = props;
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    if(child){
        return(
            <>
            <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={auxClick}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                    </List>
                </Collapse>
            </>
        )

    }else{

        return (
            <>
                <ListItem disablePadding>
                    <ListItemButton onClick={auxClick}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
    
            </>
        )
    }

}

NavItem.propTypes = {
	text: PropTypes.string,
	path: PropTypes.string,
	estatus: PropTypes.bool,
	child: PropTypes.bool,
	childrens: PropTypes.array,
    auxClick: PropTypes.func
};

