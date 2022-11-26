import React from 'react'
import icon from '../images/icon-complete.svg';
import styles from './Thanks.module.css';

function Thanks() {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.imgBox}>
    <img src={icon} alt='complete'/>
    </div>
    <h1>THANK YOU!</h1>
    <p>We've added your card details</p>
    <button className={styles.continue}>Continue</button>
    </div>
   
    </>
  )
}

export default Thanks