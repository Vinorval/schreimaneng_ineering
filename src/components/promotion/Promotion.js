import Styles from './Promotion.module.css';

function Promotion({title, text}) {
    return (
        <section className={Styles.promotion}>
            <h2 className={Styles.promotion__title}>{title}</h2>
            <p className={Styles.promotion__text}>{text}</p>
        </section>
    )
}

export default Promotion;