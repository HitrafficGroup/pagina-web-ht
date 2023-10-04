import React,{useState} from 'react';
import HeaderMenuDefault from './HeaderMenuDefault';
import { useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { useMediaQuery } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import NavItem from './nav-item';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import useScrollDirection from '../hooks/scroll-directions';
export default function NavBar() {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const location = useLocation();
  const [open,setOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const toggleDrawer = (open) => (event) => {
   
    setOpen(open)

   
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List>
      {menu_data.map((item) => {
                const active = item.path ? (location.pathname === item.path) : false;
                return (
                  <NavItem
                    text={item.name}
                    path={item.path}
                    estatus={active}
                    child={item.child}
                    childrens={item.childrens}
                    auxClick={toggleDrawer(false)}
                    icon={item.icon}
                  />
                );
          })}
      </List>
    </Box>
  );

  if (lgUp) {
    return (
      <>
        <div  className={`header ${ scrollDirection === "down" ? "change-bg" : "transparent"}`} >
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
                    child={item.child}
                    childrens={item.childrens}
                  />
                );
              })}

            </div>
            <div style={{ width: 90 }}>
           
            </div>
          </div>

        </div>


      </>
    );
  } else {
    return (
      <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense" sx={{ backgroundColor: "black", padding: 2 }}>
            <IconButton edge="start"     onClick={toggleDrawer(true)}  color="menu" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
              </IconButton>
            <img src={Logo} height={40} alt="" />
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
            anchor={'left'}
            open={open}
            onClose={toggleDrawer(false)}
          >
            {list('left')}
          </Drawer>
      </>
      
    );

  }

}



const menu_data = [
  {
    name: "Inicio",
    path: "/",
    child:false,
    icon: <HomeRoundedIcon/>,
    childrens:[],
  },
  {
    name: "Productos",
    path: "/productos",
    child:true,
    icon: <ShoppingBasketSharpIcon/>,
    childrens:[
      {
        name:"Radios",
        path:"/productos/radios",
      },
      {
        name:"Semaforos",
        path:"/productos/semaforos",
      },
      {
        name:"Controladores",
        path:"/productos/controladores",
      },
      {
        name:"Postes",
        path:"/productos/postes",
      },
    ]
  },
  {
    name: "Servicios",
    path: "/servicios",
    child:true,
    icon: <DesignServicesSharpIcon/>,
    childrens:[
      {
        name:"Semaforización",
        path:"/servicios/semaforizacion",
      },
      {
        name:"Pintura Industrial",
        path:"/servicios/pintura_industrial",
      },
      {
        name:"Alquiler de Plataforma",
        path:"/servicios/plataforma",
      },
      {
        name:"Automatización",
        path:"/servicios/automatizacion",
      },
      {
        name:"Importaciones",
        path:"/servicios/importaciones",
      }
    ]
  },
  {
    name: "Casos de Éxito",
    path: "/blog",
    child:false,
    icon: <ThumbUpAltSharpIcon/>,
    childrens:[]
  },
  {
    name: "Acerca de Nosotros",
    path: "/acerca_nosotros",
    child:false,
    icon: <InfoSharpIcon/>,
    childrens:[]
  },


]