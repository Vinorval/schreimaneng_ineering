import Styles from './Promo.module.css';

const Promo = () => {
    return (
        <section className={Styles.promo}>
            <h2 className={Styles.promo__title}>Автоматизируем объекты любой сложности</h2>
            <span className={Styles.promo__subtitle}>Мы - ваш надежный партнер  в области автоматизации</span>
        </section>
    )
}

export default Promo;