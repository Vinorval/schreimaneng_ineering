import './infoItem.css';

function InfoItem({ title, text }) {
    return (
        <div className='item'>
            <h3 className='item__title'>{title}</h3>
            <div className='item__textBlock'>
                <p className='item__text'>{text}</p>
            </div>
        </div>
    )
}

export default InfoItem;