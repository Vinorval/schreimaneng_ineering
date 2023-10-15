import Styles from './Promotion.module.css';
import Foto from '../../images/foto-man.png';

const Promotion = ({title, text}) => {
    return (
        <section className={Styles.promotion}>
            <h2 className={Styles.promotion__title}>{title}</h2>
            <div className={Styles.promotion__block}>
                <img src={Foto} alt="Фото рабочего" className={Styles.promotion__img} />
                <p className={Styles.promotion__text}>{text}</p>
            </div>
        </section>
    )
}

export default Promotion;