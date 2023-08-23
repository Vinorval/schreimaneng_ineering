import './AppHeader.css';
import Logo from '../../images/Logo.svg';
import WhatsApp from '../../images/icon-whatsapp.svg';
import Telegram from '../../images/icon-telegram.svg';

function AppHeader() {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={Logo} className='logo__image' />
                <h2 className='logo__text'>SCHREIMAN <br /> ENGINEERING</h2>
            </div>
            <div className='navigate'>
                <a className='navigate__link'>ГЛАВНАЯ</a>
                <a className='navigate__link'>ПРОДУКЦИЯ</a>
                <a className='navigate__link'>УСЛУГИ</a>
                <a className='navigate__link'>КОМПАНИЯ</a>
            </div>
            <div className='contacts'>
                <a className='contacts__social'><img src={WhatsApp} /></a>
                <a className='contacts__social'><img src={Telegram} /></a>
                <div className='contacts__phone'>
                    <p className='contacts__phone_number'>+7 (913) 775-47-95</p>
                    <span className='contacts__phone_text'>получить консультацию</span>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;