import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import lat from "../assets/TM7-LATERAL.jpg";
import front from "../assets/TM7-SUPINF.jpg";
import pos from "../assets/TM7-POSTERIOR.jpg";
import React,{useState} from 'react';

import AwesomeSlider from 'react-awesome-slider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Paper from '@mui/material/Paper';
import SimCardIcon from '@mui/icons-material/SimCard';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import WifiIcon from '@mui/icons-material/Wifi';

import Button from '@mui/material/Button';
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
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



export default function Tm7View() {
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

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (

        <>
            <div className="products-bg">
                <div className="top-content">
                    <h1>Radio TM7</h1>

                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/productos/radios"
                            >
                                Radios
                            </Link>
                            <Typography color="text.primary">tm-7</Typography>
                        </Breadcrumbs>
             

                </div>

                <Grid sx={{ padding: "3rem" }} container spacing={5} >
                    <Grid item xs={12} md={5}>
                        <div className="images-productos ">
                            <AwesomeSlider bullets={true}    >
                                <div>
                                    <img src={front}  className='slide' alt='tm7-front' />
                                </div>
                                <div>
                                    <img src={lat} className='slide' alt='tm7-lat' />
                                </div>
                                <div>
                                    <img src={pos} className='slide' alt='tm7-pos' />
                                </div>
                            </AwesomeSlider>
                        </div>
                    </Grid >
                    <Grid item xs={12} md={7}>
                        <div className='description-productos'>
                            <h3>Características</h3>
                            <ul className='list-content-t320'>
                                <li>
                                    <LocationOnIcon /> Posicionamiento GPS
                                </li>
                                <li>
                                    <PhoneAndroidIcon />  Pantalla Táctil
                                </li>
                                <li>
                                    <SimCardIcon />   Doble Tarjeta Sim
                                </li>
                                <li>
                                    <KeyboardVoiceIcon />  Video/Voz/ Mensajes
                                </li>
                                <li>
                                    <CameraAltIcon /> Cámara frontal de 2,0 MP, cámara trasera de 8,0 MP
                                </li>
                                <li>
                                    <WifiIcon /> Conexión WIFI (Adaptable:NFC)
                                </li>
                            </ul>
                            <Button variant="contained" onClick={handleClickOpen} >
                                Cotizar
                            </Button>
                        </div>
                    </Grid >
                    <Grid item xs={12} md={12}>
                        <div className='body-productos'>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Caracteristicas" {...a11yProps(0)} />
                                        <Tab label="Descripcion" {...a11yProps(1)} />

                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value} index={0}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableBody>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong> WIFI</strong></TableCell>
                                                    <TableCell align="center">IEEE 802.11a/b/g/n 2.4G & 5G</TableCell>
                                                    <TableCell align="left"><strong> CARD SLOT</strong></TableCell>
                                                    <TableCell align="center">Standard SIM card + Micro SIM card + TF card</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong> BLUETOOTH</strong></TableCell>
                                                    <TableCell align="center">BT4.0 & BLE</TableCell>
                                                    <TableCell align="left"><strong>USB</strong></TableCell>
                                                    <TableCell align="center">Type-C</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong> NFC</strong></TableCell>
                                                    <TableCell align="center">SOPORTE</TableCell>
                                                    <TableCell align="left"><strong>PANTALLA</strong></TableCell>
                                                    <TableCell align="center">4.0" OLED screen, 60*640RGB. MIPI1lin</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong> LOCALIZACIÓN</strong></TableCell>
                                                    <TableCell align="center">GPS, GLONASS, AGPS，Beidou</TableCell>
                                                    <TableCell align="left"><strong>AUDIO</strong></TableCell>
                                                    <TableCell align="center">3558 Altavoz tipo pasarela, potencia: 5W</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong> CPU</strong></TableCell>
                                                    <TableCell align="center">MT6739, 1.5GHz, 4 cores</TableCell>
                                                    <TableCell align="left"><strong>OS</strong></TableCell>
                                                    <TableCell align="center">Android 7.1</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong>MEMORY</strong></TableCell>
                                                    <TableCell align="center">2GB（RAM）+ 16GB（ROM）</TableCell>
                                                    <TableCell align="left"><strong>DIMENSION</strong></TableCell>
                                                    <TableCell align="center">195.1×67.3×88.6mm</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong>TF-CARD</strong></TableCell>
                                                    <TableCell align="center">Support，Micro SD/TF×1，up to 32GB</TableCell>
                                                    <TableCell align="left"><strong>WEIGHT</strong></TableCell>
                                                    <TableCell align="center">≈500g</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong>Interface</strong></TableCell>
                                                    <TableCell colSpan={3} align="center">Interfaz de micrófono para auriculares de aviación (sin teclado digital) /DB25/GPS interfaz de antena externa/interfaz externa de antena principal</TableCell>

                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    <ul>
                                        <li>
                                            Intercomunicador a nivel mundial
                                        </li>
                                        <li>
                                            Cámara frontal y trasera con función de enfoque automático
                                        </li>
                                        <li>
                                            Tiempo de espera de más de 80 horas.
                                        </li>
                                        <li>
                                            Tiempo de trabajo aproximado 9 horas.
                                        </li>
                                        <li>
                                            Altavoz Ø36mm, 8Ω 2W
                                        </li>
                                        <li>
                                            Plataforma para registro de posicionamiento GPS.
                                        </li>
                                        <li>
                                            Compatible con WIFI, BT
                                        </li>
                                        <li>
                                            Línea de datos Micro 5PIN
                                        </li>
                                        <li>
                                            Alta resistencia a caídas
                                        </li>
                                    </ul>
                                </CustomTabPanel>
                            </Box>
                        </div>
                    </Grid >
                </Grid >
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Cotizacion</DialogTitle>
                <DialogContent>
                    <Stack spacing={2}>
                        <p>
                            Llene el formulario de cotizacion y un asesor de ventas se contactara con usted, por correo
                            o directamente por su numero de telefono.
                        </p>
                        <Stack direction={"row"} spacing={2}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Nombre"
                                type="text"
                                fullWidth
                                onChange={(event) => {
                                    setNombre(event.target.value);
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Apellido"
                                type="text"
                                fullWidth
                                onChange={(event) => {
                                    setApellido(event.target.value);
                                }}
                            />
                        </Stack>
                        <TextField
                            required
                            id="outlined-required"

                            label="Direccion de Correo"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            type="email"
                        />
                        <TextField
                            required
                            id="outlined-required"

                            label="Telefono"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneEnabledIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(event) => {
                                setNumero(event.target.value);
                            }}
                            type="email"
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Mensaje"
                            multiline
                            maxRows={4}
                            onChange={(event) => {
                                setMensaje(event.target.value);
                            }}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={enviarEmailJs}>Cotizar</Button>
                </DialogActions>
            </Dialog>
        </>

    );

}