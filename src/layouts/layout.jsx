import { useCallback, useEffect, useState ,useRef} from 'react';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import AppBarV2 from '../components/app-bar-v2';
import 'simplebar-react/dist/simplebar.min.css';
const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});




export const Layout=(props)=>{

  const { children } = props;
  const [openNav, setOpenNav] = useState(true);
  const pathname = useLocation();
  const handlePathnameChange = useCallback(
    () => {
      if (openNav) {
        setOpenNav(false);
      }
    },
    [openNav]
  );

  useEffect(
    () => {
      handlePathnameChange();

    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  );


  return (
    <>

     
      
       <NavBar  /> 
       {/* <AppBarV2/> */}
        <LayoutRoot>
          <LayoutContainer >
            {children}
          </LayoutContainer>
        </LayoutRoot>
        <Footer/>

    
    </>
  );
};