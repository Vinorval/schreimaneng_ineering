import Styles from './popup.module.css';

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { NavLink, useLocation } from "react-router-dom";
import optoins from "../../utils/options";
import Option from "../option/option";

import Item from '../../images/товар.jpg';
import Plus from '../../images/4105962-add-expand-plus_113920.svg';
import Minus from '../../images/4105964-collapse-minus-reduce-remove_113927.svg';

const Popup = () => {
    const { products } = useSelector( store => ({ products: store.products.products }) );
    const location = useLocation();

    const product = products != [] ? products.find(item => item._id == location.pathname.slice(-4)) : '';

    const returnOptions = () => {
        return product.options.map((item, index) => {

            return optoins.map((el) => {
                return el.name == item && (
                    <Option key={el._id} el={el} name={el.name} description={el.description} />
                )
            })
        })
    }

    return (
        <section className={Styles.popup} >
            <div className={Styles.popup__wrap}>
                <button className={Styles.popup__buttonClose} >
                    <img src={Plus} className={Styles.popup__ikonClose} />
                </button>
                <NavLink to={`/schreimaneng_ineering/catalog/controlPanel/item`} className={Styles.item}>
                    <img className={Styles.item__image} src={Item} />
                    <div className={Styles.item__description} >
                        <h3 className={Styles.item__name} >Щит управления {product.name}</h3>
                        <p className={Styles.item__text} >{product._id}</p>
                    </div>
                    <p className={Styles.item__price} >₽ 56 260</p>
                    <div className={Styles.item__quantity}>
                        <button className={Styles.item__count}><img src={Minus} /></button>
                        <input className={Styles.item__value} defaultValue={2} />
                        <button className={Styles.item__count}><img src={Plus} /></button>
                        <p className={Styles.item__price} >₽ 112 620</p>
                    </div>
                </NavLink>
                <div className={Styles.option}>
                    <h3 className={Styles.option__title} >Добавьте опции в комплект:</h3>
                    <ul className={Styles.option__list} >
                        {product && returnOptions()}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Popup;