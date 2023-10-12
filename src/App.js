
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/home-view';
import ProductsView from './views/products-view';
import NotFound from './views/404';
import { Layout } from './layouts/layout';
import ServiciosView from './views/servicios-view';
import AboutView from './views/about-view';
import HomeViewV2 from './views/home-view-v2';
import RadiosView from './views/radios-view';
import SemaforosView from './views/semaforos-view';
import Radiot320View from './views/radiot320-view';
import Radio300View from './views/radios300-view';
import BodyCamView from './views/bodycam-view';
import Tm7View from './views/tm7-view';
import SemaforizacionView from './views/semaforizacion-view';
import ProductosMecanicos from './views/productos-mecanicos';
function App() {
  return (
    <>
      <BrowserRouter >

        <div className='background-container'>
        <Layout>
        <Routes>
                <Route path='/' element={<HomeViewV2 />} />
                <Route path='/productos' element={<ProductsView />} />
                <Route path='/servicios' element={<ServiciosView />} />
                <Route path='/acerca_nosotros' element={<AboutView />} />
                <Route path='/productos/radios' element={<RadiosView />} />
                <Route path='/productos/radios/t-320' element={<Radiot320View />} />
                <Route path='/productos/radios/s-300' element={<Radio300View />} />
                <Route path='/productos/radios/tm7' element={<Tm7View />} />
                <Route path='/productos/radios/bodycam' element={<BodyCamView />} />
                <Route path='/productos/semaforos' element={<SemaforosView />} />
                <Route path='/productos/metalica' element={<ProductosMecanicos />} />
                <Route path='/servicios/semaforizacion' element={<SemaforizacionView />} />
                <Route path='*' element={<NotFound />} />
                
              </Routes>
        </Layout>
        </div>
        
             
    
        
      </BrowserRouter>
    </>
  );
}

export default App;
