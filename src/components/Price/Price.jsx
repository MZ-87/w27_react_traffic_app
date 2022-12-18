import React, { useState } from 'react';
import './price.scss'

export default function Price({ item }) {
    const { color, title_color, price, speed, info, name } = item;
    let selected = '';
    const [checked, setChecked] = useState(false);
    const handleClick = () => {
        setChecked(prevState => !prevState);
    };
    selected = checked ? "selected" : "";

    return (
        <div onClick={handleClick} className={`tariff ${color} ${selected}`}>
            <div className={`tariff__name ${title_color}`}>{name}</div>
            <div className="tariff__price">{price}</div>
            <div className="tariff__speed">до {speed} Мбит/сек</div>
            <div className="tariff__info">{info}</div>
        </div>
    )
}



