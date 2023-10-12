
import semaforos from "../assets/semaforos-product.jpg";
import CardProduct from "../components/card-product";
import Grid from '@mui/material/Grid';
import semaforo from "../assets/Semaforo300.png";
import peatonal from "../assets/peatonal.png";
import sem1 from "../assets/sem1.png";
import sem2 from "../assets/sem2.png";
import soldador from '../assets/welder.jpg';
export default function ProductosMecanicos(){



    return(
        <>
          <img src={soldador} alt="semaforos"  />
        <div className="radios-content">
        <Grid sx={{padding:"3rem"}} container spacing={5} >
                <Grid item xs={12} md={12}>
                    <h1>Productos de Metal Mecanica</h1>
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
                
            </Grid>
        </div>
        
            
        </>
    );
}