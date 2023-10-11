import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import React from 'react';
import imagen1 from '../assets/fondo1.jpg';
import imagen2 from '../assets/road2.jpg';

export default function Slider(){

    return(
        <>
           <AwesomeSlider
           play={true}
           cancelOnInteraction={false}
           interval={3000}
           >
            <div>
            <img src={imagen1} className='slide' />
            </div>
            <div>
            <img src={imagen2} className='slide' />
            </div>
         
            </AwesomeSlider>
        </>
    );
}