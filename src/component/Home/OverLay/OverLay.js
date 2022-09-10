import React, { useState } from 'react'
import ModalFlow from '../../UI/ModalFlow';
import { VscClose } from "react-icons/vsc";
import classes from './OverLay.module.css'
const OverLay = (props) => {

  const {title, overview:des} = props.movies

  return (
    <ModalFlow >
       <header className={classes.head}>
       <button className={classes.icon} onClick={props.hideModal}> <VscClose/>
        </button>
      </header>
      <main className={classes.main}>
        <img src={props.IMAGE_URL}/>
        <div className={classes.control}>
          <h1>{title}</h1>
          <p>{des}</p>
        </div>
      </main>
      </ModalFlow>
   

    
  )
}

export default OverLay