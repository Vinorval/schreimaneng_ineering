import Styles from './Feedback.module.css';
import Form from '../form/form';

const Feedback = () => {
    return (
        <section className={Styles.feedback}>
            <div className={Styles.feedback__textBlock}>
                <h2 className={Styles.feedback__title}>Задайте ваш вопрос специалисту напрямую</h2>
                <p className={Styles.feedback__text}>Заполните форму, мы свяжемся с вами в течении 30 минут, бесплатно проконсультируем и поможем с выбором.</p>
            </div>
            <Form />
        </section>
    )
}

export default Feedback;