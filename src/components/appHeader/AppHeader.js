import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Styles from './AppHeader.module.css';
import Navigaiton from "../navigation/navigation";

import Logo from '../../images/Logo.svg';
import Menu from '../../images/menubuttonofthreelinesoutline_112563.png';
import Close from '../../images/cancel_close_remove_delete_icon_178071.png';
import WhatsApp from '../../images/icon-whatsapp.svg';
import Telegram from '../../images/icon-telegram.svg';

const AppHeader = () => {
    const [ showNavigate, setShowNavigate] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 840;

    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
    }, []);

    const onClickBurger = () => setShowNavigate(true);
    const onClickClose = () => setShowNavigate(false);

    return (
        <header className={Styles.header}>
            <div className={Styles.burgerMenu}>
                <button onClick={onClickBurger} className={Styles.burgerMenu__button} ><img src={Menu} className={Styles.burgerMenu__ikon} /></button>
                <div className={`${showNavigate ? Styles.burgerMenu_visible : Styles.burgerMenu_invisible}`}>
                    <Navigaiton show={width > breakpoint} />
                    <button className={Styles.burgerMenu__buttonClose} onClick={onClickClose}>
                        <img src={Close} className={Styles.burgerMenu__ikonClose}/>
                    </button>
                </div>
            </div>
            <NavLink to='/schreimaneng_ineering' className={Styles.logo}>
                <img src={Logo} className={Styles.logo__image} />
                <h2 className={Styles.logo__text}>SCHREIMAN <br /> ENGINEERING</h2>
            </NavLink>
            { width > breakpoint && <Navigaiton show={width > breakpoint} /> }
            <div className={Styles.contacts}>
                <a><img src={WhatsApp} className={Styles.contacts__social}/></a>
                <a><img src={Telegram} className={Styles.contacts__social}/></a>
                <div className={Styles.contacts__phone}>
                    <p className={Styles.contacts__phone_number}>+7 (913) 775-47-95</p>
                    <span className={Styles.contacts__phone_text}>получить консультацию</span>
                </div>
            </div>
            <NavLink to='/schreimaneng_ineering/basket' className={Styles.basket} >КОРЗИНА</NavLink>
        </header>
    )
}

export default AppHeader;