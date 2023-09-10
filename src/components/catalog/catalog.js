import { NavLink } from "react-router-dom";

import Styles from './catalog.module.css';

import controlPanel from '../../images/contrlPanel.jpg';
import autoDevice from '../../images/autoDevice.jpg';
import regulator from '../../images/regulator.jpg';

const CatalogItems = () => {
    return (
        <section className={Styles.catalog}>
            <h2 className={Styles.catalog__title}>ПРОДУКЦИЯ</h2>
            <nav className={Styles.catalog__items}>
                <NavLink to="/schreimaneng_ineering/catalog/controlPanel" className={Styles.itemPr}>
                    <img className={Styles.itemPr__image} src={controlPanel} />
                    <p className={Styles.itemPr__name}>Щиты управления</p>
                </NavLink>
                <NavLink to="/schreimaneng_ineering/catalog/autoDevice" className={Styles.itemPr}>
                    <img className={Styles.itemPr__image} src={autoDevice} />
                    <p className={Styles.itemPr__name}>Приборы автоматики</p>
                </NavLink>
                <NavLink to="/schreimaneng_ineering/catalog/regulator" className={Styles.itemPr}>
                    <img className={Styles.itemPr__image} src={regulator} />
                    <p className={Styles.itemPr__name}>Регуляторы</p>
                </NavLink>
                <NavLink to="/schreimaneng_ineering/catalog/mixUnits" className={Styles.itemPr}>
                    {/*<img className="item_image" src={} />*/}
                    <p className={Styles.itemPr__name}>Смесительные узлы</p>
                </NavLink>
            </nav>
        </section>
    )
}

export default CatalogItems;