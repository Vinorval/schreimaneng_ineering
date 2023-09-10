import Styles from './CompanyPage.module.css';
import Promotion from "../components/promotion/Promotion";
import InfoItem from '../components/infoItem/infoItem';
import { companyInfo } from '../utils/utils';
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";

const CompanyPage = () => {

    const returnInfo = () => {
        return companyInfo.map( (item) => {
            return (
                <InfoItem key={item.id} title={item.title} imgArr={item.images} text={item.text}/>
            )
        })
    }
    return (
        <section className={Styles.company}>
            <Promotion title="КОМПАНИЯ" text="Объединяем опыт и творчество для создания уникальных решений" />
            <ul className={Styles.company__list}>
                {returnInfo()}
            </ul>
            <ButtonFeedback />
        </section>
    )
}

export default CompanyPage;