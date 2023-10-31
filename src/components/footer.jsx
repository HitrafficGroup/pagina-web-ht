import { Grid } from "@mui/material"
import wsp from "../assets/wsp.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
// import Fab from '@mui/material/Fab';
// import EditIcon from '@mui/icons-material/Edit';
export default function Footer() {

    return (
        <>
            <div className="footer-big">
                <Grid  container spacing={3} >
                    <Grid  textAlign={"center"} item xs={12} md={4}>
                        <h3 style={{color:"white"}}>Información</h3>
                        <div className="list-items">
                            <div className="text-wrapper-5">Acerca De Nosotros</div>
                            <div className="text-wrapper-6">Blog</div>
                            <div className="text-wrapper-6">Contactanos</div>
                        </div>

                    </Grid>
                    <Grid   textAlign={"center"} item xs={12} md={4}>

                    <h3 style={{color:"white"}}>Soporte</h3>
                        <div className="list-items">
                            <div className="text-wrapper-5">Ayuda</div>
                            <div className="text-wrapper-6">Garantias</div>
                            <div className="text-wrapper-6">Condiciones de Servicio</div>
                        </div>

                    </Grid>
                    <Grid   textAlign={"center"} item xs={12} md={4}>

                    <h3 style={{color:"white"}}>Legal</h3>
                        <div className="list-items">
                            <div className="text-wrapper-6">Politicas De Privacidad</div>
                            <div className="text-wrapper-6">Terminos de Servicio</div>
                            <div className="text-wrapper-6">Reclamos</div>
                        </div>

                    </Grid>

                    <Grid  textAlign={"center"} item xs={12}>
                        <img
                            className="divider"
                            alt="Divider"
                            src="https://cdn.animaapp.com/projects/65007d9a904ea957862af503/releases/65007dd76963f7376cdc05aa/img/divider.svg"
                        />
                        <div className="small-footer">
                            <h4 style={{color:"white"}}>© 2023 Hitraffic Group Derechos Reservados</h4> 
                        </div>
                        <IconButton aria-label="delete" color="white" href="https://www.facebook.com/people/Hitraffic-SAS/61551870603727/" target="_blank">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="delete" color="white" href="https://www.instagram.com/hitraffic_sas/" target="_blank">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton aria-label="delete" color="white" href="https://api.whatsapp.com/message/DTWND5XJ6TK4B1?autoload=1&app_absent=0" target="_blank">
                            <WhatsAppIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
            <a href="https://api.whatsapp.com/message/DTWND5XJ6TK4B1?autoload=1&app_absent=0"  target="_blank" >
                   <img src={wsp}  className="wsp-btn" alt=""  />
            </a>
         

        </>)
}