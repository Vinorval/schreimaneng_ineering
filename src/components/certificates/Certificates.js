import Styles from './Certificates.module.css';
import First from '../../images/certificate_1.png';
import Second from '../../images/certificate_2.png';

const Certificates = () => {
    return (
        <div className={Styles.certificates}>
            <h3 className={Styles.certificates__title} >Сертификаты</h3>
            <ul className={Styles.certificates__list} >
                <li><img src={First} className={Styles.certificates__item} /></li>
                <li><img src={Second} className={Styles.certificates__item} /></li>
            </ul>
        </div>
    )
}

export default Certificates;