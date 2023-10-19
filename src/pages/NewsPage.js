import Promo from "../components/promo/Promo";
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";
import Location from "../components/location/Location";
import Styles from './NewsPage.module.css';
import Image from '../images/foto-man.png';

const NewsPage = () => {
    const location = [ { link: "/schreimaneng_ineering", text: 'Главная /' }, { link: "/schreimaneng_ineering/news", text: ' Новости' } ];

    return (
        <section>
            <Location path={location} />
            <Promo title="Новости" />
            <ul className={Styles.newsList} >
                <li className={Styles.news} >
                    <img src={Image} className={Styles.news__image} />
                    <div className={Styles.news__textBlock} >
                        <h3 className={Styles.news__title} >Название новости</h3>
                        <p className={Styles.news__text} >Некое описание ___________________ ________ ____ _______________ _ __ __________ ______ ______ _______ _______________ _________ _ _ _______ _______ ___________ __________ _______ _________ _ ______ _______ _____</p>
                    </div>
                </li>
                <li className={Styles.news} >
                    <img src={Image} className={Styles.news__image} />
                    <div className={Styles.news__textBlock} >
                        <h3 className={Styles.news__title} >Название новости</h3>
                        <p className={Styles.news__text} >Некое описание ___________________ ________ ____ _______________ _ __ __________ ______ ______ _______ _______________ _________ _ _ _______ _______ ___________ __________ _______ _________ _ ______ _______ _____</p>
                    </div>
                </li>
            </ul>
            <ButtonFeedback />
        </section>
    )
}

export default NewsPage;