
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function HeaderMenuDefault(props) {
	const { text = "Menu Item", className, path = '/', estatus = false, child = false, childrens = [] } = props;
	const navigate = useNavigate();
	const cambiarVista = () => {
		navigate(path);
	}
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	if (child) {
		return (
		<div>
			<div className={`header-menu-default ${className}`}>
			<div className={estatus ? "active-url" : "text-wrapper"} aria-expanded={open ? 'true' : undefined} aria-haspopup="true"	aria-controls={open ? 'basic-menu' : undefined} onClick={handleClick}>
				
				{text}
				<KeyboardArrowDownIcon/>
				</div>
			</div>
			
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				{childrens.map((item)=>{
					return(
						<MenuItem onClick={handleClose}>{item.name}</MenuItem>

					)
				})}
				
			</Menu>
		</div>
		);
	} else {
		return (
			<div className={`header-menu-default ${className}`}>
				<div className={estatus ? "active-url" : "text-wrapper"} onClick={cambiarVista}>{text}</div>
			</div>
		);
	}

};

HeaderMenuDefault.propTypes = {
	text: PropTypes.string,
	path: PropTypes.string,
	estatus: PropTypes.bool,
	child: PropTypes.bool,
	childrens: PropTypes.array,
};
