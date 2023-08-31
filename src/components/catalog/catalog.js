import "./catalog.css";
import controlPanel from '../../images/contrlPanel.jpg';
import autoDevice from '../../images/autoDevice.jpg';
import regulator from '../../images/regulator.jpg';

function CatalogItems() {
    return (
        <section className="catalog">
            <h2 className="catalog__title">ПРОДУКЦИЯ</h2>
            <div className="catalog__items">
                <div className="itemPr">
                    <img className="itemPr_image" src={controlPanel} />
                    <p className="itemPr__name">Щиты управления</p>
                </div>
                <div className="itemPr">
                    <img className="itemPr_image" src={autoDevice} />
                    <p className="itemPr__name">Приборы автоматики</p>
                </div>
                <div className="itemPr">
                    <img className="itemPr_image" src={regulator} />
                    <p className="itemPr__name">Регуляторы</p>
                </div>
                <div className="itemPr">
                    {/*<img className="item_image" src={} />*/}
                    <p className="itemPr__name">Смесительные узлы</p>
                </div>
            </div>
        </section>
    )
}

export default CatalogItems;