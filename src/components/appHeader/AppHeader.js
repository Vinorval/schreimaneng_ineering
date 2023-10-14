import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Styles from './AppHeader.module.css';
import Navigaiton from "../navigation/navigation";
//импорт иконок
import Logo from '../../images/Logo.svg';
import Menu from '../../images/menubuttonofthreelinesoutline_112563.png';
import Close from '../../images/Close_icon.png';
import WhatsApp from '../../images/icon-whatsapp.svg';
import Telegram from '../../images/icon-telegram.svg';

const AppHeader = () => {
    const [ showNavigate, setShowNavigate] = useState(false);
    const [width, setWidth] = useState(window.innerWidth); //стейт, в котором ширина экрана
    const breakpoint = 768; //переменная - контрольная ширина экрана
    let screenLarge = width > breakpoint;

    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth); //записываем ширину экрана в стейт
         window.addEventListener("resize", handleResizeWindow); //слушатель на изменения ширины экрана
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
    }, []);

    const onClickBurger = () => setShowNavigate(true); //открытие навигации на телефоне или планшете
    const onClickClose = () => setShowNavigate(false); //закрытие навигации на телефоне или планшете

    return (
        <header className={Styles.header}>
            <div className={Styles.contacts}>
                <div className={Styles.contacts__socials}>
                    <a><img src={WhatsApp} className={Styles.contacts__social}/></a>
                    <a><img src={Telegram} className={Styles.contacts__social}/></a>
                </div>
                <div className={Styles.contacts__phone}>
                    <p>+7 (913) 775-47-95</p>
                    <p>получить консультацию</p>
                </div>
            </div>
            <div className={Styles.header__line} />
            <nav className={Styles.header__navigaiton}>
                <NavLink to='/schreimaneng_ineering' className={Styles.logo}>
                    <img src={Logo} className={Styles.logo__image} />
                    <div className={Styles.logo__titleBlock}>
                        <p className={Styles.logo__text} >ШРЕЙМАН</p>
                        <p className={`${Styles.logo__text} ${Styles.logo__text_type_last}`} >Автоматизация</p>
                    </div>
                </NavLink>
                { screenLarge ? 
                    <Navigaiton show={screenLarge} /> :
                    <div className={Styles.burgerMenu}>
                    <button onClick={onClickBurger} className={Styles.burgerMenu__button} >
                        <img src={Menu} className={Styles.burgerMenu__ikon} />
                    </button>
                    <div className={`${showNavigate ? Styles.burgerMenu_visible : Styles.burgerMenu_invisible}`}>
                        <button className={`${Styles.burgerMenu__button} ${Styles.burgerMenu__button_type_close}`} onClick={onClickClose}>
                            <img src={Close} className={Styles.burgerMenu__ikonClose}/>
                        </button>
                        <Navigaiton show={screenLarge} />
                    </div>
            </div> }
            </nav>
        </header>
    )
}

export default AppHeader;