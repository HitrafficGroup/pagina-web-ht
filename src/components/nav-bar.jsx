
import { HeaderMenuDefault } from "./HeaderMenuDefault";
import { Button } from "./Button";
import {  useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { useMediaQuery } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
export default function NavBar(){
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const location = useLocation();

    if (lgUp) {
      return(
        <>
        <div className="header">
        <div className="header-content">
          <img src={Logo} height={70} alt="" />
          <div className="middle-nav-items">
          {menu_data.map((item) => {
              const active = item.path ? (location.pathname === item.path) : false;

              return (
                <HeaderMenuDefault className="design-component-instance-node"
                  text={item.name}
                  path={item.path}
                  estatus={active}
                />
              );
            })}

          </div>
          <Button className="button-instance" size="medium" text="Cotizar" type="primary" variant="filled" />
        </div>
        </div>
    
         
        </>
    );
    }else{
      return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense"  sx={{backgroundColor:"white" ,padding:2}}>
            <IconButton edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <img src={Logo} height={40} alt="" />
          </Toolbar>
        </AppBar>
      </Box>
      );
    
    }
    
}

const menu_data = [
  {
    name:"Inicio",
    path:"/"
  },
  {
    name:"Productos",
    path:"/productos"
  },
  {
    name:"Servicios",
    path:"/servicios"
  },
  {
    name:"Casos de Exito",
    path:"/blog"
  },
  {
    name:"Acerca de Nosotros",
    path:"/acerca_nosotros"
  },
 

]