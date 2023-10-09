import Styles from './navigation.module.css';
import { NavLink } from "react-router-dom";
import Basket from '../../images/basket_icon-icons.com_67985 (1) 1.svg';

const Navigaiton = ({ show }) => {

    return (
        <nav className={show ? Styles.navigate : Styles.burgerNavigation}>
            <NavLink to='/schreimaneng_ineering' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>Главная</NavLink>
            <NavLink to='/schreimaneng_ineering/news' className={show ? Styles.navigate__link : Styles.burgerNavigation__link} >Новости</NavLink>
            <NavLink to='/schreimaneng_ineering/catalog' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>Продукция</NavLink>
            <NavLink to='/schreimaneng_ineering/company' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>О компании</NavLink>
            <NavLink to='/schreimaneng_ineering/contacts' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>Контакты</NavLink>
            <NavLink to='/schreimaneng_ineering/services' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>Услуги</NavLink>
            <button className={Styles.navigate__button}>
                <img src={Basket} />
                <NavLink to='/schreimaneng_ineering/basket' className={show ? Styles.navigate__link : Styles.burgerNavigation__link} >КОРЗИНА</NavLink>
            </button>
        </nav>
    )
}

export default Navigaiton;