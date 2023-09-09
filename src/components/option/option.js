import Styles from './option.module.css';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Item from '../../images/товар.jpg';
import { addOptionSuccess, deleteOptionSuccess } from '../../services/actions/actions';

const Option = ({ el, name, description }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    function chengeCheckbox() {
        setChecked(!checked);
        //console.log(el);
        //checked ? dispatch(addOptionSuccess(el)) : dispatch(deleteOptionSuccess(el));
    }

    React.useEffect(() => {
        checked ? dispatch(addOptionSuccess(el)) : dispatch(deleteOptionSuccess(el));
        console.log(el);
    }, [checked, dispatch])

    return (
        <label htmlFor="V" className={Styles.option__label} >
            <input type="checkbox" checked={checked} onChange={chengeCheckbox} id="V" value="V" />
            <div className={Styles.option__item} >
                <img src={Item}  className={Styles.option__image} />
                <div className={Styles.option__text} >
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
                <div className={Styles.option__shop} >
                    <p> 1 470</p>
                    <p>в наличии</p>
                </div>
                <button>Выбрать</button>
            </div>
        </label>
    )
}

export default Option;