
import './App.css';
import AppHeader from '../appHeader/AppHeader';
import Footer from '../footer/Footer';
import Promo from '../promo/Promo';
import Company from '../company/Company';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Promo></Promo>
      <Company></Company>
      <Footer></Footer>
    </div>
  );
}

export default App;
