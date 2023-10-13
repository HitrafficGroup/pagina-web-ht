import React from "react";
import plataforma from "../assets/semaforos_portada.jpg";
import Container from '@mui/material/Container';
import PlataformaTop from "../assets/plataforma_top.png";
import plataformaUso from "../assets/uso_plataforma.jpg";
export default function PlataformaView(){
    

    return(
        <>
            <img src={plataforma} style={{borderRadius:"8px"}}  alt="" />
            <div className="plataforma-content"> 
            <Container maxWidth="md"   sx={"xl"}>
                <h1>
                    Alquiler de Plataforma
                </h1>
                <p>
                    Disponemos de una plataforma La pluma montada en remolque Genie TZ™-34/20, es una plataforma 
                    elevadora diseñada para proporcionar acceso aéreo en una variedad de aplicaciones de construcción
                    y mantenimiento. 
                </p>
                <ul>
                    <li>
                        <strong>Entorno de Trabajo Excelente</strong>
                        <p>
                            El "entorno de trabajo" se refiere al rango o área en la que la pluma elevadora puede operar.
                            La TZ™-34/20 es conocida por su excelente entorno de trabajo, lo que significa
                             que puede extenderse a una altura significativa de 12.5m y llegar horizontalmente a 5.5m para proporcionar
                              acceso a áreas de difícil acceso.
                        </p>
                    </li>
                    <li>
                        <div>
                            <img src={PlataformaTop} alt="especificaciones de la plataforma" width={400} />
                        </div>
                        
                    </li>
                    <li>
                        <strong>Controles Intuitivos </strong>
                        <p>
                        Los controles en la Genie TZ™-34/20 están diseñados para ser fáciles de usar y intuitivos. Esto facilita a los operadores maniobrar la plataforma, ajustar la posición de la pluma y realizar tareas de manera eficiente y segura.
                        </p>
                    </li>
                    <li>
                        <strong>Tortuga para barra de tiro </strong>
                        <p>
                        Gracias al sistema de enclaje de tortuga la plataforma se puede remolcar fácilmente a un lugar de trabajo, lo que la hace altamente móvil y versátil. Esta característica es particularmente útil cuando es necesario mover el equipo entre diferentes ubicaciones.
                        </p>
                    </li>
                </ul>
                <p>Contar con personal capacitado para operar una plataforma de elevación es fundamental para garantizar la seguridad y eficiencia
                     en los trabajos en altura. Si Hitraffic SAS proporciona personal capacitado en el uso de la plataforma de elevación,
                      eso es una ventaja significativa para cualquier empresa o individuo que necesite realizar trabajos que involucren 
                      el uso de este tipo de equipos. </p>
                      <img  src={plataformaUso} />
            </Container>

            </div>

        </>
    );

}