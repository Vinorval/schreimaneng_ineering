import Styles from './BasketPage.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Item from '../images/товар.jpg';
import Plus from '../images/4105962-add-expand-plus_113920.svg';
import Minus from '../images/4105964-collapse-minus-reduce-remove_113927.svg';
import Del from '../images/bin_delete_file_garbage_recycle_remove_trash_icon_123192.svg';
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";

const BasketPage = () => {
    //const { product } = useSelector( store => ({ product: store.products.product }) );
    //console.log(product);

    return (
        <section className={Styles.basket}>
            <h2 className={Styles.basket__title}>Корзина</h2>
            <div className={Styles.basket__info}>
                <p className={Styles.basket__subtitle} >Цены и сроки рассчитаны для отгрузки из филиала Новосибирск.</p>
                <button className={Styles.basket__delButten}><img src={Del} /></button>
            </div>
            <ul className={Styles.basket__list}>
                <NavLink to={`/catalog/controlPanel/item`} className={Styles.item}>
                    <img className={Styles.item__image} src={Item} />
                    <div className={Styles.item__description} >
                        <h3 className={Styles.item__name} >Щит управления ABU-W-1-ZM-0,75</h3>
                        <p className={Styles.item__text} >0001</p>
                    </div>
                    <p className={Styles.item__price} >₽ 56 260</p>
                    <div className={Styles.item__quantity}>
                        <button className={Styles.item__count}><img src={Minus} /></button>
                        <input className={Styles.item__value} defaultValue={1} />
                        <button className={Styles.item__count}><img src={Plus} /></button>
                        <p className={Styles.item__price} >₽ 112 620</p>
                    </div>
                    <div className={Styles.item__data}>
                        <p>Ближайщая готовность:</p>
                        <p>11.09.2023</p>
                    </div>
                    <button className={Styles.basket__delButten}><img src={Del} /></button>
                </NavLink>
                <NavLink to={`/catalog/controlPanel/item`} className={Styles.item}>
                    <img className={Styles.item__image} src={Item} />
                    <div className={Styles.item__description} >
                        <h3 className={Styles.item__name} >Щит управления ABU-W-1-ZM-0,75</h3>
                        <p className={Styles.item__text} >0001</p>
                    </div>
                    <p className={Styles.item__price} >₽ 56 260</p>
                    <div className={Styles.item__quantity}>
                        <button className={Styles.item__count} ><img src={Minus} /></button>
                        <input className={Styles.item__value} defaultValue={1} />
                        <button className={Styles.item__count} ><img src={Plus} /></button>
                        <p className={Styles.item__price} >₽ 112 620</p>
                    </div>
                    <div className={Styles.item__data}>
                        <p>Ближайщая готовность:</p>
                        <p>11.09.2023</p>
                    </div>
                    <button className={Styles.basket__delButten} ><img src={Del} /></button>
                </NavLink>
                <NavLink to={`/catalog/controlPanel/item`} className={Styles.item}>
                    <img className={Styles.item__image} src={Item} />
                    <div className={Styles.item__description} >
                        <h3 className={Styles.item__name} >Щит управления ABU-W-1-ZM-0,75</h3>
                        <p className={Styles.item__text} >0001</p>
                    </div>
                    <p className={Styles.item__price} >₽ 56 260</p>
                    <div className={Styles.item__quantity}>
                        <button className={Styles.item__count} ><img src={Minus} /></button>
                        <input className={Styles.item__value} defaultValue={1} />
                        <button className={Styles.item__count} ><img src={Plus} /></button>
                        <p className={Styles.item__price} >₽ 112 620</p>
                    </div>
                    <div className={Styles.item__data}>
                        <p>Ближайщая готовность:</p>
                        <p>11.09.2023</p>
                    </div>
                    <button className={Styles.basket__delButten} ><img src={Del} /></button>
                </NavLink>
            </ul>
            <div className={Styles.summe}>
                <h3 className={Styles.summe__title}>Ваш заказ:</h3>
                <p className={Styles.summe__price}>⃏ 117 300</p>
                <ul className={Styles.summe__list}>
                    <li className={Styles.characteristic} >
                        <p className={Styles.characteristic__name}>Всего товаров:</p>
                        <p className={Styles.characteristic__text}>3 шт.</p>
                    </li>
                    <li className={Styles.characteristic}>
                        <p className={Styles.characteristic__name}>Вес:</p>
                        <p className={Styles.characteristic__text}>6.42 кг.</p>
                    </li>
                    <li className={Styles.characteristic}>
                        <p className={Styles.characteristic__name}>Объем:</p>
                        <p className={Styles.characteristic__text}>0.03 м³</p>
                    </li>
                    <li className={Styles.characteristic}>
                        <p className={Styles.characteristic__name}>Самовывоз</p>
                    </li>
                    <li className={Styles.characteristic}>
                        <p className={Styles.characteristic__name}>Адрес:</p>
                        <p className={Styles.characteristic__text}>Новосибирск, ул. Выборная, д. 141</p>
                    </li>
                    <li className={Styles.characteristic}>
                        <p className={Styles.characteristic__name}>Дата ближайшей отгрузки:</p>
                        <p className={Styles.characteristic__text}>11.09.2023</p>
                    </li>
                </ul>
                <span className={Styles.summe__subtext} >Цены и сроки рассчитаны на дату и время обновления страницы и являются предварительными.</span>
                <button className={Styles.summe__subButton} >Оформить заказ</button>
            </div>
            <ButtonFeedback />
        </section>
    )
}

export default BasketPage;