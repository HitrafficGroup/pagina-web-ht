import React from "react";
import productos from "../assets/BASE1.png"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import DirectionsIcon from '@mui/icons-material/Directions';
import TrafficIcon from '@mui/icons-material/Traffic';
import HandymanIcon from '@mui/icons-material/Handyman';
import RvHookupIcon from '@mui/icons-material/RvHookup';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';

import CustomBtn from "../components/custom-btn/custom-btn";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));




export default function HomeView() {
    return (

        <>

<div className="section-content">
                    <h1 style={{color:"white"}} >Hitraffic Technology te ayuda en..</h1>
                    <div className="section-padding">
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={4}>
                            <Item>
                                <div className="icon-details">
                                    <div className="feature-icons" >
                                        <DirectionsIcon sx={{ color: "rgba(140, 48, 245, 1)" }} />
                                    </div>
                                    <div className="details">
                                        <div className="headline">Semaforizacion</div>
                                        <p className="description">
                                        Instalación y venta de productos de semaforización de como semáforos, controladores, pulsantes etc.
                                        </p>
                                        <CustomBtn text={"Ir a seccion"} />
                                    </div>
                                
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Item>
                                <div className="icon-details">
                                    <div className="feature-icons" >
                                        <TrafficIcon sx={{ color: "#2ECC71" }} />
                                    </div>
                                    <div className="details">
                                        <div className="headline">Señaletica Vial</div>
                                        <p className="description">
                                        Diseño y construcción de señales vehiculares simples o con sistemas de iluminación nocturno.
                                        </p>
                                    <CustomBtn text={"Ir a seccion"} />
                                    </div>
                                </div>
                            </Item>
                        </Grid >
                        <Grid item xs={12} md={4}>
                            <Item>
                                <div className="icon-details">
                                    <div className="feature-icons" >
                                        <HandymanIcon sx={{ color: "#F39C12" }} />
                                    </div>
                                    <div className="details">
                                        <div className="headline">Construccion de Postes</div>
                                        <p className="description">
                                        Construcción de báculos y postes para sistemas de seguridad ECU 911 o sistemas de semaforización.
                                        </p>
                                    <CustomBtn text={"Ir a seccion"} />
                                    </div>
                                </div>
                            </Item>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Item>
                                <div className="icon-details">
                                    <div className="feature-icons" >
                                        <RvHookupIcon sx={{ color: "#3498DB" }} />
                                    </div>
                                    <div className="details">
                                        <div className="headline">Alquiler de Plataforma</div>
                                        <p className="description">
                                            Ofertamos el servicio de plataforma para obras que requieran de acceso a grandes alturas.
                                            
                                        </p>
                                    <CustomBtn text={"Ir a seccion"} />
                                    </div>
                                </div>
                            </Item>
                        </Grid >
                        <Grid item xs={12} md={4}>
                            <Item>
                                <div className="icon-details">
                                    <div className="feature-icons" >
                                        <PrecisionManufacturingIcon sx={{ color: "#E74C3C" }} />
                                    </div>
                                    <div className="details">
                                        <div className="headline">Automatizacion</div>
                                        <p className="description">
                                            Brindamos soporte y tenemos experiencia en la implementacion de sistema de control en diferentes
                                            campos.
                                        </p>
                                    <CustomBtn text={"Ir a seccion"} />
                                    </div>
                                </div>
                            </Item>
                        </Grid >
                        <Grid item xs={12} md={4}>
                            <Item>
                                <div className="icon-details">
                                    <div className="feature-icons" >
                                        <FormatPaintIcon sx={{ color: "rgba(140, 48, 245, 1)" }} />
                                    </div>
                                    <div className="details">
                                        <div className="headline">Pintura al Horno</div>
                                        <p className="description">
                                            Disponemos de Hornos especializados para la elboaracion de pintura al horno en gabinetes.
                                        </p>
                                     
                                    <CustomBtn text={"Ir a seccion"} />
                                    </div>
                                </div>
                            </Item>
                        </Grid >

                    </Grid>
                    </div>
            </div>


            <div className="section-content">
                <div className="section-padding">    
                    <div className="content-group">
                        <div className="content">
                            <h2 style={{color:"white",margin:0}}>Soluciones de Tránsito</h2>
                            <div className="description-section">
                            <p  >
                            Hitraffic Technology es una empresa líder en el sector de servicios de infraestructura y tecnología que se especializa en ofrecer soluciones integrales para la gestión del tráfico y las comunicaciones. Nuestro amplio abanico de servicios abarca desde la instalación y mantenimiento de sistemas de semaforización hasta la fabricación de postes personalizados para semáforos. Además, proporcionamos dispositivos de telecomunicaciones de vanguardia para mejorar la conectividad en áreas urbanas y rurales.
                            </p>
                            </div>
                           
                            {/* <Button
                                className="design-component-instance-node"
                                essentialIconsRightArrow7Color="white"
                                labelClassName="button-2"
                                size="large"
                                type="label-icon"
                                variant="link"
                            /> */}
                        </div>
                        <img
                            className="img-home"
                            alt="Ht"
                            src={productos}
                        />
                    </div>
                   
                </div>
            </div>


           

        </>


    );
};
