import React from 'react'
import { initializeConnect } from 'react-redux/es/components/connect';
import classes from './InfoMovieBar.module.css'
const InfoMovieBar = (props) => {

  const {time, budget, revenue} = props;

  const clacTime = time => `${Math.floor(time /60)}h ${time%60}m`;
  
  const convertMoney = new Intl.NumberFormat('en-US', {
    style:'currency',
    currency:'USD',
    minimumFractionDigits:0
  })

  const convertMoney_2 = (money) => {
  return money.toLocaleString('en-US', {
      style:'currency',
      currency:'USD',
      minimumFractionDigits:0
  }) }
  
  return (
    <div className={classes.movieBar}>
        <section className={classes.time}>
         <p>Runtime:{ clacTime(time)}
  
         </p>
        </section>
        <section className={classes.budget}>
        <p>Budget:{convertMoney.format(budget)}</p>
        </section>
        <section className={classes.revenue}>
        <p>Revenue:{convertMoney.format(revenue)}</p>
        </section>
    </div>
  )
}

export default InfoMovieBar