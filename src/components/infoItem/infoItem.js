import Styles from './infoItem.module.css';

const InfoItem = ({ title, textArr }) => {

    //перебор и отрисовка текстов из массива
    const returnTextArr = () => {
        return textArr.map((item) => {
            return (
                <div className={Styles.item__textBlock} key={item.id}>
                    <p className={Styles.item__text}>{item.text}</p>
                    <p className={Styles.item__subtext}>{item.subtext}</p>
                </div>
            )
        })
    }

    return (
        <div className={Styles.item}>
            <h3 className={Styles.item__title}>{title}</h3>
            <div className={Styles.item__description}>
                {returnTextArr()}
            </div> 
        </div>
    )
}

export default InfoItem;