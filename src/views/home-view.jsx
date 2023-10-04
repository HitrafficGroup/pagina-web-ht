import React from "react";
import productos from "../assets/BASE1.png"
import Grid from '@mui/material/Grid';
import TrafficIcon from '@mui/icons-material/Traffic';
import HandymanIcon from '@mui/icons-material/Handyman';
import RvHookupIcon from '@mui/icons-material/RvHookup';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import CardHome from "../components/card-home";


export default function HomeView() {
    return (

        <>
            <div className="section-content">
                <h1 style={{ color: "white"}} >Hitraffic Technology te ayuda en :</h1>
                <div className="section-padding">
                    <Grid container spacing={5} >
                            <Grid item xs={12} md={4}>
                            <CardHome 
                                    text={"Señaletica Vial"} 
                                    description={"  Diseño y construcción de señales vehiculares simples o con sistemas de iluminación nocturno."}
                                    />
                            </Grid >
                            <Grid item xs={12} md={4}>
                            <CardHome 
                                    text={"Semaforización"} 
                                    description={"Instalación y venta de productos de semaforización de como semáforos, controladores, pulsantes etc."}
                                    icon={  <TrafficIcon sx={{ color: "#2ECC71" }} />}
                                    />
                            </Grid>
                            
                            <Grid item xs={12} md={4}>
                            <CardHome 
                                    text={"Postes vehiculares"} 
                                    description={"Construcción de báculos y postes para sistemas de seguridad ECU 911 o sistemas de semaforización"}
                                    icon={  <HandymanIcon sx={{ color: "#F39C12" }} />}
                                    />
                            </Grid>

                            <Grid item xs={12} md={4}>
                            <CardHome 
                                    text={"Plataforma"} 
                                    description={" Ofertamos el servicio de plataforma para obras que requieran de acceso a grandes alturas."}
                                    icon={  <RvHookupIcon sx={{ color: "#3498DB" }} />}
                                    />
                            </Grid >
                            <Grid item xs={12} md={4}>
                            <CardHome 
                                    text={"Automatizacion"} 
                                    description={" Brindamos soluciones en la implementacion de sistema de control en diferentes campos."}
                                    icon={  <PrecisionManufacturingIcon sx={{ color: "#E74C3C" }} />}
                                    />            
                            </Grid >
                            <Grid item xs={12} md={4}>
                            <CardHome 
                                    text={"Pintura al Horno"} 
                                    description={"Disponemos de Hornos especializados para la elboaracion de pintura al horno en gabinetes."}
                                    icon={   <FormatPaintIcon sx={{ color: "rgba(140, 48, 245, 1)" }} />}
                                    />
                            </Grid >
                    </Grid>
                </div>
            </div>


            <div className="section-content">
                <div className="section-padding">
                    <div className="content-group">
                        <div className="content">
                            <h2 style={{ color: "white", margin: 0 }}>Soluciones de Tránsito</h2>
                           
                                <p  >
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
                        <img
                            className="img-home"
                            alt="Ht"
                            src={productos}
                        />
                    </div>

                </div>
            </div>
            <div className="section-content">
                <div className="section-padding-rigth">
                    <div className="content-group-rigth ">

                    <img
                            className="img-home"
                            alt="Ht"
                            src={productos}
                        />

                        <div className="content">
                            <h2 style={{ color: "white", margin: 0 }}>Servicio De Plataforma</h2>
                           
                                <p  >
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

                </div>
            </div>

            <div className="section-content">
                <div className="section-padding">
                    <div className="content-group">
                        <div className="content">
                            <h2 style={{ color: "white", margin: 0 }}>Soluciones de Telecomunicaciones</h2>
                           
                                <p  >
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
                        <img
                            className="img-home"
                            alt="Ht"
                            src={productos}
                        />
                    </div>

                </div>
            </div>
            <div style={{height:50}}>

            </div>

       
        </>


    );
};
