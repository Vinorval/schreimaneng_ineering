import Styles from './OrderPopup.module.css';
import Popup from '../popup/popup';

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { postOrderSuccess } from '../../services/actions/actions';
import { NavLink, useLocation } from "react-router-dom";
import optoins from "../../utils/options";
import Option from "../option/option";

import Item from '../../images/товар.jpg';
import Plus from '../../images/4105962-add-expand-plus_113920.svg';
import Minus from '../../images/4105964-collapse-minus-reduce-remove_113927.svg';

const OrderPopup = ({ show, closePopup, product }) => {
    const dispatch = useDispatch();
    const { products } = useSelector( store => ({ products: store.products.products }) );
    const { selectOptions } = useSelector( store => ({ selectOptions: store.products.product }) );
    const location = useLocation();

    //const findProduct = () => {
        //switch (location.pathname.slice(0, 43)) {
            //case '/schreimaneng_ineering/catalog/controlPanel': {
                //console.log(products.controlPanel)
               // return products.controlPanel.find(item => item._id == location.pathname.slice(-4))
            //}
        //}
    //}

    //const product = findProduct()

    const returnOptions = () => {
        return product.options.map((item, index) => {

            return optoins.map((el) => {
                return el.name == item && (
                    <Option key={el._id} el={el} name={el.name} description={el.description} inPopup={show} />
                )
            })
        })
    }

    const pushOrder = () => {
        dispatch(postOrderSuccess([product, selectOptions]));
        console.log([product, selectOptions]);
        closePopup();
    }

    return (
        <Popup show={show} closePopup={closePopup}>
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
                <button type='button' className={Styles.item__button} onClick={pushOrder} >Добавить</button>
                <div className={Styles.option}>
                    <h3 className={Styles.option__title} >Добавьте опции в комплект:</h3>
                    <ul className={Styles.option__list} >
                        {product && returnOptions()}
                    </ul>
                </div>
        </Popup>
    )
};


export default OrderPopup;