import { NavLink } from "react-router-dom";

import Styles from './productsList.module.css';
import Item from '../../images/товар.jpg';

const ProductsList = () => {
    return (
        <section className={Styles.catalog}>
            <h2 className={Styles.catalog__title}>ЩИТЫ УПРАВЛЕНИЯ</h2>
            <div className={Styles.version}>
                <h3 className={Styles.version__title}>Автоматика</h3>
                <ul className={Styles.version__list}>
                    <label htmlFor="V"><input type="checkbox" id="V" value="V" className={Styles.version__item} /> Щиты для вентиляторов, V</label>
                    <label htmlFor="SD"><input type="checkbox" id="SD" value="SD" className={Styles.version__item} />Системы диспетчеризации</label>
                </ul>
            </div>
            <ul className={Styles.list}>
                <NavLink to="/catalog/controlPanel/ABU-PVZ-E-1-Z-1,7-15" className={Styles.item}>
                    <img className={Styles.item__image} src={Item} />
                    <div className={Styles.item__description} >
                        <h3 className={Styles.item__name} >Щит управления ABU-PVZ-E-1-Z-1,7-15</h3>
                        <p className={Styles.item__text} >Серия: Щиты для воздушных завес, PVZ; Назначение: управление тепловой завесой электрическим калорифером; Материал корпуса: пластик; Перечень КИПиА: контроллер; Тип контроллера / терморегулятора: Zentec M100; Предельная номинальная мощность электродвигателя: 1.7 кВт.</p>
                        <p className={[Styles.item__text, Styles.item__text_type_last]} >Арт. 00-00057143</p>
                    </div>
                    <div className={Styles.item__oder} >
                        <p className={Styles.item__price} >₽ 56 260</p>
                        <p className={Styles.item__text} >на заказ</p>
                        <button type='button' className={Styles.item__button} ></button>
                    </div>
                </NavLink>
                <NavLink to="/catalog/controlPanel/ABU-PVZ-E-1-Z-1,7-16" className={Styles.item}>
                    <img className={Styles.item__image} src={Item} />
                    <div className={Styles.item__description} >
                        <h3 className={Styles.item__name} >Щит управления ABU-PVZ-E-1-Z-1,7-16</h3>
                        <p className={Styles.item__text} >Серия: Щиты для воздушных завес, PVZ; Назначение: управление тепловой завесой электрическим калорифером; Материал корпуса: пластик; Перечень КИПиА: контроллер; Тип контроллера / терморегулятора: Zentec M100; Предельная номинальная мощность электродвигателя: 1.7 кВт.</p>
                        <p className={[Styles.item__text, Styles.item__text_type_last]} >Арт. 00-00057143</p>
                    </div>
                    <div className={Styles.item__oder} >
                        <p className={Styles.item__price} >₽ 56 260</p>
                        <p className={Styles.item__text} >на заказ</p>
                        <button type='button' className={Styles.item__button} ></button>
                    </div>
                </NavLink>
            </ul>
        </section>
    )
}

export default ProductsList;