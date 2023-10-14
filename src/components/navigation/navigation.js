import Styles from './navigation.module.css';
import { NavLink } from "react-router-dom";
import Basket from '../../images/basket_icon-icons.com_67985 (1) 1.svg';

const Navigaiton = ({ show }) => {

    return (
        <nav className={show ? Styles.navigate : Styles.burgerNavigation}>
            <NavLink to='/schreimaneng_ineering' className={Styles.navigate__link}>Главная</NavLink>
            <NavLink to='/schreimaneng_ineering/news' className={Styles.navigate__link} >Новости</NavLink>
            <NavLink to='/schreimaneng_ineering/catalog' className={Styles.navigate__link}>Продукция</NavLink>
            <NavLink to='/schreimaneng_ineering/company' className={Styles.navigate__link}>О компании</NavLink>
            <NavLink to='/schreimaneng_ineering/contacts' className={Styles.navigate__link}>Контакты</NavLink>
            <NavLink to='/schreimaneng_ineering/services' className={Styles.navigate__link}>Услуги</NavLink>
            <button className={Styles.navigate__button}>
                <img className={Styles.navigate__basket} src={Basket} />
                <NavLink to='/schreimaneng_ineering/basket' className={Styles.navigate__link} >Корзина</NavLink>
            </button>
        </nav>
    )
}

export default Navigaiton;