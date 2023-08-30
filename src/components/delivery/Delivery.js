import "./Delivery.css";
import Map from '../../images/map.svg';

function Delivery() {
    return (
        <section className="delivery">
            <h2 className="delivery__title">Работаем по всей России</h2>
            <p className="delivery__text">Беремся за проекты от Калининграда до Камчатки </p>
            <img src={Map} className="delivery__image" />
        </section>
    )
}

export default Delivery;