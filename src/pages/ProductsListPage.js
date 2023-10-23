import ProductsList from "../components/productsList/productsList";
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";
import Location from "../components/location/Location";
import { useLocation } from "react-router-dom";

const ProductsListPage = () => {
    const location = useLocation();
    const locationLinks = [ 
        { link: "/schreimaneng_ineering", text: 'Главная /' }, 
        { link: "/schreimaneng_ineering/catalog", text: ' Продукция /' },
    ];

    const findLocation = () => {
        switch (location.pathname) {
            case '/schreimaneng_ineering/catalog/controlPanel': {
                return locationLinks.push({ link: "/schreimaneng_ineering/catalog/controlPanel", text: ' Щиты управления' });
            }
            case '/schreimaneng_ineering/catalog/autoDevice': {
                return locationLinks.push({ link: "/schreimaneng_ineering/catalog/autoDevice", text: ' Приборы автоматики' });
            }
            case '/schreimaneng_ineering/catalog/regulator': {
                return locationLinks.push({ link: "/schreimaneng_ineering/catalog/regulator", text: ' Регуляторы' });
            }
            case '/schreimaneng_ineering/catalog/mixUnits': {
                return locationLinks.push({ link: "/schreimaneng_ineering/catalog/mixUnits", text: ' Сместительные узлы' });
            }
        }
    }

    findLocation();

    return (
        <>
            <Location path={locationLinks} />
            <ProductsList />
            <ButtonFeedback />
        </>
    )
}

export default ProductsListPage;