import Styles from './Footer.module.css';
import WhatsApp from '../../images/icon-whatsapp.svg';
import Telegram from '../../images/icon-telegram.svg';

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <p className={Styles.footer__text}>с 2032. Все права защищены.<br />Политика конфидициальности</p>
            <div className={Styles.footer__contacts}>
                <p className={Styles.footer__contacts_text}>+7 (913) 775-47-95</p>
                <p className={Styles.footer__contacts_text}>sanekshreider@gmail.com</p>
            </div>
            <p className={Styles.footer__text}>Адрес: г. Новосибирск, <br /> ул. Красный Проспект д.5</p>
            <div className={Styles.social}>
                <a><img src={WhatsApp} className={Styles.social__link} /></a>
                <a><img src={Telegram} className={Styles.social__link} /></a>
            </div>
        </footer>
    )
}

export default Footer;