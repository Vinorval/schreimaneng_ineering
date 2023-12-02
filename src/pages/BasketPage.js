import Styles from './BasketPage.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Item from '../images/товар.jpg';
import Plus from '../images/4105962-add-expand-plus_113920.svg';
import Minus from '../images/4105964-collapse-minus-reduce-remove_113927.svg';
import Del from '../images/bin_delete_file_garbage_recycle_remove_trash_icon_123192.svg';
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";
import { postOrderFailed } from '../services/actions/actions';
import Location from '../components/location/Location';

const BasketPage = () => {
    const locationLinks = [ 
        { link: "/schreimaneng_ineering", text: 'Главная /' }, 
        { link: "/schreimaneng_ineering/basket", text: ' Корзина' },
    ];
    const dispatch = useDispatch();
    const { order } = useSelector( store => ({ order: store.order.order }) );
    //console.log(order);

    const clickButton = () => {
        dispatch(postOrderFailed());
    }

    const returnProduct = () => {
        return order.map((item) => {
            return (
                <li className={Styles.item}>
                    <NavLink to={`/schreimaneng_ineering/catalog/controlPanel/${item[0]._id}`} className={Styles.item__link_hight}>
                        <img className={Styles.item__image} src={Item} />
                    </NavLink>
                    <div className={Styles.item__description} >
                        <NavLink to={`/schreimaneng_ineering/catalog/controlPanel/${item[0]._id}`} className={Styles.item__name} >{item[0].name}</NavLink>
                        <p className={Styles.item__text} >{item[0]._id}</p>
                    </div>
                    <div className={Styles.item__quantity}>
                        <p className={Styles.item__price} >₽ 56 260</p>
                        <div className={Styles.item__form}>
                            <button className={Styles.item__count}><img src={Minus} className={Styles.item__countIkon} /></button>
                            <input className={Styles.item__value} defaultValue={1} />
                            <button className={Styles.item__count}><img src={Plus} className={Styles.item__countIkon} /></button>
                        </div>
                        <p className={Styles.item__price} >₽ 112 620</p>
                    </div>
                    <button className={`${Styles.basket__delButten} ${Styles.basket__delButten_position_item}`}><img src={Del} /></button>
                </li>
            )
        })
    }

    const deleteOrder = () => {}

    return (
        <section>
            <Location path={locationLinks} />
            <h2 className={Styles.basket__title}>Корзина</h2>
            <div className={Styles.basket}>
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
                            <p className={Styles.characteristic__text_margin_none}>Всего товаров:</p>
                            <p className={Styles.characteristic__text_margin_none}>3 шт.</p>
                        </li>
                        <li className={Styles.characteristic}>
                            <p className={Styles.characteristic__text_margin_none}>Вес:</p>
                            <p className={Styles.characteristic__text_margin_none}>6.42 кг.</p>
                        </li>
                        <li className={Styles.characteristic}>
                            <p className={Styles.characteristic__text_margin_none}>Объем:</p>
                            <p className={Styles.characteristic__text_margin_none}>0.03 м³</p>
                        </li>
                        <li className={Styles.characteristic}>
                            <p className={Styles.characteristic__text_margin_none}>Самовывоз</p>
                        </li>
                        <li className={Styles.characteristic}>
                            <p className={Styles.characteristic__text_margin_none}>Адрес:</p>
                            <p className={`${Styles.characteristic__text_margin_none} ${Styles.characteristic__text_adress}`}>Новосибирск, ул. Выборная, д. 141</p>
                        </li>
                        <li className={Styles.characteristic}>
                            <p className={Styles.characteristic__text_margin_none}>Дата ближайшей отгрузки:</p>
                            <p className={Styles.characteristic__text_margin_none}>11.09.2023</p>
                        </li>
                    </ul>
                    <span className={Styles.summe__subtext} >Цены и сроки рассчитаны на дату и время обновления страницы и являются предварительными.</span>
                    <button className={Styles.summe__subButton} >Оформить заказ</button>
            </div>
        </div>
            <ButtonFeedback />
        </section>
    )
}

export default BasketPage;