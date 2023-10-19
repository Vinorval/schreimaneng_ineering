import Styles from './Payment.module.css';

const Payment = () => {
    return (
        <div className={Styles.payment}>
            <h3 className={Styles.payment__title} >Оплата и доставка</h3>
            <div className={Styles.payment__textBlock}>
                <p className={Styles.payment__text} >Мы осуществляем доставку 3 способами:</p>
                <ol className={Styles.payment__list} >
                    <li className={Styles.payment__text} >Транспортными компаниями</li>
                    <li className={Styles.payment__text} >Курьером</li>
                    <li className={Styles.payment__text} >Лично в руки по г. Новосибирск</li>
                </ol>
                <p className={Styles.payment__text} >Стоимость доставки оценивается транспортной компанией или курьером.</p>
                <p className={Styles.payment__text} >Стоимость доставки лично в руки 500р.</p>
            </div>
        </div>
    )
};

export default Payment;