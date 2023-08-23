import './Footer.css';
import WhatsApp from '../../images/icon-whatsapp.svg';
import Telegram from '../../images/icon-telegram.svg';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__text'>с 2032. Все права защищены.<br />Политика конфидициальности</p>
            <div className='footer__contacts'>
                <p className='footer__contacts_text'>+7 (913) 775-47-95</p>
                <p className='footer__contacts_text'>sanekshreider@gmail.com</p>
            </div>
            <p className='footer__text'>Адрес: г. Новосибирск, <br /> ул. Красный Проспект д.5</p>
            <div className='social'>
                <a className='social__link'><img src={WhatsApp} /></a>
                <a className='social__link'><img src={Telegram} /></a>
            </div>
        </footer>
    )
}

export default Footer;