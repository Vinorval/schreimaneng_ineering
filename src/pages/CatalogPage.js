import { NavLink } from "react-router-dom";
import CatalogItems from "../components/catalog/catalog";
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";
import Styles from "./CatalogPage.module.css";

const CatalogPage = () => {
    return (
        <>
            <nav className={Styles.location}>
                <NavLink className={Styles.location__link} to="/schreimaneng_ineering" >Главная /</NavLink>
                <NavLink className={Styles.location__link} to="/schreimaneng_ineering/catalog" > Каталог</NavLink>
            </nav>
            <CatalogItems />
            <ButtonFeedback />
        </>
    )
}

export default CatalogPage;