import Styles from './Company.module.css';

function Company() {
    return (
        <section className={Styles.company}>
            <div className={Styles.company__block}>
                <h3 className={Styles.company__title}>Компания</h3>
                <div className={Styles.company__textBlock}>
                    <p className={Styles.company__text}>Schreiman Engineering - Российская компания автоматизации. Мы разрабатываем системы управления вентиляцией и индивидуальными тепловыми пунктами, оказываем услуги по монтажу автоматики и пусконаладочным работам.
                    </p>
                </div>
            </div>
            <div className={Styles.company__block}>
                <h3 className={Styles.company__title}>Наши преимущества</h3>
                <div className={Styles.company__description}>
                    <div className={Styles.company__textBlock}>
                        <p className={Styles.company__text}>Собственное производство</p>
                        <p className={Styles.company__subtext}>Производим качественные щиты управления</p>
                    </div>
                    <div className={Styles.company__textBlock}>
                        <p className={Styles.company__text}>Подбор решения в день запроса</p>
                        <p className={Styles.company__subtext}>Средний срок производства от принятия заказа до получения щита  клиентом 4 дня</p>
                    </div>
                    <div className={Styles.company__textBlock}>
                        <p className={Styles.company__text}>Широкая линейка решений</p>
                        <p className={Styles.company__subtext}>Разные решения на разный бюджет</p>
                    </div>
                    <div className={Styles.company__textBlock}>
                        <p className={Styles.company__text}>Автоматика под ключ</p>
                        <p className={Styles.company__subtext}>Реализация проектов без лишних забот</p>
                    </div>
                    <div className={Styles.company__textBlock}>
                        <p className={Styles.company__text}>Соответствуем стандартам </p>
                        <p className={Styles.company__subtext}>Работаем и производим согласно требованиям ГОСТ, СниП, ПУЭ</p>
                    </div>
                    <div className={Styles.company__textBlock}>
                        <p className={Styles.company__text}>Цены ниже, чем в среднем по рынку</p>
                        <p className={Styles.company__subtext}>Мы снизили издержки, оптимизировали бизнес-процессы, ушли от ненужных подрядчиков и выстроили 
                            эффективную логистику</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Company;