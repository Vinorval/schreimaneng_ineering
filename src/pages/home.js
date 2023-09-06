import Styles from './home.module.css';
import Promo from '../components/promo/Promo';
import Delivery from '../components/delivery/Delivery';
import Feedback from '../components/form/Feedback';
import Loading from '../components/loading/loading';
import InfoItem from "../components/infoItem/infoItem";
import { advantagesList } from "../utils/utils";

function HomePage() {
    return (
        <div className={Styles.home}>
            <Promo />
            <ul className={Styles.home__company}>
                <InfoItem 
                    title='Компания' 
                    text='Schreiman Engineering - Российская компания автоматизации. Мы разрабатываем системы управления вентиляцией и индивидуальными тепловыми пунктами, оказываем услуги по монтажу автоматики и пусконаладочным работам.' 
                />
                <InfoItem
                    title='Наши преимущества'
                    textArr={advantagesList}
                />
            </ul>
            <Delivery />
            <Feedback />
        </div>
    )
}

export default HomePage;