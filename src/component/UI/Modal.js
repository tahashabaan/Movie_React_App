import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>
}
const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>
}
const Modal = () => {
  const portalElement = document.getElementById('overlays')
  return (
    <>
      {ReactDOM.createPortal(<Backdrop/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay/>,portalElement)}
    </>
  )
}

export default Modal