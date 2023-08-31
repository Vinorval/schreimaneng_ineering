import "./infoCompany.css";
import place from "../../images/place.jpg";
import certificate1 from "../../images/certificate_1.png";
import certificate2 from "../../images/certificate_2.png";

function InfoCompany() {
    return (
        <section className='company'>
            <div className='company__block'>
                <h3 className='company__title'>Контакты</h3>
                <div className='company__textBlock'>
                    <p className='company__text'>Офис г. Новосибирск <br/> АДРЕС ХЗ КАКОЙ ПОКА + НОМЕРА ТЕЛЕФОНОВ</p>
                    <img src={place} />
                </div>
            </div>
            <div className='company__block'>
                <h3 className='company__title'>Сертификаты</h3>
                <div className='company__textBlock'>
                    <img src={certificate1} />
                    <img src={certificate2} />
                </div>
            </div>
            <div className='company__block'>
                <h3 className='company__title'>Оплата и доставка</h3>
                <div className='company__textBlock'>
                    <p className='company__text'>Мы осуществляем доставку 3 способами: <br/> 1. Транспортными компаниями <br/> 2. Курьером <br/> 3. Лично в руки по г. Новосибирск</p>
                    <p className="company__text">Стоимость доставки оценивается транспортной компанией или курьером. Стоимость доставки лично в руки 500р.</p>
                </div>
            </div>
        </section>
    )
}

export default InfoCompany;