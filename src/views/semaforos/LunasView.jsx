import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import lat from "../../assets/lunas/3.png";
import front from "../../assets/lunas/7.png";

import AwesomeSlider from 'react-awesome-slider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';



import FormularioCotizacion from '../../components/formulario-cotizacion';
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



export default function LunasView(){


    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="products-bg">
                <div className="top-content">
                    <h1>Lunas aparte</h1>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/productos/semaforos"
                        >
                            Semaforos
                        </Link>
                        <Typography color="text.primary">Contadores Vehiculares</Typography>
                    </Breadcrumbs>


                </div>

                <Grid sx={{ padding: "3rem" }} container spacing={5} >
                    <Grid item xs={12} md={5}>
                        <div className="images-productos">
                            <AwesomeSlider>
                                <div>
                                    <img src={front} className='slide' alt='luna normal' />
                                </div>
                                <div>
                                    <img src={lat} className='slide' alt='lunas lat' />
                                </div>
                            </AwesomeSlider>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <div className='description-productos'>
                            <h3>Resumen: </h3>
                            <p>
                                Hitraffic SAS dispone de lunas listas para ensamblar en los modulos  de semaforos vehiculares o peatonales.
                            </p>
                                <ul>
                                    <li>Lunas con flecha.</li>
                                    <li>Lunas normales.</li>
                                    <li>Lunas con contador</li>
                                </ul>
                            <p>
                                Los semáforos peatonales se disponen en versiones modulares de 2 piezas,
                                los tamaños modulares de las cajas de los semáforos pueden ser de 200mm o 300mm.
                            </p>
                            <FormularioCotizacion />

                        </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div className='body-productos'>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Caracteristicas" {...a11yProps(0)} />
                                        {/* <Tab label="Accesorios" {...a11yProps(1)} /> */}
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value} index={0}>
                                    <p>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableBody>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong> CONTADOR</strong></TableCell>
                                                    <TableCell align="center">si</TableCell>
                                                    <TableCell align="left"><strong>SUJECIÓN</strong></TableCell>
                                                    <TableCell align="center">Standard SIM card + Micro SIM card + TF card</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong>STRUCTURA</strong></TableCell>
                                                    <TableCell align="center">Tipo modular</TableCell>
                                                    <TableCell align="left"><strong>USB</strong></TableCell>
                                                    <TableCell align="center">Micro USB 2.0</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong>CICLO DE VIDA</strong></TableCell>
                                                    <TableCell align="center">80000 Horas</TableCell>
                                                    <TableCell align="left"><strong>TECNOLOGÍA</strong></TableCell>
                                                    <TableCell align="center">tipo LED</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong> CABLE</strong></TableCell>
                                                    <TableCell align="center">Tiene 1 cable concéntrico de 3 hilos para la conexión de cada luminaria</TableCell>
                                                    <TableCell align="left"><strong>Factor de potencia</strong></TableCell>
                                                    <TableCell align="center">≥ 0.92</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong> COMPUERTAS</strong></TableCell>
                                                    <TableCell align="center">3</TableCell>
                                                    <TableCell align="left"><strong>VIBRACIÓN MECÁNICA</strong></TableCell>
                                                    <TableCell align="center">EN60068-2-64:2007</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong>MATERIAL DE FABRICACIÓN</strong></TableCell>
                                                    <TableCell align="center">Policarbonato UV</TableCell>
                                                    <TableCell align="left"><strong>VOLTAJE</strong></TableCell>
                                                    <TableCell align="center">AC 85V-265V, 50/ 60Hz</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong>RESISTENCIA AL IMPACTO</strong></TableCell>
                                                    <TableCell align="center">EN12368</TableCell>
                                                    <TableCell align="left"><strong>RESISTENCIA AL POLVO Y AGUA</strong></TableCell>
                                                    <TableCell align="center">IP55</TableCell>
                                                </TableRow>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="left"><strong>VISERA</strong></TableCell>
                                                    <TableCell align="center">3 Unidades</TableCell>
                                                    <TableCell align="left"><strong>TEMPERATURA DE TRABAJO</strong></TableCell>
                                                    <TableCell align="center">-40 C a +80C</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </p>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    <p>

                                    </p>
                                </CustomTabPanel>

                            </Box>
                        </div>
                    </Grid>
                </Grid>

            </div>

        </>
    );

}