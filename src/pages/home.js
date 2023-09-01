import Promo from '../components/promo/Promo';
import Company from '../components/company/Company';
import Delivery from '../components/delivery/Delivery';
import Feedback from '../components/form/Feedback';
import Loading from '../components/loading/loading';

function HomePage() {
    return (
        <div>
            <Promo />
            <Company />
            <Delivery />
            <Feedback />
        </div>
    )
}

export default HomePage;