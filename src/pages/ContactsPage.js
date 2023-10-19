import Promo from "../components/promo/Promo";
import Feedback from "../components/feedback/Feedback";
import Location from "../components/location/Location";
import Styles from './ContactsPage.module.css';
import Address from "../components/address/Address";

const ContactsPage = () => {
    const location = [ { link: "/schreimaneng_ineering", text: 'Главная /' }, { link: "/schreimaneng_ineering/contacts", text: ' Контакты' } ];

    return (
        <section className={Styles.page}>
            <Location path={location} />
            <Promo title="Контакты"/>
            <Address />
            <Feedback />
        </section>
    )
}

export default ContactsPage;