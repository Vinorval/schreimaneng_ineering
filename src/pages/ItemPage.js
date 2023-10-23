import Product from "../components/product/product";
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";
import Location from '../components/location/Location';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { NavLink, useLocation } from "react-router-dom";

const ItemPage = () => {
    const locationLinks = [ 
        { link: "/schreimaneng_ineering", text: 'Главная /' }, 
        { link: "/schreimaneng_ineering/catalog", text: ' Продукция /' },
    ];
    const { products } = useSelector( store => ({ products: store.products.products }) );
    const location = useLocation();

    const findProduct = () => {
        switch (location.pathname.slice(0, 43)) {
            case '/schreimaneng_ineering/catalog/controlPanel': {
                console.log(products.controlPanel)
                locationLinks.push({ link: "/schreimaneng_ineering/catalog/controlPanel", text: ' Щиты управления /' });
                return products.controlPanel.find(item => item._id == location.pathname.slice(-4))
            }
        }
    };

    const product = findProduct();
    locationLinks.push({ link: `/schreimaneng_ineering/catalog/controlPanel/${product._id}`, text: ` ${product.name}` });

    return (
        <section>
            <Location path={locationLinks} />
            <Product product={product} />
            <ButtonFeedback />
        </section>
    )
}

export default ItemPage;