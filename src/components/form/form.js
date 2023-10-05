import Styles from './form.module.css';
import Plus from '../../images/Plus_icon.svg';
import Document from '../../images/document_paper_work_text_file_icon_191646 1.png';

const Form = () => {
    return (
        <form className={Styles.form}>
            <h3 className={Styles.form__title}>Оставьте заявку ниже</h3>
            <ul className={Styles.form__inputList}>
                <input className={Styles.form__input} placeholder='Ваше имя'></input>
                <input className={Styles.form__input} placeholder='Номер телефона или E-mail'></input>
                <input className={`${Styles.form__input} ${Styles.form__input_type_massage}`} placeholder='Ваш вопрос или сообщение'></input>
                <li className={Styles.documentsBlock}>
                    <p className={Styles.documentsBlock__title}>Оставьте заявку ниже</p>
                    <div className={Styles.documentsBlock__block}>
                        <button className={Styles.documentsBlock__button}>
                            <img src={Plus} />
                            <p className={Styles.documentsBlock__name}>Добавить файл</p>
                        </button>
                        <ul className={Styles.documentsBlock__list}>
                            <li className={Styles.documentsBlock__document}>
                                <img src={Document} />
                                <p className={Styles.documentsBlock__name}>Название файла</p>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <button className={Styles.form__button}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
            <p className={Styles.form__subtext}>Нажимая кнопку, вы соглашаетесь <br /> с Политикой конфендициальности</p>
        </form>
    )
}

export default Form;