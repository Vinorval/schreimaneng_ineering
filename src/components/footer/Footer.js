import Styles from './Footer.module.css';
import WhatsApp from '../../images/icon-whatsapp.svg';
import Telegram from '../../images/icon-telegram.svg';

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footer__wrapper}>
                <p className={`${Styles.footer__text} ${Styles.footer__text_place_last}`}>с 2032. Все права защищены. Политика конфидициальности</p>
                <div className={Styles.footer__contacts}>
                    <p className={Styles.footer__contacts_text}>+7 (913) 775-47-95<br/>получить консультацию</p>
                    <p className={Styles.footer__contacts_text}>sanekshreider@gmail.com</p>
                </div>
                <p className={`${Styles.footer__text} ${Styles.footer__text_place_before}`}>Адрес: г. Новосибирск, ул. Красный Проспект д.5</p>
                <div className={Styles.social}>
                    <a href='https://wa.me/79137754795?text=' ><img src={WhatsApp} className={Styles.social__link} /></a>
                    <a href="https://t.me/Germech"><img src={Telegram} className={Styles.social__link} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;