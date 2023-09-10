import { NavLink } from "react-router-dom";

import "./catalog.css";

import controlPanel from '../../images/contrlPanel.jpg';
import autoDevice from '../../images/autoDevice.jpg';
import regulator from '../../images/regulator.jpg';

function CatalogItems() {
    return (
        <section className="catalog">
            <h2 className="catalog__title">ПРОДУКЦИЯ</h2>
            <nav className="catalog__items">
                <NavLink to="/schreimaneng_ineering/catalog/controlPanel" className="itemPr">
                    <img className="itemPr_image" src={controlPanel} />
                    <p className="itemPr__name">Щиты управления</p>
                </NavLink>
                <NavLink to="/schreimaneng_ineering/catalog/autoDevice" className="itemPr">
                    <img className="itemPr_image" src={autoDevice} />
                    <p className="itemPr__name">Приборы автоматики</p>
                </NavLink>
                <NavLink to="/schreimaneng_ineering/catalog/regulator" className="itemPr">
                    <img className="itemPr_image" src={regulator} />
                    <p className="itemPr__name">Регуляторы</p>
                </NavLink>
                <NavLink to="/schreimaneng_ineering/catalog/mixUnits" className="itemPr">
                    {/*<img className="item_image" src={} />*/}
                    <p className="itemPr__name">Смесительные узлы</p>
                </NavLink>
            </nav>
        </section>
    )
}

export default CatalogItems;