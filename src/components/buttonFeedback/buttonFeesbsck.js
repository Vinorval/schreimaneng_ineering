import React, { useState } from "react";
import Styles from './buttonFeedback.module.css';

import FormButton from '../../images/icons8-форма-50.png';
import Close from '../../images/4105962-add-expand-plus_113920.svg';

import Form from '../form/form';

const ButtonFeedback = () => {
    const [ showForm, setShowForm] = useState(false);

    const onClickButton = () => setShowForm(true);
    const onClickClose = () => setShowForm(false);

    return (
        <div className={Styles.feedback}>
            <button onClick={onClickButton} className={Styles.feedback__buttonForm}>
                <img className={Styles.feedback__ikonButton} src={FormButton} />
            </button>
            <div className={`${showForm ? Styles.feedback__blockForm : Styles.invisible}`} >
                <button onClick={onClickClose} className={Styles.feedback__closeButton} >
                    <img src={Close} className={Styles.feedback__ikonButton}/>
                </button>
                <Form />
            </div>
        </div>
    )
}

export default ButtonFeedback;