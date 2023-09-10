import Styles from './NotFoundPage.module.css';
import ButtonFeedback from "../components/buttonFeedback/buttonFeedback";

const NotFoundPage = () => {
    return (
        <div>
            <p className={Styles.section__text}>По вашему запросу ничего не найдено</p>
            <ButtonFeedback />
        </div>
    )
}

export default NotFoundPage;