import React from 'react'
import Tariff from '../Tariff/Tariff'
import Price from '../Price/Price'
import style from'./app.module.scss'
import tariffs from '../data/tariffs.json'
import prices from '../data/prices.json'


function App() {
  return (
      <div className={style.App}>
        <p>Список как на картинке</p>
      <div className={style.first_option}>
      {
        tariffs.map((tariff)=>{
        return <Tariff key={tariff.id}  name={tariff.name} price={tariff.price} speed={tariff.speed} info={tariff.info} color={tariff.color} title_color={tariff.title_color} isSelected={tariff.isSelected}/>
        })
      }
      </div>
      
      <p>Интерактивный список</p>
      <div className={style.sec_option}>
    {
        prices.map((price)=>{
        return <Price key={price.id}  name={price.name} price={price.price} speed={price.speed} info={price.info} color={price.color} title_color={price.title_color}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
