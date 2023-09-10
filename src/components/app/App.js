
import Styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
import Footer from '../footer/Footer';

import HomePage from '../../pages/home';
import Company from '../../pages/company';
import Services from '../../pages/services';
import News from '../../pages/news';
import Basket from '../../pages/basket';

import Catalog from '../../pages/catalog';
import Product from '../../pages/product';

import Item from '../../pages/item';
import NotFound from '../../pages/notFound';

function App() {
  return (
    <div className={Styles.app}>
      <AppHeader></AppHeader>
      <Routes>
        <Route path="/schreimaneng_ineering" element={ <HomePage /> }/>
        <Route path="/schreimaneng_ineering/company" element={ <Company /> } />
        <Route path="/schreimaneng_ineering/services" element={ <Services /> } />
        <Route path="/schreimaneng_ineering/news" element={ <News /> } />
        <Route path="/schreimaneng_ineering/basket" element={ <Basket /> } />

        <Route path="/schreimaneng_ineering/catalog" element={ <Catalog /> } />
        <Route path="/schreimaneng_ineering/catalog/:product" element={ <Product /> } />

        <Route path="/schreimaneng_ineering/catalog/:product/:itemId" element={ <Item /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
