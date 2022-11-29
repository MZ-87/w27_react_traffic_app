import React from 'react'
import './tariff.scss'

export default function Tariff(props) {
    return (
        <div className={`tariff ${props.color} ${props.isSelected ? "selected" : ""}`}>
            <div className={`tariff__name ${props.title_color}`}>{props.name}</div>
            <div className="tariff__price">{props.price}</div>
            <div className="tariff__speed">до {props.speed} Мбит/сек</div>
            <div className="tariff__info">{props.info}</div>
        </div>
    )
}
