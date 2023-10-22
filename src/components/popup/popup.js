import Styles from './popup.module.css';
import React from 'react';
import Close from '../../images/Plus_icon.svg';

const Popup = ({ show, closePopup, children }) => {
    //закрытие модала на esc
    React.useEffect(() => {
        const close = (e) => { if(e.key === 'Escape') closePopup()};
        document.addEventListener('keydown', close);

        return () => document.removeEventListener('keydown', close);
    });

    return (
        <section className={ show ? Styles.popup : Styles.invisible} onClick={e => (e.currentTarget === e.target) && closePopup()} >
            <div className={Styles.popup__wrap} >
                <button className={Styles.popup__buttonClose} onClick={closePopup} >
                    <img src={Close} className={Styles.popup__ikonClose} />
                </button>
                {children}
            </div>
        </section>
    )
}

export default Popup;