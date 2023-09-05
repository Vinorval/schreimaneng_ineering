import Styles from './Delivery.module.css';
import Map from '../../images/map.jpg';

function Delivery() {
    return (
        <section className={Styles.delivery}>
            <h2 className={Styles.delivery__title}>Работаем по всей России</h2>
            <p className={Styles.delivery__text}>Беремся за проекты от Калининграда до Камчатки </p>
            <img src={Map} className={Styles.delivery__image} />
        </section>
    )
}

export default Delivery;