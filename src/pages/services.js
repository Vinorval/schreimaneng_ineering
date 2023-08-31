import Promotion from "../components/promotion/Promotion";
import InfoItem from "../components/infoItem/infoItem";

import { servicesList } from "../utils/utils";

function Services() {
    return (
        <>
            <Promotion title="УСЛУГИ" text="Объединяем опыт и творчество для создания уникальных решений" />
            <ul>{servicesList.map((item) => {
                return(<InfoItem title={item.name} text={item.text} key={item.id} />)
            })}</ul>
        </>
    )
}

export default Services;