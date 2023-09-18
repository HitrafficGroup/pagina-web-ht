
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/home-view';
import ProductsView from './views/products-view';
import NotFound from './views/404';
import { Layout } from './layouts/layout';
import ServiciosView from './views/servicios-view';
import AboutView from './views/about-view';
function App() {
  return (
    <>
      <BrowserRouter >

        <div className='background-container'>
        <Layout>
        <Routes>
                <Route path='/' element={<HomeView />} />
                <Route path='/productos' element={<ProductsView />} />
                <Route path='/servicios' element={<ServiciosView />} />
                <Route path='/acerca_nosotros' element={<AboutView />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
        </Layout>
        </div>
        
             
    
        
      </BrowserRouter>
    </>
  );
}

export default App;
