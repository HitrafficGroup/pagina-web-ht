
import antenas from "../assets/antenas.jpg";
import CardProduct from "../components/card-product";
import Grid from '@mui/material/Grid';
import t320 from "../assets/t320.png";
import s300 from "../assets/S300.png";
import tm9 from "../assets/TM9.png";
import bodycam from "../assets/body-cam.png";
import { useNavigate } from 'react-router-dom';


export default function RadiosView(){
  
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
      };
        

    return(
        <>
        
            <img src={antenas} alt="antenas"  />
            <div className="radios-content">
            <Grid sx={{padding:"3rem"}} container spacing={5} >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={t320} alt="product content" width={280} />}
                        title={"T-320"}
                        text={""}
                        callbackFunction={()=>{handleClick("/productos/radios/t-320")}}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={s300} alt="product content" width={280} />}
                        title={"S-300"}
                        text={""}
                        callbackFunction={()=>{handleClick("/productos/radios/s-300")}}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={tm9} alt="product content" width={280} />}
                        title={"TM7-PLUS"}
                        text={""}
                        callbackFunction={()=>{handleClick("/productos/radios/tm7")}}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={bodycam} alt="product content" width={280} />}
                        title={"BODY CAM"}
                        text={""}
                        callbackFunction={()=>{handleClick("/productos/radios/bodycam")}}
                    />
                </Grid >
            </Grid>
            </div>
        </>
    )

}