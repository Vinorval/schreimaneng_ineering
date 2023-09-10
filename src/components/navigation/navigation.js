import Styles from './navigation.module.css';
import { NavLink } from "react-router-dom";

const Navigaiton = ({ show }) => {

    return (
        <nav className={show ? Styles.navigate : Styles.burgerNavigation}>
            <NavLink to='/schreimaneng_ineering' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>ГЛАВНАЯ</NavLink>
            <NavLink to='/schreimaneng_ineering/catalog' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>ПРОДУКЦИЯ</NavLink>
            <NavLink to='/schreimaneng_ineering/services' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>УСЛУГИ</NavLink>
            <NavLink to='/schreimaneng_ineering/company' className={show ? Styles.navigate__link : Styles.burgerNavigation__link}>КОМПАНИЯ</NavLink>
            <NavLink to='/schreimaneng_ineering/news' className={show ? Styles.navigate__link : Styles.burgerNavigation__link} >НОВОСТИ</NavLink>
        </nav>
    )
}

export default Navigaiton;