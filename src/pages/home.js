import React, { useState } from "react";
import Styles from './home.module.css';
import Promo from '../components/promo/Promo';
import Delivery from '../components/delivery/Delivery';
import Feedback from '../components/form/Feedback';
import Loading from '../components/loading/loading';
import InfoItem from "../components/infoItem/infoItem";
import { advantagesList } from "../utils/utils";
import FormButton from '../images/icons8-форма-50.png';
import Close from '../images/4105962-add-expand-plus_113920.svg';

function HomePage() {
    const [ showForm, setShowForm] = useState(false);

    const onClickButton = () => setShowForm(true);
    const onClickClose = () => setShowForm(false);

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
            <button onClick={onClickButton} className={Styles.buttonForm}>
                <img className={Styles.buttonForm__ikon} src={FormButton} />
            </button>
            <div className={`${showForm ? Styles.blockForm : Styles.invisible}`} >
                <button onClick={onClickClose} className={Styles.closeButton} >
                    <img src={Close} className={Styles.closeButton__img}/>
                </button>
                <form className={Styles.form}>
                    <h3 className={Styles.form__title}>Оставьте заявку ниже</h3>
                    <ul className={Styles.form__inputList}>
                        <input className={Styles.form__input} placeholder='Ваше имя'></input>
                        <input className={Styles.form__input} placeholder='Ваш номер телефона'></input>
                        <input className={Styles.form__input} placeholder='Способ связи'></input>
                    </ul>
                    <button className={Styles.form__button}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
                    <p className={Styles.form__subtext}>Нажимая кнопку, вы соглашаетесь <br /> с Политикой конфендициальности</p>
                </form>
            </div>
        </div>
    )
}

export default HomePage;