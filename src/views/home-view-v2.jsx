import React from "react";
import Slider from "../components/slider";
import HomeBtn from "../components/home-btn";
import Grid from '@mui/material/Grid';
import CardService from "../components/card-service";
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import LogoDevOutlinedIcon from '@mui/icons-material/LogoDevOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SimpleBar from 'simplebar-react';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import RvHookupOutlinedIcon from '@mui/icons-material/RvHookupOutlined';
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import 'simplebar-react/dist/simplebar.min.css';
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
                <SimpleBar  className="content-images"  style={{  }}>
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
                </SimpleBar>

            <div className="content-cards">
            <div style={{height:50}}>

                    </div>
                <div className="text-content">
                    <h2 >PRINCIPALES SERVICIOS</h2>
                </div>
                <div className="card-home-container">
                    <Grid container >
                        <Grid item xs={12} md={3}>
                            <CardService  icon={<SupportAgentIcon sx={{fontSize:70}} /> }   title={"SOPORTE TECNICO"}  text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nulla nihil iusto molestiae dolores et doloribus quaerat cum ab ea"}  />
                        </Grid >
                        <Grid item xs={12} md={3}>
                            <CardService  icon={<EngineeringOutlinedIcon sx={{fontSize:70}} /> }   title={"INGENIERIA DE TRAFICO"}  text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nulla nihil iusto molestiae dolores et doloribus quaerat cum ab ea"}  />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <CardService  icon={<LogoDevOutlinedIcon sx={{fontSize:70}} /> }   title={"DESARROLLO DE SOFTWARE"}  text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nulla nihil iusto molestiae dolores et doloribus quaerat cum ab ea"}  />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <CardService  icon={<ConstructionOutlinedIcon sx={{fontSize:70}} /> }   title={"DISEÑO MECANICO"}  text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nulla nihil iusto molestiae dolores et doloribus quaerat cum ab ea"}  />
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item xs={12} md={3}>
                            <CardService  icon={<FlightTakeoffOutlinedIcon sx={{fontSize:70}} /> }   title={"IMPORTACIONES"}  text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nulla nihil iusto molestiae dolores et doloribus quaerat cum ab ea"}  />
                        </Grid >
                        <Grid item xs={12} md={3}>
                            <CardService  icon={<RvHookupOutlinedIcon sx={{fontSize:70}} /> }   title={"PLATAFORMA DE ELEVACION"}  text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nulla nihil iusto molestiae dolores et doloribus quaerat cum ab ea"}  />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <CardService  icon={<CloudSyncOutlinedIcon sx={{fontSize:70}} /> }   title={"SISTEMAS IOT INDUSTRIALES"}  text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nulla nihil iusto molestiae dolores et doloribus quaerat cum ab ea"}  />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <CardService  icon={<SmartToyOutlinedIcon sx={{fontSize:70}} /> }   title={"MACHINE LEARNING"}  text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nulla nihil iusto molestiae dolores et doloribus quaerat cum ab ea"}  />
                        </Grid>
                    </Grid>
                    <div style={{height:50}}>

                    </div>
                </div>
            </div>
       
          
        </>
    );
}
