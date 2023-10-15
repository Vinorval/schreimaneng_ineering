import Styles from './Location.module.css';
import { NavLink } from "react-router-dom";

const Location = ({ path }) => {
    return (
        <nav className={Styles.location}>
            {path.map((item, index) => {
                return (
                    <NavLink className={Styles.location__link} to={item.link} key={index}>{item.text}</NavLink>
                )
            })}
        </nav>
    )
}

export default Location;