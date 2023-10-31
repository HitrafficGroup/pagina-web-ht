
import CardProduct from "../components/card-product";
import Grid from '@mui/material/Grid';
import semaforo from "../assets/Semaforo300.png";
import peatonal from "../assets/peatonal.png";
import sem1 from "../assets/sem1.png";
import soldador from '../assets/welder.jpg';
import remolque from '../assets/remolque.png';

export default function ProductosMecanicos(){



    return(
        <>
          <img src={soldador} alt="semaforos"  />
        <div className="radios-content">
        <Grid sx={{padding:"3rem"}} container spacing={5} >
                <Grid item xs={12} md={12}>
                    <h1>Productos de Metal Mecanica</h1>
                </Grid>
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={remolque} alt="product content" width={270} />}
                        title={"Remolques"}
                        text={""}
                    />
                </Grid>
                
            </Grid>
        </div>
        
            
        </>
    );
}