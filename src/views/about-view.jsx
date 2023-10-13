import acerca from "../assets/acerca2.jpg";
import Grid from '@mui/material/Grid';
import personal from "../assets/personal_ht.jpeg";
import about from "../assets/about.jpg";
export default function AboutView() {


    return (
        <>
            <img src={acerca} ></img>
            <div className="about-body">
            <Grid sx={{marginTop:"2rem"}} container spacing={2}>
                <Grid item md={7} xs={12}>
                    <div className="about-parrafo">
                        <h1>Nuestro Equipo</h1>
                        <p>
                            Nuestra empresa se enorgullece de contar con un equipo de expertos en ingeniería y tecnología comprometidos en ofrecer soluciones innovadoras que mejoren la calidad de vida de las personas y promuevan el desarrollo sostenible.
                            Con años de experiencia en el sector, hemos completado exitosamente numerosos proyectos en Cuenca y en toda la región, colaborando con una amplia gama de clientes satisfechos, desde empresas privadas hasta entidades gubernamentales.
                            Nuestra misión es liderar la industria, destacando por nuestra ética, calidad y compromiso con la satisfacción del cliente
                        </p>
                    </div>
                </Grid>
                <Grid item md={5} xs={12} >
                    <img src={personal} style={{borderRadius:"8px"}} alt="" />
                </Grid>
                <Grid item md={5} xs={12} >
                <img src={about} style={{borderRadius:"8px"}} width={500} alt="" />
                </Grid>
                <Grid item md={7} xs={12} >
                    <div className="about-parrafo">
                        <h1>Lo Que hacemos</h1>
                        <p>
                        "HiTraffic es una empresa ecuatoriana que surge con el propósito de atender las necesidades y desafíos de los ecuatorianos.
                        Nos especializamos en proporcionar soluciones en áreas como domótica, telecomunicaciones, mecánica y semaforización.
                        En el campo de las telecomunicaciones, actuamos como distribuidores de equipos a nivel nacional y, además, contamos con proyectos de software que nos habilitan para personalizar dichos equipos según las necesidades de nuestros clientes."
                        </p>
                    </div>
                </Grid>
               
            </Grid>

              <div style={{height:"10rem"}}>

              </div>
              

            </div>
        </>
    )
}