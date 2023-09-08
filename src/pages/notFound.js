import Styles from './notFound.module.css';

function NotFound() {
    return (
        <div>
            <p className={Styles.section__text}>По вашему запросу ничего не найдено</p>
        </div>
    )
}

export default NotFound;