import { Grid } from "@mui/material"
import wsp from "../assets/wsp.png";
// import Fab from '@mui/material/Fab';
// import EditIcon from '@mui/icons-material/Edit';
export default function Footer() {

    return (
        <>
            <div className="footer-big">
                <Grid  container spacing={3} >
                    <Grid  textAlign={"center"} item xs={12} md={4}>
                        <h3 style={{color:"white"}}>Company</h3>
                        <div className="list-items">
                            <div className="text-wrapper-5">About Us</div>
                            <div className="text-wrapper-6">Blog</div>
                            <div className="text-wrapper-6">Careers</div>
                            <div className="text-wrapper-6">Contact Us</div>
                        </div>

                    </Grid>
                    <Grid   textAlign={"center"} item xs={12} md={4}>

                    <h3 style={{color:"white"}}>Support</h3>
                        <div className="list-items">
                            <div className="text-wrapper-5">Help Center</div>
                            <div className="text-wrapper-6">Safety Center</div>
                            <div className="text-wrapper-6">Community Guidelines</div>
                        </div>

                    </Grid>
                    <Grid   textAlign={"center"} item xs={12} md={4}>

                    <h3 style={{color:"white"}}>Legal</h3>
                        <div className="list-items">
                            <div className="text-wrapper-5">Cookies Policy</div>
                            <div className="text-wrapper-6">Privacy Policy</div>
                            <div className="text-wrapper-6">Terms of Service</div>
                            <div className="text-wrapper-6">Law Enforcement</div>
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
                    </Grid>
                </Grid>
            </div>
            <a href="https://api.whatsapp.com/message/DTWND5XJ6TK4B1?autoload=1&app_absent=0"  target="_blank" >
                   <img src={wsp}  className="wsp-btn" alt=""  />
            </a>
         

        </>)
}