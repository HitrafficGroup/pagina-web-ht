import React,{useState} from 'react';
import LogoFinal from '../assets/logopw.png'; 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
export default function AppBarV2(){
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
    const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
    const handleClose = () => {
		setAnchorEl(null);
	};

    return(
            <>
        
                <div className="header-v2">
                    <div style={{width:"2rem"}}></div>
                    <img src={LogoFinal} height={70} alt="" />
                    <div style={{width:"3rem"}}></div>
                    <a>Inicio</a>
                    <a 
                     aria-controls={open ? 'basic-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? 'true' : undefined}
                     onClick={handleClick}
                    >Productos</a>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                           <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                    <a>Servicios</a>
                    <a>Casos de Exito</a>
                    <a>Acerca de Nosotros</a>
                    <div></div>
                    <div style={{width:"2rem"}}></div>
                </div>
            </>
    );
}