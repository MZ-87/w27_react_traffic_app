import React from 'react';
import Price from '../Tariff/Tariff';
import style from'./app.module.scss';
import tariffs from '../data/tariffs.json'


function App() {
  return (
    <div className={style.App}>
      {
        tariffs.map((tariff)=>{
        return <Price key={tariff.id}  name={tariff.name} price={tariff.price} speed={tariff.speed} info={tariff.info} color={tariff.color} title_color={tariff.title_color} isSelected={tariff.isSelected}/>
        })
      }
    
    </div>
  );
}

export default App;
