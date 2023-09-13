import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Styles from './App.module.css';

import AppHeader from '../appHeader/AppHeader';
import Footer from '../footer/Footer';

import { 
  HomePage, 
  ServicesPage, 
  CompanyPage, 
  NewsPage, 
  CatalogPage, 
  ProductsListPage, 
  ItemPage, 
  BasketPage, 
  NotFoundPage, 
} from '../../pages/index';

const App = () => {
  //const { product } = useSelector( store => ({ product: store.products.product }) );
  const { products } = useSelector( store => ({ products: store.products.products }) );
  //console.log(products)

  return (
    <div className={Styles.app}>
      <AppHeader></AppHeader>
      <Routes>
        <Route path="/schreimaneng_ineering" element={ <HomePage /> }/>
        <Route path="/schreimaneng_ineering/company" element={ <CompanyPage /> } />
        <Route path="/schreimaneng_ineering/services" element={ <ServicesPage /> } />
        <Route path="/schreimaneng_ineering/news" element={ <NewsPage /> } />
        <Route path="/schreimaneng_ineering/basket" element={ <BasketPage /> } />

        <Route path="/schreimaneng_ineering/catalog" element={ <CatalogPage /> } />
        <Route path="/schreimaneng_ineering/catalog/:product" element={ <ProductsListPage /> } />

        <Route path="/schreimaneng_ineering/catalog/:product/:itemId" element={ <ItemPage /> } />
        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
