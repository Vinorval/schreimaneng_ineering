import Styles from './form.module.css';

const Form = () => {
    return (
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
    )
}

export default Form;