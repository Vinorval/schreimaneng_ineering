import Styles from './Promo.module.css';
import { useLocation } from 'react-router-dom';
import Foto from '../../images/foto-man.png';

const Promo = ({ title }) => {
    const location = useLocation();
    console.log(location.pathname === '/schreimaneng_ineering/company' || location.pathname === '/schreimaneng_ineering/services')

    const returnPromoHomePage = () => {
        return (
            <section className={`${Styles.promo} ${Styles.promo_background_color} ${Styles.promo_width_wide}`}>
                <div className={Styles.promo__textBlock}>
                    <h2 className={`${Styles.promo__title} ${Styles.promo__title_place_home}`}>Автоматизируем объекты любой сложности</h2>
                    <span className={Styles.promo__subtitle}>Мы - ваш надежный партнер  в области автоматизации</span>
                </div>
            </section>
        )
    }

    const returnPromo = () => {
        return (location.pathname == '/schreimaneng_ineering/company' || location.pathname === '/schreimaneng_ineering/services') ? 
            <div className={`${Styles.promo} ${Styles.promo_background_color} ${Styles.promo_width_wide}`}>
                <div className={Styles.promo__block}>
                    <img src={Foto} alt="Фото рабочего" className={Styles.promo__img} />
                    <p className={Styles.promo__text}>Объединяем опыт и творчество для создания уникальных решений</p>
                </div> 
            </div> : 
            <div className={`${Styles.promo} ${Styles.promo_background_img} ${Styles.promo_width_midlle}`}>
                <div className={Styles.promo__block}>
                    <p className={Styles.promo__text}>Объединяем опыт и творчество для создания уникальных решений</p>
                </div> 
            </div>
    }

    return (
            location.pathname == '/schreimaneng_ineering' ? returnPromoHomePage() : 
                <section className={Styles.promo}>
                    <h2 className={Styles.promo__title}>{title}</h2>
                    {returnPromo()}
                </section>
    )
}

export default Promo;