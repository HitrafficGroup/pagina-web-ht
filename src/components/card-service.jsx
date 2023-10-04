
import HomeBtn from './home-btn';

import PropTypes from "prop-types";
import DirectionsIcon from '@mui/icons-material/Directions';
export default function CardService(props){
    const icondefault = <DirectionsIcon sx={{fontSize: 70, color: "rgba(140, 48, 245, 1)" }} />
    const { text = "Menu Item",title="none",icon=icondefault } = props;

   
    return(
        <>
            <div className="card-service">
                <div className='card-service-icon'>
                    {icon}
                </div>
                <div className='card-service-title'>
                   {title}
                </div>
                <div className='card-service-text'>
                   {text}
                </div>
                <div className='card-service-btn'>MAS INFO</div>
            </div>
        </>
    );

}

CardService.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    path: PropTypes.string,
    icon:PropTypes.any,
};
  
