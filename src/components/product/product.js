import React, { useState } from "react";
import Styles from './product.module.css';
import Item from '../../images/товар.jpg';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import optoins from "../../utils/options";
import Option from "../option/option";
import OrderPopup from "../orderPopup/OrderPopup";
import { PhotosArr } from "../../utils/utils";
import NextButton from '../../images/next.svg';
import Popup from "../popup/popup";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Product = ({ product }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [show, setShow] = React.useState(false);
    const [ showImg, setShowImg] = useState(false);
    const [selectImg, setSelectImg] = React.useState(0);
    const { products } = useSelector( store => ({ products: store.products.products }) );
    console.log(location.pathname);

    const showPopup = () => setShow(true);
    const showPopupImg = () => setShowImg(true);
    const closePopup = () => {
        setShow(false);
        setShowImg(false);
    };

    const nextPhoto = () => (selectImg < (PhotosArr.length - 1)) && setSelectImg(selectImg + 1);
    const prevPhoto = () => (selectImg > 0) && setSelectImg(selectImg - 1);

    //React.useEffect(() => {
    //    dispatch(addProductSuccess(product));
    //}, [dispatch]);

    const returnOptions = () => {
        return product.options.map((item, index) => {

            return products.autoDevice.map((el) => {
                return el.name == item && (
                    <Option key={el._id} el={el} name={el.name} description={el.description} inPopup={show} />
                )
            })
        })
    }

    const returnPhotoProduct = () => {
        return (
            <div className={Styles.description__imagesBlock}>
                <img src={PhotosArr[selectImg]} className={Styles.description__image} onClick={showPopupImg} />
                <ul className={Styles.description__imagesList}>
                    {PhotosArr.map((item, index) => {
                        return (
                            <li key={index}>
                                <img src={item} className={`${Styles.description__imageItem} ${(selectImg == index) && Styles.description__imageItem_checked}`} onClick={() => setSelectImg(index)} />
                            </li>
                        )
                    })}
                </ul>
                <button className={`${Styles.description__switchButton} ${Styles.description__switchButton_route_right}`} onClick={prevPhoto} ><img src={NextButton} /></button>
                <button className={Styles.description__switchButton} ><img src={NextButton} onClick={nextPhoto} /></button>
            </div>
        )
    }

    return (
        <section className={Styles.product} >
            <h2 className={Styles.product__title}>Щит управления {product.name}</h2>
            <nav>
                <NavLink to={`${location.pathname}#detail`}>Общая информация</NavLink>
                <NavLink to={`${location.pathname}`}>Характиристики</NavLink>
                <NavLink to={`${location.pathname}`}>Документы</NavLink>
                <NavLink to={`${location.pathname}`}>Опции</NavLink>
                <NavLink to={`${location.pathname}`}>Дополнительная информация</NavLink>
            </nav>
            <div className={Styles.description} >
                {returnPhotoProduct()}
                <div className={Styles.description__info}>
                    <div className={Styles.description__textBlock} >
                        <p className={Styles.description__text} >Арт. {product._id}</p>
                        <p className={Styles.description__text} >{product.description.replace(/;/g, "\n")}</p>
                    </div>
                    <div className={Styles.description__order} >
                        <p className={Styles.description__price} >{product.price}</p>
                        <button type='button' className={Styles.description__button} onClick={showPopup} >Добавить</button>
                    </div>
                </div>
            </div>
            <ul className={Styles.detail}  >
                <li className={Styles.detail__block} >
                    <h2 className={Styles.detail__title} >Характеристики</h2>
                    <ul className={Styles.detail__list} >
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Группа товаров</p>
                            <p className={Styles.detail__valueText} >Автоматика</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.characteristic.category[0]}</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.category[1]}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.characteristic.series[0]}</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.series[1]}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.characteristic.warranty[0]}</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.warranty[1]}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.characteristic.weight[0]}</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.weight[1]}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.characteristic.volume[0]}</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.volume[1]}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.characteristic.fabricator[0]}</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.fabricator[1]}</p>
                        </li>
                        <li className={Styles.detail__item}>
                            <p className={Styles.detail__nameText} >{product.characteristic.country[0]}</p>
                            <p className={Styles.detail__valueText} >{product.characteristic.country[1]}</p>
                        </li>
                    </ul>
                </li>
                {/*<li className={Styles.detail__block} >
                    <h2 className={Styles.detail__title} >Конструктивные характеристики</h2>
                    <ul className={Styles.detail__list} >
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.designCharacteristics.execution[0]}</p>
                            <p className={Styles.detail__valueText} >{product.designCharacteristics.execution[1]}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.designCharacteristics.managedEquipment[0]}</p>
                            <p className={Styles.detail__valueText} >{product.designCharacteristics.managedEquipment[1]}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.designCharacteristics.housingMaterial[0]}</p>
                            <p className={Styles.detail__valueText} >{product.designCharacteristics.housingMaterial[1]}</p>
                        </li>
                    </ul>
    </li>*
                <li className={Styles.detail__block} >
                    <h2 className={Styles.detail__title} >Характеристики двигателя</h2>
                    <ul className={Styles.detail__list} >
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.engineCharacteristics.phaseAndVoltage[0]}</p>
                            <p className={Styles.detail__valueText} >{product.engineCharacteristics.phaseAndVoltage[1]}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.engineCharacteristics.currentFrequency[0]}</p>
                            <p className={Styles.detail__valueText} >{product.engineCharacteristics.currentFrequency[1]}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.engineCharacteristics.ratedElectricMotor[0]}</p>
                            <p className={Styles.detail__valueText} >{product.engineCharacteristics.ratedElectricMotor[1]}</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.engineCharacteristics.ratedPowerElectricMotor[0]}</p>
                            <p className={Styles.detail__valueText} >{product.engineCharacteristics.ratedPowerElectricMotor[1]}</p>
                        </li>
                    </ul>
    </li>*/}
                <li className={Styles.detail__block} >
                    <h2 className={Styles.detail__title} >Климатические характеристики</h2>
                    <ul className={Styles.detail__list} >
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >{product.climaticCharacteristics.temperature[0]}</p>
                            <p className={Styles.detail__valueText} >{product.climaticCharacteristics.temperature[1]}</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className={Styles.option} id={'detail'} >
                <h3 className={Styles.option__title} >Опции</h3>
                <ul className={Styles.option__list} >
                    {product && returnOptions()}
                </ul>
            </div>
            <OrderPopup show={show} closePopup={closePopup} product={product} />
            <Popup show={showImg} closePopup={closePopup}>
                <img className={Styles.popupImg} src={PhotosArr[selectImg]} />
                <button className={`${Styles.description__switchButton} ${Styles.description__switchButton_route_right}`} onClick={prevPhoto} ><img src={NextButton} /></button>
                <button className={Styles.description__switchButton} ><img src={NextButton} onClick={nextPhoto} /></button>
            </Popup>
        </section>
    )
}

export default Product;