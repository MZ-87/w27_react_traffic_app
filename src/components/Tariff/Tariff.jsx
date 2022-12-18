import React from 'react'
import './tariff.scss'

export default function Tariff({ tariff }) {
    const { color, title_color, price, speed, info, isSelected, name } = tariff;
    return (
        <div className={`tariff ${color} ${isSelected ? "selected" : ""}`}>
            <div className={`tariff__name ${title_color}`}>{name}</div>
            <div className="tariff__price">{price}</div>
            <div className="tariff__speed">до {speed} Мбит/сек</div>
            <div className="tariff__info">{info}</div>
        </div>
    )
}
