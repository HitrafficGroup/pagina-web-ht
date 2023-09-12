import { useEffect } from "react";
import { HeaderMenuDefault } from "./HeaderMenuDefault";
import { Button } from "./Button";
import {  useLocation } from 'react-router-dom';
export default function NavBar(){

    const location = useLocation();

    useEffect(() => {
      console.log(location)
    }, []);
    return(
        <>
            <div className="header">
        <div className="header-content">
        <p className="hi-traffic">
            <span className="span">Hi</span>
            <span className="text-wrapper-2">-</span>
            <span className="text-wrapper-3">Traffic</span>
            
          </p>
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