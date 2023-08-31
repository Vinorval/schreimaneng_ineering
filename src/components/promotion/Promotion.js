import "./Promotion.css";

function Promotion({title, text}) {
    return (
        <section className="promotion">
            <h2 className="promotion__title">{title}</h2>
            <p className="promotion__text">{text}</p>
        </section>
    )
}

export default Promotion;