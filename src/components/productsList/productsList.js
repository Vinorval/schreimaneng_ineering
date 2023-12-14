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
    let title;
    let link;
    const [show, setShow] = React.useState(false);
    const [product, setProduct] = React.useState({});
    const [startCard, setSartCard] = React.useState(0);
    const [typeCard, setTypeCard] = React.useState('list');
    const [checked, setChecked] = useState([]);
    const [filterCheck, setFilterCheck] = useState([]);
    const { products } = useSelector( store => ({ products: store.products.products }) );

    function chengeCheckbox(value) {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if(currentIndex === -1){
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    }

    const showPopup = (item) => {
        setShow(true);
        setProduct(item)
    };
    const closePopup = () => setShow(false);

    const getProductsArr = () => {
        switch (location.pathname) {
            case '/schreimaneng_ineering/catalog/controlPanel': {
                title = 'Щиты управления';
                link = '/schreimaneng_ineering/catalog/controlPanel';
                return products.controlPanel
            }
            case '/schreimaneng_ineering/catalog/autoDevice': {
                title = 'Приборы автоматики';
                link = '/schreimaneng_ineering/catalog/autoDevice';
                return products.autoDevice
            }
            default: {
                return [];
            }
        }
    };

    const ProductCards = getProductsArr().slice(0,startCard);
    const filterCards = () => {
        let productReturn = [];
        for(let i=0; i < checked.length; i++) {
            console.log(checked[i]);
            let product = getProductsArr().filter(item => item.characteristic.series[1] == checked[i]);
            productReturn = productReturn.concat(product);
        }
        return productReturn;
    }

    const details = [...new Set(getProductsArr().map( item => item.characteristic.series[1] ))];

    function showsnumberList() {
        if( window.innerWidth < 768 ) {
          return setSartCard(5)
        } if (window.innerWidth >= 768) {
          return setSartCard(8) }
    };
  
    React.useEffect(() => {
        showsnumberList();
        window.innerWidth < 400 && setTypeCard('table');
        console.log(window.innerWidth);
    }, [window.innerWidth]);

    function handleMore() {
        if( window.innerWidth < 768 ) {
          return setSartCard(startCard + 1)
        } if (window.innerWidth >= 768) {
          return setSartCard(startCard + 8)
        }
    }

    function hideButton() {
        if ((getProductsArr().length == ProductCards.length) || (checked.length != 0)) {
          return true
        } else {
          return false
        }
    }

    const returnProduct = (cards) => {
        return cards.map((item) => {
                return (
                    <li key={item._id} className={`${Styles.item} ${typeCard == 'list' && Styles.item_type_list}`}>
                        <img className={`${Styles.item__image} ${typeCard == 'list' && Styles.item__image_type_list}`} src={Item} />
                        <NavLink className={`${Styles.item__description} ${typeCard == 'list' && Styles.item__description_type_list}`} to={`${link}/${item._id}`}>
                            <h3 className={`${Styles.item__name} ${typeCard == 'list' && Styles.item__name_type_list}`} >{item.name}</h3>
                            <p className={`${Styles.item__text} ${typeCard == 'list' && Styles.item__text_type_list}`} >{item.description}</p>
                            <p className={`${Styles.item__text}, ${Styles.item__text_type_last} ${typeCard == 'list' && `${Styles.item__text_type_list} ${Styles.item__text_position}`}`} >Арт. {item._id}</p>
                        </NavLink>
                        <div className={`${Styles.item__order} ${typeCard == 'list' && Styles.item__order_type_list}`} >
                            <p className={`${Styles.item__price} ${typeCard == 'list' && Styles.item__price_type_list}`} >₽ {item.price}</p>
                            <p className={`${Styles.item__text} ${Styles.item__text_display} ${typeCard == 'list' && Styles.item__text_type_list}`} >на заказ</p>
                            <button type='button' className={`${Styles.item__button} ${typeCard == 'list' && Styles.item__button_type_list}`} onClick={() => showPopup(item)} >Добавить</button>
                        </div>
                    </li>
                )
            })
    }
    //console.log(details);

    return (
        <section className={Styles.catalog}>
            <h2 className={Styles.catalog__title}>{title}</h2>
            <div className={Styles.version}>
                <h3 className={Styles.version__title}>Автоматика</h3>
                <ul className={Styles.version__list}>
                    {details.map( (item, index) => {
                        return (
                            <label htmlFor={index} className={Styles.vertion__label}>
                                <input
                                    key={index} 
                                    type="checkbox" 
                                    id={index} 
                                    value={item} 
                                    className={Styles.version__item}  
                                    onChange={() => chengeCheckbox(item)} />
                                <p className={Styles.version__text}>{item}</p>
                            </label>
                        )
                    } )}
                </ul>
            </div>
            <div className={`${Styles.catalog__market}`}>
                {(window.innerWidth > 400 ) && <div className={`${Styles.catalog__buttons} ${typeCard == 'list' && Styles.catalog__buttons_type_list}`}>
                    <p>Варианты отображения:</p>
                    <button className={Styles.catalog__button}><img className={Styles.catalog__ikon} src={IconList} onClick={() => setTypeCard('list')} /></button>
                    <button className={Styles.catalog__button} ><img className={Styles.catalog__ikon} src={IconTable} onClick={() => setTypeCard('table')}/></button>
                </div>}
                <ul className={`${Styles.list} ${typeCard == 'list' && Styles.list_type_list}`}>
                    {(checked.length == 0) ? returnProduct(ProductCards) : returnProduct(filterCards())}
                </ul>
            </div>
            {!hideButton() && <button className={Styles.buttonMore} onClick={handleMore} >Показать ещё</button>}
            { show && <OrderPopup show={show} closePopup={closePopup} product={product} />}
        </section>
    )
}

export default ProductsList;