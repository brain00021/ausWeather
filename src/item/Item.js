import React, { Component } from 'react';
// import styled from 'styled-components';
import style from './Item.module.css';

let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

class Item extends Component {
    render() {
      const {
        name,
        main,
        dt,
        weather
      } = this.props.data;

      const D = new Date(dt);
      let Year = D.getFullYear(),
      Mouth = months[D.getMonth()],  
      Day = D.getDate(),
      Hour = D.getHours(),
      Mintue = D.getMinutes();  

      //  picture expression
      const PICTURE_EXPRESSION = /\.(png|jpe?g|gif|svg)(\?.*)?$/
      const picReg = new RegExp (PICTURE_EXPRESSION)

      return (
        <div className={style.infoCard}>
            <div className={style.timeIcon}>
                <span>{Day}  {Mouth} {Year}</span>
                <h2>{name}</h2>
                <span>{(Hour < 10)? `0${Hour}`:Hour} : {(Mintue < 10)? `0${Mintue}`:Mintue}</span>
            </div>
            <div className={style.importWrapper}>
              <div className={style.degreeIcon}>
                <h4>{main.temp.toFixed(0)}°</h4>
              </div>
              {
                weather.map((data,idx) => (
                  <div key={idx} className={style.weatherIcon}>
                    <span>{data['main']}</span>
                    <img src={(!picReg.test(data['icon'])) ? `http://openweathermap.org/img/wn/${data['icon']}@2x.png`:data['icon']} alt={data['icon']}/> 
                    <span className={style.weatherDescription}>{data['description']}</span>
                  </div>
                ))
              }
            </div>
        </div>
      );
    }
  }
  
  export default Item;