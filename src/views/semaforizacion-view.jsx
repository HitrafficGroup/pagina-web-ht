
import semaforos from "../assets/semaforo_portada.jpg";
import Grid from '@mui/material/Grid';

export default function SemaforizacionView(){




    return(
        <>
            <img src={semaforos} alt="semaforizacion david"  height={600} />
            <div className="radios-content">
                <div>
                    <div style={{paddingInline:"7rem"}}>
                        <Grid container spacing={4}>

                            <Grid item xs={6}>
                                <h1 className="titulos-services">
                                   Proceso de Instalacion
                                </h1>
                            </Grid>

                            <Grid item xs={6}>
                                <h1 className="titulos-services">
                                   Nuestra Experiencia
                                </h1>
                            </Grid>

                            <Grid item xs={6}>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti cupiditate atque veniam 
                                    nesciunt quia corrupti, quis voluptatibus excepturi perferendis recusandae, pariatur eius
                                     mollitia delectus maxime necessitatibus, ea qui impedit quod!
                                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, aspernatur? Vitae nulla suscipit dolores facere. Voluptate quidem ut quasi asperiores, similique qui corporis! Sapiente voluptatum quod aliquid explicabo reiciendis cum.
                                </p>
                                <ul>
                                    <li> Lorem ipsum dolor.</li>
                                    <li> Lorem ipsum dolor.</li>
                                    <li> Lorem ipsum dolor.</li>
                                    <li> Lorem ipsum dolor.</li>
                                    <li> Lorem ipsum dolor.</li>
                                    <li> Lorem ipsum dolor.</li>
                                </ul>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad rerum recusandae, esse veniam commodi alias. Deleniti, odit pariatur consequuntur, quas placeat ipsum odio consequatur magnam fugit repellendus nam in.
                            </Grid>
                            <Grid item xs={6}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid incidunt pariatur enim aut voluptates odit voluptas. Sint, natus non quidem nam iure provident voluptate beatae quo nemo sapiente velit.
                                </p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti cupiditate atque veniam 
                                    nesciunt quia corrupti, quis voluptatibus excepturi perferendis recusandae, pariatur eius
                                     mollitia delectus maxime necessitatibus, ea qui impedit quod!
                                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, aspernatur? Vitae nulla suscipit dolores facere. Voluptate quidem ut quasi asperiores, similique qui corporis! Sapiente voluptatum quod aliquid explicabo reiciendis cum.
                                </p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti cupiditate atque veniam 
                                    nesciunt quia corrupti, quis voluptatibus excepturi perferendis recusandae, pariatur eius
                                     mollitia delectus maxime necessitatibus, ea qui impedit quod!
                                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, aspernatur? Vitae nulla suscipit dolores facere. Voluptate quidem ut quasi asperiores, similique qui corporis! Sapiente voluptatum quod aliquid explicabo reiciendis cum.
                                </p>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{height:40}}>

                                </div>
                            </Grid>
                           
                        </Grid>
                    </div>
                </div>
                
            </div>
        </>
    );
}