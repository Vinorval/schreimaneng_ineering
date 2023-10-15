import Promo from "../components/promo/Promo";
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";
import Location from "../components/location/Location";

const NewsPage = () => {
    const location = [ { link: "/schreimaneng_ineering", text: 'Главная /' }, { link: "/schreimaneng_ineering/news", text: ' Новости' } ];

    return (
        <section>
            <Location path={location} />
            <Promo title="Новости" />
            <ButtonFeedback />
        </section>
    )
}

export default NewsPage;