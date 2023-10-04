import React from "react";
import Slider from "../components/slider";
import HomeBtn from "../components/home-btn";


export default function HomeViewV2() {


    return (
        <>
            <Slider />
            <div className="content">
                <div className="text-content">
                    <h2 >HITRAFFIC GROUP</h2>
                    <h3>SOLUCIONES TECNOLOGICAS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum non consequuntur quis quo! Laborum nulla iure deserunt, et commodi dolorem quam nemo atque hic asperiores adipisci fugiat? Mollitia, tempore!</p>
                </div>
            </div>
            <div className="content-images">
                <div className="image-card">
                    <div className="content-box" />
                    <p className="p-image">Awesome Title 1</p>
                    <div style={{height:80}}></div>
                    <HomeBtn/>
                </div>

                <div className="image-card2">
                    <div className="content-box" />
                    <p className="p-image">Awesome Title 1</p>
                    <div style={{height:80}}></div>
                    <HomeBtn/>
                </div>

                <div className="image-card3">
                    <div className="content-box" />
                    <p className="p-image">Awesome Title 1</p>
                    <div style={{height:80}}></div>
                    <HomeBtn/>
                </div>

                <div className="image-card">
                    <div className="content-box" />
                    <p className="p-image">Awesome Title 1</p>
                    <div style={{height:80}}></div>
                    <HomeBtn/>
                </div>


                <div className="image-card3">
                    <div className="content-box" />
                    <p className="p-image"> Awesome Title 1</p>
                    <div style={{height:80}}></div>
                    <HomeBtn/>
                </div>


            </div>
            <div className="content">
                <div className="text-content">
                    <h2 >PRINCIPALES SERVICIOS</h2>
                    <h3>SOLUCIONES TECNOLOGICAS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum non consequuntur quis quo! Laborum nulla iure deserunt, et commodi dolorem quam nemo atque hic asperiores adipisci fugiat? Mollitia, tempore!</p>
                </div>
            </div>
        </>
    );
}