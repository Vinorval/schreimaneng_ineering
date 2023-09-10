import Styles from './notFound.module.css';
import ButtonFeedback from "../components/buttonFeedback/buttonFeesbsck";

function NotFound() {
    return (
        <div>
            <p className={Styles.section__text}>По вашему запросу ничего не найдено</p>
            <ButtonFeedback />
        </div>
    )
}

export default NotFound;