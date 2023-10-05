import React, { useState } from "react";
import Styles from './HomePage.module.css';
import Promo from '../components/promo/Promo';
import Delivery from '../components/delivery/Delivery';
import Feedback from '../components/feedback/Feedback';
import InfoItem from "../components/infoItem/infoItem";
import { advantagesList } from "../utils/utils";
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";

const HomePage = () => {
    //const [ showForm, setShowForm] = useState(false);

    //const onClickButton = () => setShowForm(true);
    //const onClickClose = () => setShowForm(false);

    return (
        <div className={Styles.home}>
            <Promo />
            <section className={Styles.home__company} >
                <p className={Styles.home__text} >
                    Schreiman Engineering - Российская компания автоматизации. Мы разрабатываем системы управления вентиляцией и индивидуальными тепловыми пунктами, 
                    оказываем услуги по монтажу автоматики и пусконаладочным работам.
                </p>
            </section>
            <InfoItem
                title='Наши преимущества'
                textArr={advantagesList}
            />
            <Delivery />
            <Feedback />
            <ButtonFeedback />
        </div>
    )
}

export default HomePage;