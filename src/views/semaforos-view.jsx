import React from "react";
import semaforos from "../assets/semaforos-product.jpg";
import CardProduct from "../components/card-product";
import Grid from '@mui/material/Grid';
import s300 from "../assets/S300.png";
import tm9 from "../assets/TM9.png";
import tm8 from "../assets/TM7.png";
import semaforo from "../assets/Semaforo300.png";
import peatonal from "../assets/peatonal.png";
import sem1 from "../assets/sem1.png";
import sem2 from "../assets/sem2.png";
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
                        img={<img src={semaforo} alt="product content" width={130} />}
                        title={"Semaforo 3x300"}
                        text={""}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={peatonal} alt="product content" width={170} />}
                        title={"Semaforo peatonal"}
                        text={""}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={sem1} alt="product content" width={280} />}
                        title={"semaforo 1x300 y 2x200"}
                        text={""}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={sem2} alt="product content" width={280} />}
                        title={"Semaforo flecha"}
                        text={""}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={sem2} alt="product content" width={280} />}
                        title={"Semaforo flecha"}
                        text={""}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={sem2} alt="product content" width={280} />}
                        title={"Semaforo flecha"}
                        text={""}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={sem2} alt="product content" width={280} />}
                        title={"Semaforo flecha"}
                        text={""}
                    />
                </Grid >
            </Grid>
        </div>
        
        
        </>
    )

}