import Styles from './CompanyPage.module.css';
import Location from '../components/location/Location';
import Promo from '../components/promo/Promo';
import InfoItem from '../components/infoItem/infoItem';
import { companyInfo } from '../utils/utils';
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";


const CompanyPage = () => {
    const location = [ { link: "/schreimaneng_ineering", text: 'Главная /' }, { link: "/schreimaneng_ineering/company", text: ' Компания' } ];

    const returnInfo = () => {
        return companyInfo.map( (item) => {
            return (
                <InfoItem key={item.id} title={item.title} imgArr={item.images} text={item.text}/>
            )
        })
    }
    return (
        <section className={Styles.company}>
            <Location path={location} />
            <Promo title="Компания" />
            <ul className={Styles.company__list}>
                {returnInfo()}
            </ul>
            <ButtonFeedback />
        </section>
    )
}

export default CompanyPage;