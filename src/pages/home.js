import React, { useState } from "react";
import Styles from './home.module.css';
import Promo from '../components/promo/Promo';
import Delivery from '../components/delivery/Delivery';
import Feedback from '../components/feedback/Feedback';
import Loading from '../components/loading/loading';
import InfoItem from "../components/infoItem/infoItem";
import { advantagesList } from "../utils/utils";
import FormButton from '../images/icons8-форма-50.png';
import Close from '../images/4105962-add-expand-plus_113920.svg';
import Form from "../components/form/form";
import ButtonFeedback from "../components/buttonFeedback/buttonFeesbsck";

function HomePage() {
    //const [ showForm, setShowForm] = useState(false);

    //const onClickButton = () => setShowForm(true);
    //const onClickClose = () => setShowForm(false);

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
            <ButtonFeedback />
        </div>
    )
}

export default HomePage;