import React, { useState } from 'react';
import './price.scss'

export default function Price(props) {
    let selected = '';
    const [checked, setChecked] = useState(false);
    const handleClick = () => {
        setChecked(!checked);
    };
    selected = checked ? "selected" : "";

    return (
        <div div onClick={handleClick} className={`tariff ${props.color} ${selected}`}>
            <div className={`tariff__name ${props.title_color}`}>{props.name}</div>
            <div className="tariff__price">{props.price}</div>
            <div className="tariff__speed">до {props.speed} Мбит/сек</div>
            <div className="tariff__info">{props.info}</div>
        </div>
    )
}



