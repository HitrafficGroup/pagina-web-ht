
import { HeaderMenuDefault } from "./HeaderMenuDefault";
import { Button } from "./Button";
export default function NavBar(){

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
            <HeaderMenuDefault className="design-component-instance-node" text="Informacion" />
            <HeaderMenuDefault className="design-component-instance-node" text="Productos" />
            <HeaderMenuDefault className="design-component-instance-node" text="Servicios" />
            <HeaderMenuDefault className="design-component-instance-node" text="Mision" />
            <HeaderMenuDefault className="design-component-instance-node" text="Acerca de Nosotros" />
          </div>
          <Button className="button-instance" size="medium" text="Cotizar" type="primary" variant="filled" />
        </div>
        </div>
    
         
        </>
    );
}