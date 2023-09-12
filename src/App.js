import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/home-view';
import ProductsView from './views/products-view';
import NotFound from './views/404';
import { Layout } from './layouts/layout';
function App() {
  return (
    <>
      <BrowserRouter>

      
        <Layout>
        <Routes>
                <Route path='/' element={<HomeView />} />
                <Route path='/productos' element={<ProductsView />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
        </Layout>
             
    
        
      </BrowserRouter>
    </>
  );
}

export default App;
