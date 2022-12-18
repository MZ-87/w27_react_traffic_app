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
      {tariffs.filter(tariff => tariff.price > 400).map((tariff)=>{
        return <Tariff key={tariff.id}  tariff={{...tariff}}/>
        })
      }
      </div>
      
      <p>Интерактивный список</p>
      <div className={style.sec_option}>
    {
        prices.map((item)=>{
        if (item.price > 500)
        return <Price key={item.id} item={{...item}}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
