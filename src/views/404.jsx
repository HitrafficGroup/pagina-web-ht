import React from 'react';
import styled from '@emotion/styled';


import ImageScarecrow from '../assets/Scarecrow.png'


const Wrapper = styled.button`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.035em;
  color: white;
  background: #333;
  padding: 24px 43px;
  cursor: pointer;
`

const Button = ({children}) => {
  return ( 
    <Wrapper>
      {children}
    </Wrapper>
  );
}
 

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



const NotFound = () => {
  return (
    <Main>
      <div>
        <Image src={ImageScarecrow} alt=""/>
      </div>
      <Info>
        <h2>Te Tengo Malas Noticias</h2>
        <p>La página que estás tratando de buscar, posiblemente no exista o este en mantenimiento.</p>
        <Button>Regresar al Inicio</Button>
      </Info>
    </Main>
  );
}
 
export default NotFound;