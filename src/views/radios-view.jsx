import antenas from "../assets/antenas.jpg";
import CardProduct from "../components/card-product";
import Grid from '@mui/material/Grid';
import t320 from "../assets/t320.png";
import s300 from "../assets/S300.png";
import tm9 from "../assets/TM9.png";
import tm8 from "../assets/TM7.png";
import bodycam from "../assets/body-cam.png";
export default function RadiosView(){
    const handleClick = () => {
        console.log('Botón en el componente hijo ha sido clicado');
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
                        callbackFunction={handleClick}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={s300} alt="product content" width={280} />}
                        title={"S-300"}
                        text={""}
                        callbackFunction={handleClick}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={tm9} alt="product content" width={280} />}
                        title={"TM7-PLUS"}
                        text={""}
                        callbackFunction={handleClick}
                    />
                </Grid >
                <Grid item xs={12} md={3}>
                    <CardProduct 
                        img={<img src={bodycam} alt="product content" width={280} />}
                        title={"BODY CAM"}
                        text={""}
                        callbackFunction={handleClick}
                    />
                </Grid >
            </Grid>
            </div>
        </>
    )

}