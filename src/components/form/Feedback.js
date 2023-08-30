import './Feedback.css';

function Feedback() {
    return (
        <section className='feedback'>
            <div className='feedback__textBlock'>
                <h2 className='feedback__title'>Задайте ваш вопрос специалисту напрямую</h2>
                <p className='feedback__text'>Заполните форму, мы свяжемся с вами в течении 30 минут, бесплатно проконсультируем и поможем с выбором.</p>
            </div>
            <form className='form'>
                <h3 className='form__title'>Оставьте заявку ниже</h3>
                <ul className='form__inputList'>
                    <input className='form__input' placeholder='Ваше имя'></input>
                    <input className='form__input' placeholder='Ваш номер телефона'></input>
                    <input className='form__input' placeholder='Способ связи'></input>
                </ul>
                <button className='form__button'>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
                <p className='form__subtext'>Нажимая кнопку, вы соглашаетесь <br /> с Политикой конфендициальности</p>
            </form>
        </section>
    )
}

export default Feedback;