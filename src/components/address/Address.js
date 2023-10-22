import Styles from './Address.module.css';

const Address = () => {
    return (
        <section className={Styles.address}>
            <div className={Styles.address__phone}>
                <h3 className={Styles.address__text}>Офис г. Новосибирск</h3>
                <div className={Styles.phone}>
                    <p className={Styles.address__text}>+7 (913) 775-47-95</p>
                    <span className={Styles.phone__text}>получить консультацию</span>
                </div>
            </div>
            <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A2eb2224349d7ed51788c30518c967a164a918ada4c553de1c0e90e95467d283a&amp;source=constructor" 
                width="700" 
                height="346" 
                frameBorder="0"
                className={Styles.address__map}
            />
        </section>
    )
};

export default Address;