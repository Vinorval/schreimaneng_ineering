import Promo from "../components/promo/Promo";
import InfoItem from "../components/infoItem/infoItem";
import Location from "../components/location/Location";
import Styles from './ServicesPage.module.css';
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";

import { servicesList } from "../utils/utils";

const ServicesPage = () => {
    const location = [ { link: "/schreimaneng_ineering", text: 'Главная /' }, { link: "/schreimaneng_ineering/services", text: ' Услуги' } ];

    return (
        <section className={Styles.page} >
            <Location path={location} />
            <Promo title="Услуги" />
            <InfoItem textArr={servicesList} />
            <ButtonFeedback />
        </section>
    )
}

export default ServicesPage;