import Location from "../components/location/Location";
import CatalogItems from "../components/catalog/catalog";
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";

const CatalogPage = () => {
    const location = [ { link: "/schreimaneng_ineering", text: 'Главная /' }, { link: "/schreimaneng_ineering/catalog", text: ' Каталог' } ];

    return (
        <section>
            <Location path={location} />
            <CatalogItems />
            <ButtonFeedback />
        </section>
    )
}

export default CatalogPage;