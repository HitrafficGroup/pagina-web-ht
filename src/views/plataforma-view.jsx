import React,{useState} from "react";
import plataforma from "../assets/semaforos_portada.jpg";
import Container from '@mui/material/Container';
import PlataformaTop from "../assets/plataforma_top.png";
import plataformaUso from "../assets/uso_plataforma.jpg";
import { Button } from "@mui/material";


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import emailjs from '@emailjs/browser';
import FormularioCotizacion from "../components/formulario-cotizacion";

export default function PlataformaView(){
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [numero,setNumero] = useState("");
    const [email,setEmail] = useState("");
    const [nombre,setNombre]  = useState("");
    const [apellido,setApellido]  = useState("");
    const [mensaje,setMensaje] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
      };

    const enviarEmailJs=()=>{
            const templateParams = {
                from_name:  `${nombre} ${apellido}`,
                message: mensaje,
                numero:numero,
                correo:email,
                producto:"plataforma",
                
            };
            emailjs.send('service_5ta3uir','template_sg3oltu', templateParams, '__kIJxAY6uzbb1RzE').then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
            console.log('FAILED...', err);
            });
            setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    };

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
                    <li style={{listStyleType:"none"}}>
                        <div className="plataforma-img">
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
                <p>
                    Contar con personal capacitado para operar una plataforma de elevación es fundamental para garantizar la seguridad y eficiencia
                    en los trabajos en altura. Si Hitraffic SAS proporciona personal capacitado en el uso de la plataforma de elevación,
                    eso es una ventaja significativa para cualquier empresa o individuo que necesite realizar trabajos que involucren 
                    el uso de este tipo de equipos. 
                </p>
                    <div className="plataforma-img">
                        <img  src={plataformaUso} />
                    </div>
                <div className="btn-cotizar">
                    <FormularioCotizacion/>
                </div>
                   
                <div style={{height:"4rem"}}>

                </div>
                
               
            </Container>

            </div>
           
        </>
    );

}