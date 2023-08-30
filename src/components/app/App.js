
import './App.css';
import AppHeader from '../appHeader/AppHeader';
import Footer from '../footer/Footer';
import Promo from '../promo/Promo';
import Company from '../company/Company';
import Delivery from '../delivery/Delivery';
import Feedback from '../form/Feedback';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Promo></Promo>
      <Company></Company>
      <Delivery></Delivery>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
}

export default App;
