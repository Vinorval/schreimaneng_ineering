import { NavLink, useLocation } from "react-router-dom";
import Promotion from "../components/promotion/Promotion";
import InfoItem from "../components/infoItem/infoItem";
import Styles from './ServicesPage.module.css';
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";

import { servicesList } from "../utils/utils";

const ServicesPage = () => {
    const location = useLocation();

    return (
        <section className={Styles.services} >
            <nav className={Styles.services__location}>
                <NavLink className={Styles.services__link} to="/schreimaneng_ineering" >Главная /</NavLink>
                <NavLink className={Styles.services__link} to="/schreimaneng_ineering/services" > Услуги</NavLink>
            </nav>
            <Promotion title="УСЛУГИ" text="Объединяем опыт и творчество для создания уникальных решений" />
            <InfoItem textArr={servicesList} />
            <ButtonFeedback />
        </section>
    )
}

export default ServicesPage;