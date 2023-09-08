
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
        <Route path="/" element={ <HomePage /> }/>
        <Route path="/company" element={ <Company /> } />
        <Route path="/services" element={ <Services /> } />
        <Route path="/news" element={ <News /> } />
        <Route path="/basket" element={ <Basket /> } />

        <Route path="/catalog" element={ <Catalog /> } />
        <Route path="/catalog/:product" element={ <Product /> } />

        <Route path="/catalog/:product/:itemId" element={ <Item /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
