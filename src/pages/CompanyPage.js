import Styles from './CompanyPage.module.css';
import Location from '../components/location/Location';
import Promo from '../components/promo/Promo';
import Address from '../components/address/Address';
import Certificates from '../components/certificates/Certificates';
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";
import Payment from '../components/payment/Payment';


const CompanyPage = () => {
    const location = [ { link: "/schreimaneng_ineering", text: 'Главная /' }, { link: "/schreimaneng_ineering/company", text: ' Компания' } ];

    return (
        <section className={Styles.company}>
            <Location path={location} />
            <Promo title="Компания" />
            <Address />
            <Certificates />
            <Payment />
            <ButtonFeedback />
        </section>
    )
}

export default CompanyPage;