import Styles from './BasketPage.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Item from '../images/товар.jpg';
import Plus from '../images/4105962-add-expand-plus_113920.svg';
import Minus from '../images/4105964-collapse-minus-reduce-remove_113927.svg';
import Del from '../images/bin_delete_file_garbage_recycle_remove_trash_icon_123192.svg';
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";
import { postOrderFailed } from '../services/actions/actions';

const BasketPage = () => {
    const dispatch = useDispatch();
    const { order } = useSelector( store => ({ order: store.order.order }) );
    //console.log(order);

    const clickButton = () => {
        dispatch(postOrderFailed());
    }

    const returnProduct = () => {
        return order.map((item) => {
            return (
                <NavLink to={`/schreimaneng_ineering/catalog/controlPanel/${item[0]._id}`} className={Styles.item}>
                    <img className={Styles.item__image} src={Item} />
                    <div className={Styles.item__description} >
                        <h3 className={Styles.item__name} >Щит управления {item[0].name}</h3>
                        <p className={Styles.item__text} >{item[0]._id}</p>
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
            )
        })
    }

    const deleteOrder = () => {}

    return (
        <section className={Styles.basket}>
            <h2 className={Styles.basket__title}>Корзина</h2>
            <div className={Styles.basket__info}>
                <p className={Styles.basket__subtitle} >Цены и сроки рассчитаны для отгрузки из филиала Новосибирск.</p>
                <button className={Styles.basket__delButten}><img src={Del} onClick={clickButton} /></button>
            </div>
            <ul className={Styles.basket__list}>
                {returnProduct()}
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