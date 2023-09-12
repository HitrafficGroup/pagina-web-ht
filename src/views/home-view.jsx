import React from "react";
import { Button } from "../components/Button";
import productos from "../assets/Multiple.png"

export default function HomeView() {
    return (
       
            <>
                <div className="feature-single">
                    <div className="overlap">
                        <div className="content-group">
                            <div className="content">
                                <div className="headline">Soluciones de Tránsito</div>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra,
                                    feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit
                                    non. Non commodo volutpat, pharetra, vel.
                                </p>
                                <Button
                                    className="design-component-instance-node"
                                    essentialIconsRightArrow7Color="white"
                                    labelClassName="button-2"
                                    size="large"
                                    type="label-icon"
                                    variant="link"
                                />
                            </div>
                        </div>
            
                                    <img
                                        className="img-home"
                                        alt="Ht"
                                        src={productos}
                                    />
                                  
                    </div>
                </div>
       
            </>
             
        
    );
};
