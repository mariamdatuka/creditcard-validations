import React from 'react'
import styles from './Images.module.css'
import Main from '../images/bg-main-desktop.png';
import Back from '../images/bg-card-back.png';
import Front from '../images/bg-card-front.png';

function Images() {
  return (
    <>
   <div className={styles.background}>
     <img src={Main} alt='img'/>
   </div>
   <div className={styles.card_front}>
    <img  src={Front} alt='front'/>
   </div>
   <div className={styles.card_back}>
    <img  src={Back} alt='back'/>
   </div>
    </>
  )
}

export default Images