import Styles from './loading.module.css';
import Logo from '../../images/Logo.svg';

const Loading = () => {
    return (
        <div className={Styles.cover}>
            <img src={Logo} className={Styles.image} />
            <h2 className={Styles.logo__text}>SCHREIMAN <br /> ENGINEERING</h2>
        </div>
    )
}

export default Loading;