import React from "react";
import Slider from "../components/slider";
import HomeBtn from "../components/home-btn";
import Grid from '@mui/material/Grid';
import TrafficIcon from '@mui/icons-material/Traffic';
import HandymanIcon from '@mui/icons-material/Handyman';
import RvHookupIcon from '@mui/icons-material/RvHookup';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import CardHome from "../components/card-home";
import CardService from "../components/card-service";

import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function HomeViewV2() {


    return (
        <>
            <Slider />
            <div className="content">
                <div className="text-content">
                    <h2 >HITRAFFIC GROUP</h2>
                    <h3>SOLUCIONES TECNOLOGICAS</h3>
                    <p>
                        Hitraffic Technology es una empresa líder en el sector de servicios de infraestructura y
                        tecnología que se especializa en ofrecer soluciones integrales para la gestión del tráfico y
                        las comunicaciones. Nuestro amplio abanico de servicios abarca desde la instalación y
                        mantenimiento de sistemas de semaforización hasta la fabricación de postes personalizados
                        para semáforos. Además, proporcionamos dispositivos de telecomunicaciones de vanguardia
                        para mejorar la conectividad en áreas urbanas y rurales.
                        Nuestra experiencia en automatización nos permite ofrecer soluciones eficientes y
                        sostenibles para el control del tráfico, contribuyendo a la seguridad vial y al flujo de vehículos
                        en entornos urbanos.
                    </p>
                </div>
            </div>
            <div className="content-images">
                <div className="image-card">
                    <div className="content-box" />
                    <p className="p-image">Domotica</p>
                    <div style={{ height: 80 }}></div>
                    <HomeBtn />
                </div>

                <div className="image-card1">
                    <div className="content-box" />
                    <p className="p-image">Semaforizacion</p>
                    <div style={{ height: 80 }}></div>
                    <HomeBtn />
                </div>

                <div className="image-card2">
                    <div className="content-box" />
                    <p className="p-image">Señalización vial</p>
                    <div style={{ height: 80 }}></div>
                    <HomeBtn />
                </div>

                <div className="image-card3">
                    <div className="content-box" />
                    <p className="p-image">Automatizacion Industrial</p>
                    <div style={{ height: 80 }}></div>
                    <HomeBtn />
                </div>

               

                <div className="image-card4">
                    <div className="content-box" />
                    <p className="p-image">Desarrollo de Software</p>
                    <div style={{ height: 80 }}></div>
                    <HomeBtn />
                </div>

                <div className="image-card5">
                    <div className="content-box" />
                    <p className="p-image">Sistema de Telecomunicaciones</p>
                    <div style={{ height: 80 }}></div>
                    <HomeBtn />
                </div>
            </div>

            <div className="content-cards">
                <div className="text-content">
                    <h2 >PRINCIPALES SERVICIOS</h2>
                </div>
                <div className="card-home-container">
                    <Grid container spacing={5} >
                        <Grid item xs={12} md={4}>
                            <CardService  icon={<SupportAgentIcon sx={{fontSize:70}} /> }   title={"INGENIERIA DE TRAFICO"}  text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nulla nihil iusto molestiae dolores et doloribus quaerat cum ab ea"}  />
                        </Grid >
                        <Grid item xs={12} md={4}>
                        <CardService  icon={<SupportAgentIcon sx={{fontSize:70}} /> }   title={"INGENIERIA DE TRAFICO"}  text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nulla nihil iusto molestiae dolores et doloribus quaerat cum ab ea"}  />
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <CardService  icon={<SupportAgentIcon sx={{fontSize:70}} /> }   title={"INGENIERIA DE TRAFICO"}  text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nulla nihil iusto molestiae dolores et doloribus quaerat cum ab ea"}  />
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    );
}
