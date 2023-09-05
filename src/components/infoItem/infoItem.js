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
            console.log(item)
            return (
                <img src={item.src} key={item.id} className={Styles.item__image} />
            )
        })
    }

    return (
        <div className={Styles.item}>
            <h3 className={Styles.item__title}>{title}</h3>
            { text && 
                <div className={Styles.item__textBlock}>
                    <p className={Styles.item__text}>{text}</p>
                    { imgArr && returnImgArr() }
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