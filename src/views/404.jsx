import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import ImageScarecrow from '../assets/Scarecrow.png'



 

const Main = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 120px;
  margin: 64px 0;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 60px;
  }
`;

const Info = styled.div`
  h2 {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 95px;
    letter-spacing: -0.035em;
    color: #333333; 
    margin: 0 0 36px 0;

    @media (max-width: 768px) {
      font-size: 48px;
      line-height: 71px;
      margin: 0 0 29px 0;
    }
    @media (max-width: 400px) {
      letter-spacing: -0.050em;
    }
  }

  p {
    display: block;
    width: 65%;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.035em;
    color: #4F4F4F;
    margin: 0 0 64px 0;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0 20px 0 0;
      font-size: 18px;
      line-height: 27px;
    }
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
`



export default function NotFound(){
  const navigate = useNavigate();

  return (
    <>
    <Main style={{marginTop:"14rem"}}>
      <div>
        <Image src={ImageScarecrow} alt=""/>
      </div>
      <Info>
        <h2 style={{color:'white'}} >Te Tengo Malas Noticias</h2>
        <p style={{color:'white'}}>La página que estás tratando de buscar, posiblemente no exista o este en mantenimiento.</p>
        <Button onClick={()=>{navigate("/")}} variant="contained">Regresar al Inicio</Button>
      </Info>
    </Main>
    </>
  );
}
 
