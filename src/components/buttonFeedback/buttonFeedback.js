import React, { useState } from "react";
import Styles from './buttonFeedback.module.css';

import FormButton from '../../images/document_paper_work_text_file_icon_191646 1.svg';
import Popup from "../popup/popup";
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
            <Popup show={showForm} closePopup={onClickClose} >
                <Form />
            </Popup>
        </div>
    )
}

export default ButtonFeedback;