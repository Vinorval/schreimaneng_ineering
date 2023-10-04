import Styles from './navigation.module.css';
import { NavLink } from "react-router-dom";
import Basket from '../../images/basket_icon-icons.com_67985 (1) 1.svg';

const Navigaiton = ({ show }) => {

    return (
        <nav className={show ? Styles.navigate : Styles.burgerNavigation}>
            <NavLink to='/schreimaneng_ineering' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>ГЛАВНАЯ</NavLink>
            <NavLink to='/schreimaneng_ineering/catalog' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>ПРОДУКЦИЯ</NavLink>
            <NavLink to='/schreimaneng_ineering/services' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>УСЛУГИ</NavLink>
            <NavLink to='/schreimaneng_ineering/company' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>КОМПАНИЯ</NavLink>
            <NavLink to='/schreimaneng_ineering/news' className={show ? Styles.navigate__link : Styles.burgerNavigation__link} >НОВОСТИ</NavLink>
            <button className={Styles.navigate__button}>
                <img src={Basket} />
                <NavLink to='/schreimaneng_ineering/basket' className={show ? Styles.navigate__link : Styles.burgerNavigation__link} >КОРЗИНА</NavLink>
            </button>
        </nav>
    )
}

export default Navigaiton;