import Styles from './option.module.css';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Item from '../../images/товар.jpg';
import { addOptionSuccess, deleteOptionSuccess } from '../../services/actions/actions';

const Option = ({ el, name, description, inPopup }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const { product } = useSelector( store => ({ product: store.products.product }) );
    //console.log(el._id)
    //console.log(product.includes(el._id))

    React.useEffect(() => {
        product.includes(el._id) && setChecked(true)
        console.log(product)
    },[inPopup])

    function chengeCheckbox() {
        setChecked(!checked);
        //console.log(el);
        //checked ? dispatch(addOptionSuccess(el)) : dispatch(deleteOptionSuccess(el));
    }

    React.useEffect(() => {
        checked ? dispatch(addOptionSuccess(el._id)) : dispatch(deleteOptionSuccess(el._id));
        //product.includes(el._id) && setChecked(true)
        //console.log(el);
    }, [checked, dispatch])

    return (
        <label htmlFor="V" className={Styles.option__label} >
            <input className={Styles.option__checkbox} type="checkbox" checked={checked} onChange={chengeCheckbox} id="V" value="V" />
            <div className={Styles.option__item} >
                <img src={Item}  className={Styles.option__image} />
                <div className={Styles.option__text} >
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
                <div className={Styles.option__shop} >
                    <p className={Styles.option__price}> 1 470</p>
                    <p className={Styles.margin_none}>в наличии</p>
                </div>
                <button className={Styles.option__button}>Выбрать</button>
            </div>
        </label>
    )
}

export default Option;