import React from "react";
import { Button } from "../components/Button";
import "./styleguide.css";
import "./style.css";
import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
export default function HomeView() {
    return (
        <div className="index">
            <div className="div-2">
                <NavBar />
                <div className="feature-single">
                    <div className="overlap">
                        <div className="content-group">
                            <div className="content">
                                <div className="headline">Soluciones Tránsito</div>
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
                        <div className="phone-mockup">
                            <div className="mobile-iphone-x">
                                <div className="overlap-group">
                                    <img
                                        className="ht"
                                        alt="Ht"
                                        src="https://cdn.animaapp.com/projects/65007d9a904ea957862af503/releases/65007dd76963f7376cdc05aa/img/ht200.png"
                                    />
                                    <img
                                        className="seal"
                                        alt="Seal"
                                        src="https://cdn.animaapp.com/projects/65007d9a904ea957862af503/releases/65007dd76963f7376cdc05aa/img/se-al.png"
                                    />
                                    <img
                                        className="semaforo"
                                        alt="Semaforo"
                                        src="https://cdn.animaapp.com/projects/65007d9a904ea957862af503/releases/65007dd76963f7376cdc05aa/img/semaforo.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <img
                            className="img"
                            alt="Ht"
                            src="https://cdn.animaapp.com/projects/65007d9a904ea957862af503/releases/65007dd76963f7376cdc05aa/img/ht96.png"
                        />
                    </div>
                </div>
              <Footer/>
            </div>
        </div>
    );
};
