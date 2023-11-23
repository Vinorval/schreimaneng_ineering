import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { productsObj } from "../../utils/products";
import { getProductSuccess, postOrderSuccess } from "../../services/actions/actions";

import Styles from './productsList.module.css';
import Item from '../../images/товар.jpg';
import IconList from '../../images/Vector_list.svg';
import OrderPopup from "../orderPopup/OrderPopup";
import IconTable from '../../images/Vector_table.svg';

const ProductsList = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [show, setShow] = React.useState(false);
    const [product, setProduct] = React.useState({});
    const [startCard, setSartCard] = React.useState(0);
    const [typeCard, setTypeCard] = React.useState('list');
    const { products } = useSelector( store => ({ products: store.products.products }) );

    const showPopup = (item) => {
        setShow(true);
        setProduct(item)
    };
    const closePopup = () => setShow(false);

    const getProductsArr = () => {
        switch (location.pathname) {
            case '/schreimaneng_ineering/catalog/controlPanel': {
                return products.controlPanel
            }
            default: {
                return [];
            }
        }
    };

    const ProductCards = getProductsArr().slice(0,startCard);

    function showsnumberList() {
        if( window.innerWidth < 768 ) {
          return setSartCard(5)
        } if (window.innerWidth >= 768) {
          return setSartCard(8) }
    };
  
    React.useEffect(() => {
        showsnumberList()
    }, []);

    function handleMore() {
        if( window.innerWidth < 768 ) {
          return setSartCard(startCard + 1)
        } if (window.innerWidth >= 768) {
          return setSartCard(startCard + 8)
        }
    }

    function hideButton() {
        if (getProductsArr().length == ProductCards.length) {
          return true
        } else {
          return false
        }
    }

    const returnProduct = () => {
        return ProductCards.map((item) => {
                return (
                    <li key={item._id} className={`${Styles.item} ${typeCard == 'list' && Styles.item_type_list}`}>
                        <img className={`${Styles.item__image} ${typeCard == 'list' && Styles.item__image_type_list}`} src={Item} />
                        <NavLink className={`${Styles.item__description} ${typeCard == 'list' && Styles.item__description_type_list}`} to={`/schreimaneng_ineering/catalog/controlPanel/${item._id}`}>
                            <h3 className={Styles.item__name} >Щит управления {item.name}</h3>
                            <p className={`${Styles.item__text} ${typeCard == 'list' && Styles.item__text_type_list}`} >{item.description}</p>
                            <p className={[Styles.item__text, Styles.item__text_type_last]} >Арт. {item._id}</p>
                        </NavLink>
                        <div className={`${Styles.item__order} ${typeCard == 'list' && Styles.item__order_type_list}`} >
                            <p className={Styles.item__price} >₽ 56 260</p>
                            <p className={`${Styles.item__text} ${typeCard == 'list' && Styles.item__text_type_list}`} >на заказ</p>
                            <button type='button' className={Styles.item__button} onClick={() => showPopup(item)} >Добавить</button>
                        </div>
                    </li>
                )
            })
    }

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
            <ul className={`${Styles.list} ${typeCard == 'list' && Styles.list_type_list}`}>
                <div className={`${Styles.catalog__buttons} ${typeCard == 'list' && Styles.catalog__buttons_type_list}`}>
                    <button className={Styles.catalog__button}><img src={IconList} onClick={() => setTypeCard('list')} /></button>
                    <button className={Styles.catalog__button} ><img src={IconTable} onClick={() => setTypeCard('table')}/></button>
                </div>
                {returnProduct()}
            </ul>
            {!hideButton() && <button className={Styles.buttonMore} onClick={handleMore} >Показать ещё</button>}
            { show && <OrderPopup show={show} closePopup={closePopup} product={product} />}
        </section>
    )
}

export default ProductsList;