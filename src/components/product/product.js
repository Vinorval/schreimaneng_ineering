import React, { useState } from "react";
import Styles from './product.module.css';
import Item from '../../images/товар.jpg';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { NavLink, useLocation } from "react-router-dom";
import { addProductSuccess, addOptionSuccess } from '../../services/actions/actions';
import optoins from "../../utils/options";
import Option from "../option/option";
import OrderPopup from "../orderPopup/OrderPopup";

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const [show, setShow] = React.useState(false);

    const showPopup = () => {
        setShow(true);
    }

    const closePopup = () => {
        
        setShow(false)
    }

    //React.useEffect(() => {
    //    dispatch(addProductSuccess(product));
    //}, [dispatch]);

    const returnOptions = () => {
        return product.options.map((item, index) => {

            return optoins.map((el) => {
                return el.name == item && (
                    <Option key={el._id} el={el} name={el.name} description={el.description} inPopup={show} />
                )
            })
        })
    }

    return (
        <section className={Styles.product} >
            <h2 className={Styles.product__title}>Щит управления {product.name}</h2>
            <div className={Styles.description} >
                <img className={Styles.description__image} src={Item} />
                <div className={Styles.description__textBlock} >
                    <p className={Styles.description__text} >{product._id}</p>
                    <p className={Styles.description__text} >{product.description}</p>
                </div>
                <div className={Styles.description__order} >
                    <p className={Styles.description__price} >56 888 р.</p>
                    <button type='button' className={Styles.description__button} onClick={showPopup} >Добавить</button>
                </div>
            </div>
            <ul className={Styles.detail} >
                <div className={Styles.detail__block} >
                    <h2 className={Styles.detail__title} >Характеристики</h2>
                    <ul className={Styles.detail__list} >
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Группа товаров</p>
                            <p className={Styles.detail__valueText} >Автоматика</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Категория</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.category}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Серия</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.series}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Гарантия</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.warranty} мес.</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Масса</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.weight}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Объем</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.volume}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Производитель</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.fabricator}</p>
                        </li>
                        <li className={Styles.detail__item}>
                            <p className={Styles.detail__nameText} >Страна производства</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.country}</p>
                        </li>
                    </ul>
                </div>
                {/*<div className={Styles.detail__block} >
                    <h2 className={Styles.detail__title} ></h2>
                    <ul className={Styles.detail__list} >
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} ></p>
                            <p className={Styles.detail__valueText} ></p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} ></p>
                            <p className={Styles.detail__valueText} ></p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} ></p>
                            <p className={Styles.detail__valueText} ></p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} ></p>
                            <p className={Styles.detail__valueText} ></p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} ></p>
                            <p className={Styles.detail__valueText} ></p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} ></p>
                            <p className={Styles.detail__valueText} ></p>
                        </li>
                    </ul>
                </div>
                <div className={Styles.detail__block} >
                    <h2 className={Styles.detail__title} ></h2>
                    <ul className={Styles.detail__list} >
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} ></p>
                            <p className={Styles.detail__valueText} ></p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} ></p>
                            <p className={Styles.detail__valueText} ></p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} ></p>
                            <p className={Styles.detail__valueText} ></p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} ></p>
                            <p className={Styles.detail__valueText} ></p>
                        </li>
                    </ul>
                </div>
                <div className={Styles.detail__block} >
                    <h2 className={Styles.detail__title} ></h2>
                    <ul className={Styles.detail__list} >
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} ></p>
                            <p className={Styles.detail__valueText} ></p>
                        </li>
                    </ul>
                </div>*/}
            </ul>
            <div className={Styles.option} >
                <h3 className={Styles.option__title} >Опции</h3>
                <ul className={Styles.option__list} >
                    {product && returnOptions()}
                </ul>
            </div>
            <OrderPopup show={show} closePopup={closePopup} />
        </section>
    )
}

export default Product;