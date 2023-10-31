import React from "react";
import semaforos from "../assets/semaforos-product.jpg";
import CardProduct from "../components/card-product";
import Grid from '@mui/material/Grid';
import semaforo from "../assets/Semaforo300.png";
import peatonal from "../assets/producto_peatonal.png";
import ht96 from "../assets/controlador_ht.png";
import sem2 from "../assets/sem2.png";
import semaforos_global from "../assets/producto_semaforo.png";
import producto_contador from "../assets/producto_contador.png"
import producto_lunas from "../assets/producto_lunas.png";
import ht200 from "../assets/controlador-16grupos.png"
export default function SemaforosView(){

    return(
        <>
           <img src={semaforos} alt="semaforos"  />
        <div className="radios-content">
        <Grid sx={{padding:"3rem"}} container spacing={5} >
                <Grid item xs={12} md={12}>
                    <h1>Productos de semaforización</h1>
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={semaforos_global} alt="product content" width={270} />}
                        title={"Semaforos Vehiculares"}
                        text={""}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={peatonal} alt="product content" width={270} />}
                        title={"Semaforos peatonales"}
                        text={""}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={producto_contador} alt="product content" width={280} />}
                        title={"Contadores"}
                        text={""}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={producto_lunas} alt="product content" width={280} />}
                        title={"Lunas de Semaforo"}
                        text={""}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={ht96} alt="product content" width={280} />}
                        title={"Controlador 4 grupos"}
                        text={""}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={ht200} alt="product content" width={280} />}
                        title={"Controlador 16 grupos"}
                        text={""}
                    />
                </Grid >
            </Grid>
        </div>
        
        
        </>
    )

}