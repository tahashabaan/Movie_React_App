import React from 'react'
import classes from './Modal.module.css'

const ModalFlow = (props) => {
  return (
    <div className={`${classes.modal} ${props.className}`}>
      {props.children}
    </div>
  )
}

export default ModalFlow