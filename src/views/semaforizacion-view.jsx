
import semaforos from "../assets/semaforo_portada.jpg";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import tecnico_study from "../assets/estudio_tecnico.jpeg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import intervencion from '../assets/intervencion_semaforos.jpg';
import ObraCivil from '../assets/obra-civil.jpg';
import Container from '@mui/material/Container';
import instaleishon from '../assets/instalacion.png';
import Stack from '@mui/material/Stack';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
export default function SemaforizacionView() {




    return (
        <>
            <img src={semaforos} alt="semaforizacion david" style={{width:"100%"}} />
            <div className="radios-content">
                <div>
              
                        <Container maxWidth="md" >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <h1 className="titulos-services">
                                        Nuestra Experiencia
                                    </h1>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        Tenemos mas de 10 anos de experiencia en el area de semaforizacion , culminando diversos proyectos en diferentes cantones del pais.
                                        nuestra fama se debe a la calidad de nuestros trabajos , enfocandonos siempre en utilizar materiales de la mejor calidad con el objetivo
                                        de garantizar el funcionamiento de nuestros proyectos por largos periodos.
                                    </p>

                                </Grid>
                                <Grid item xs={12}>
                                    <h1 className="titulos-services">
                                        Proceso de Instalación
                                    </h1>
                                    <p>
                                        La intervencion de una intereseccion semaforica se basa en los siguientes pasos:
                                    </p>
                                </Grid>


                                <Grid item xs={12} md={6}>
                                    <div>
                                        <img src={tecnico_study} alt="estudio tecnico de factibilidad en transito vial" style={{width:"100%",borderRadius:10}}></img>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                   

                                    <h4> Estudio Tecnico.</h4>
                                    <div>
                                        <p>
                                        En el estudio técnico, primero se acudirá a la zona de interés con el objetivo de ver cuál será la disposición de semáforos más adecuada para el correcto tránsito vehicular, después se constará los puntos de acceso a energía con el objetivo de identificar los conectores necesarios para energizar a los semáforos adicionalmente se estudia el punto donde se colocaran los postes para garantizar la seguridad en general.

                                        </p>
                                       
                                        <strong className="centrar-horizontal" style={{ color: "#839192" }}> <AccessTimeIcon style={{ marginRight: "0.2rem" }} /> Tiempo Estimado de 1 dia laboral </strong>
                                    </div>
                                </Grid>
                              
                                <Grid item xs={12} md={8}>
                                    <h4> Intervencion Civil.</h4>
                                    <p>  Se Realizan excavaciones en los puntos donde se va a colocar los postes para garantizar la estructura de los postes dentro de  las actividades realizadas tenemos:</p>
                                    <ul>
                                        <li>En cementado de las Canastillas.</li>
                                        <li>Creación de puntos de acceso a energía.</li>
                                        <li>Soterrado de conexiones.</li>
                                        <li>Señalización de la zona para evitar accidentes.</li>
                                    </ul>
                                  
                                    <strong className="centrar-horizontal" style={{ color: "#839192" }}> <AccessTimeIcon style={{ marginRight: "0.2rem" }} /> Tiempo Estimado de 2 a 4 dias laborales </strong>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                <div>
                                        <img src={ObraCivil} alt="realizacion de obra civil para semaforos" style={{width:"100%",borderRadius:10}} width={400}></img>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <h4> Instalacion y Capacitacion.</h4>
                                    <p>Después de que la obra civil está culminada, se acude al punto de interés con postes y semáforos para la instalación final de los semáforos.</p>
                                        <Stack  direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                           
                                                    <div>
                                                        <img src={intervencion} alt="instalacion de semaforos" style={{width:"100%",borderRadius:10}}></img>
                                                    </div>
                                         
                                       
                                                    <div>
                                                        <img src={instaleishon}  alt="armado de semaforos" style={{width:"100%",borderRadius:10}}></img>
                                                    </div>
                                           
                                        </Stack>
                                   
                                    <strong className="centrar-horizontal" style={{ color: "#839192" }}> <AccessTimeIcon style={{ marginRight: "0.2rem" }} /> Tiempo Estimado de 1 a 4 dias laborales </strong>
                                    <h4>Soporte.</h4>
                                    <p>Nuestras políticas de soporte le ofrecen asesorías durante todo el tiempo, cabe recalcar que en el caso de reprogramaciones se deben considerar ciertos factores, par amas información revise nuestras políticas de garantía.</p>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                <h2> Cotiza con nosotros</h2>
                                </Grid>
                                <Grid item xs={12}  md={12}>
                                    <div style={{width:"100%",justifyContent:"center",display:"flex"}}>
                                        <Button variant="contained" color="cotizar" endIcon={<MonetizationOnIcon />}>
                                            Cotizar
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{ height: 40 }}>

                                    </div>
                                </Grid>

                            </Grid>
                        </Container>
                    </div>
                </div>

        </>
    );
}