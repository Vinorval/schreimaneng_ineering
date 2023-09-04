import Styles from './Feedback.module.css';

function Feedback() {
    return (
        <section className={Styles.feedback}>
            <div className={Styles.feedback__textBlock}>
                <h2 className={Styles.feedback__title}>Задайте ваш вопрос специалисту напрямую</h2>
                <p className={Styles.feedback__text}>Заполните форму, мы свяжемся с вами в течении 30 минут, бесплатно проконсультируем и поможем с выбором.</p>
            </div>
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
        </section>
    )
}

export default Feedback;