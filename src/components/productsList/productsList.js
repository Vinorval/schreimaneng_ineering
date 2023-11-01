import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { productsObj } from "../../utils/products";
import { getProductSuccess, postOrderSuccess } from "../../services/actions/actions";

import Styles from './productsList.module.css';
import Item from '../../images/товар.jpg';

const ProductsList = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [startCard, setSartCard] = React.useState(0);
    const { products } = useSelector( store => ({ products: store.products.products }) );
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
    console.log(ProductCards);

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
        if (getProductsArr.length === startCard.length) {
          return true
        } else {
          return false
        }
    }

    const returnProduct = () => {
        return ProductCards.map((item) => {
                return (
                    <NavLink key={item._id} to={`/schreimaneng_ineering/catalog/controlPanel/${item._id}`} className={Styles.item}>
                        <img className={Styles.item__image} src={Item} />
                        <div className={Styles.item__description} >
                            <h3 className={Styles.item__name} >Щит управления {item.name}</h3>
                            <p className={Styles.item__text} >{item.description}</p>
                            <p className={[Styles.item__text, Styles.item__text_type_last]} >Арт. {item._id}</p>
                        </div>
                        <div className={Styles.item__oder} >
                            <p className={Styles.item__price} >₽ 56 260</p>
                            <p className={Styles.item__text} >на заказ</p>
                            <button type='button' className={Styles.item__button} >Добавить</button>
                        </div>
                    </NavLink>
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
            <ul className={Styles.list}>
                {returnProduct()}
            </ul>
            <button className={Styles.buttonMore} onClick={handleMore} >Показать ещё</button>
        </section>
    )
}

export default ProductsList;