import Promotion from "../components/promotion/Promotion";
import InfoItem from "../components/infoItem/infoItem";
import Styles from './services.module.css';
import ButtonFeedback from "../components/buttonFeedback/buttonFeesbsck";

import { servicesList } from "../utils/utils";

function Services() {
    return (
        <>
            <Promotion title="УСЛУГИ" text="Объединяем опыт и творчество для создания уникальных решений" />
            <ul className={Styles.services__list} >{servicesList.map((item) => {
                return(<InfoItem title={item.name} text={item.text} key={item.id} />)
            })}
            </ul>
            <ButtonFeedback />
        </>
    )
}

export default Services;