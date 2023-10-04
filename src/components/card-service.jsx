
import HomeBtn from './home-btn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


export default function CardService(){

    return(
        <>
            <div className="card-service">
                <div className='card-service-icon'>
                    <SupportAgentIcon sx={{ fontSize: 70 }}/>
                </div>
                <div className='card-service-title'>
                    INGENIERIA DE TRAFICO
                </div>
                <div className='card-service-text'>
                    Lorem ipsum dolor sit amet consectetur ea omnis suscipit? Reiciendis eveniet  enim provident quos fugiat voluptatum! Consectetur.
                </div>
                <div className='card-service-btn'>MAS INFO</div>
            </div>
        </>
    );

}