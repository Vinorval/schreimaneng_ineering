import { NavLink } from "react-router-dom";

import Styles from './AppHeader.module.css';

import Logo from '../../images/Logo.svg';
import WhatsApp from '../../images/icon-whatsapp.svg';
import Telegram from '../../images/icon-telegram.svg';

const AppHeader = () => {
    return (
        <header className={Styles.header}>
            <NavLink to='/' className={Styles.logo}>
                <img src={Logo} className={Styles.logo__image} />
                <h2 className={Styles.logo__text}>SCHREIMAN <br /> ENGINEERING</h2>
            </NavLink>
            <nav className={Styles.navigate}>
                <NavLink to='/' className={Styles.navigate__link}>ГЛАВНАЯ</NavLink>
                <NavLink to='/catalog' className={Styles.navigate__link}>ПРОДУКЦИЯ</NavLink>
                <NavLink to='/services' className={Styles.navigate__link}>УСЛУГИ</NavLink>
                <NavLink to='/company' className={Styles.navigate__link}>КОМПАНИЯ</NavLink>
            </nav>
            <div className={Styles.contacts}>
                <a><img src={WhatsApp} className={Styles.contacts__social}/></a>
                <a><img src={Telegram} className={Styles.contacts__social}/></a>
                <div className={Styles.contacts__phone}>
                    <p className={Styles.contacts__phone_number}>+7 (913) 775-47-95</p>
                    <span className={Styles.contacts__phone_text}>получить консультацию</span>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;