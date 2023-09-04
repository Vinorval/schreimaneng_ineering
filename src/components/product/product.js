import Styles from './product.module.css';
import Item from '../../images/товар.jpg';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { NavLink, useLocation } from "react-router-dom";

const Product = () => {
    const { products } = useSelector( store => ({ products: store.products }) );
    const location = useLocation();
    console.log(products)
    console.log(location.pathname)

    //const product = products = [] ? products.find(item => `/catalog/controlPanel/${item._id}` == location.pathname) : '';

    //console.log(product);

    return (
        <section className={Styles.product} >
            <h2 className={Styles.product__title}>Щит управления ABU-PVZ-E-1-Z-1,7-15</h2>
            <div className={Styles.description} >
                <img className={Styles.description__image} src={Item} />
                <div className={Styles.description__textBlock} >
                    <p className={Styles.description__text} >Арт. 00-00057143</p>
                    <p className={Styles.description__text} >Серия: Щиты для воздушных завес, PVZ <br />Назначение: управление тепловой завесой электрическим калорифером<br />Материал корпуса: пластик<br />Перечень КИПиА: контроллер<br />Тип контроллера / терморегулятора: Zentec M100< br />Предельная номинальная мощность электродвигателя: 1.7 кВт</p>
                </div>
                <div className={Styles.description__order} >
                    <p className={Styles.description__price} >56 888 р.</p>
                    <button type='button' className={Styles.description__button} >Добавить</button>
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
                            <p className={Styles.detail__valueText} >Щиты управления</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Серия</p>
                            <p className={Styles.detail__valueText} >Щиты для воздушных завес, PVZ</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Гарантия</p>
                            <p className={Styles.detail__valueText} >18 мес.</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Масса</p>
                            <p className={Styles.detail__valueText} >8.2 кг</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Объем</p>
                            <p className={Styles.detail__valueText} >0.029 м³</p>
                        </li>
                        <li className={Styles.detail__item} >
                            <p className={Styles.detail__nameText} >Производитель</p>
                            <p className={Styles.detail__valueText} >НЕВАТОМ</p>
                        </li>
                        <li className={Styles.detail__item}>
                            <p className={Styles.detail__nameText} >Страна производства</p>
                            <p className={Styles.detail__valueText} >Россия</p>
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
                    <label htmlFor="V" className={Styles.option__label} ><input type="checkbox" id="V" value="V" />
                        <div className={Styles.option__item} >
                            <img src={Item}  className={Styles.option__image} />
                            <div className={Styles.option__text} >
                                <p>Датчик температуры уличный</p>
                                <p>Предназначен для непрерывного измерения наружной температуры воздуха (для автоматической смены режима "зима-лето"). </p>
                                <p>Датчик температуры уличный TD-U-1-IP54-PT1000</p>
                            </div>
                            <div className={Styles.option__shop} >
                                <p> 1 470</p>
                                <p>в наличии</p>
                            </div>
                            <button>Выбрать</button>
                        </div>
                    </label>
                </ul>
            </div>
        </section>
    )
}

export default Product;