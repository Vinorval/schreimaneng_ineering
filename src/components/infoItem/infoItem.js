import Styles from './infoItem.module.css';

function InfoItem({ title, text, textArr, imgArr }) {

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

    const returnImgArr = () => {
        return imgArr.map((item) => {
            return (
                <div className={Styles.item__wrapper}>
                    <img src={item.src} key={item.id} className={Styles.item__image} />
                </div>
            )
        })
    }

    return (
        <div className={Styles.item}>
            <h3 className={Styles.item__title}>{title}</h3>
            { text && 
                <div className={Styles.item__textBlock}>
                    <p className={Styles.item__text}>{text}</p>
                    <div className={Styles.item__imgBlock}>{ imgArr && returnImgArr() } </div>
                </div> 
            }
            { textArr && 
                <div className={Styles.item__description}>
                    {returnTextArr()}
                </div> 
            }
        </div>
    )
}

export default InfoItem;