import React from 'react'
import styles from'./CardDetails.module.css';
import {useForm} from 'react-hook-form';


const normalizeCardNumber=(value)=>{
  return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0,19) || '';
}

function CardDetails({setIsVisible}) {
 
const {register, handleSubmit, formState:{errors}} =useForm();

const submitForm=(data)=>{
setIsVisible(true);
console.log(data);
}

  return (
    <>
    <form className={styles.form_box} onSubmit={handleSubmit(submitForm)}>
      <div className={styles.name}>
        <label>CARDHOLDER NAME</label>
        <input
          type='text'
          className={styles.cardholder}
          placeholder='e.g. Jane Smith'
          {...register('userName', { required:'required', pattern: {
          value: /^[A-Za-z]+$/i,
          message: 'only letters'}})}
         />
          <span>{errors.userName?.message}</span>
        </div>
      <div className={styles.number}>
        <label>CARD NUMBER</label>
        <input 
          className={styles.card_number} 
          placeholder='e.g. 1234 5678 9123 0000'
          {...register('cardNumber', {required:'required',
          pattern: {
          value: /^[0-9\s]*$/,
          message: "Only numbers",
      }, minLength:{
        value:19,
        message:'only 16 digits'
      },
        maxLength:{
        value:19,
        message:'no more than 16'
      }
      })}
       onChange={(e)=>{
          const {value}=e.target;
          e.target.value=normalizeCardNumber(value);
        }}
        
       />
     
        <span>{errors.cardNumber?.message}</span>
     
    
        </div>
      <div className={styles.card_info}>
        <div className={styles.box}>
      <div className={styles.date}>
        <label>EXP.DATE</label>
        <input 
           className={styles.exp_month} 
           type='text' 
           placeholder='MM'
           {...register('expMonth', {required:'required',
          pattern: {
          value: /^[0-9]*$/,
          message: "Only numbers",
      }, minLength:{
        value:2,
        message:'only 2 digits'
      },
        maxLength:{
        value:2,
        message:'no more than 2'
      }
      })}/>
        <span>{errors.expMonth?.message}</span>
        
      </div>
      <div className={styles.year}>
      <label>(MM/YY)</label>
      <input  
          className={styles.exp_year} 
          type='text' 
          placeholder='YY'
          {...register('expYear', {required:'required',
          pattern: {
          value: /^[0-9]*$/,
          message: "Only numbers",
      }, minLength:{
        value:2,
        message:'only 2 digits'
      },
        maxLength:{
        value:2,
        message:'no more than 2'
      }
      })}/>
          <span>{errors.expYear?.message}</span>
      </div>
      </div>
      <div className={styles.cvc_number}>
        <label>CVC</label>
        <input 
          className={styles.cvc} 
          type='text' 
          placeholder='e.g. 123'
          {...register('cvc', {required:'required',
          pattern: {
          value: /^[0-9]*$/,
          message: "Only numbers are allowed",
      }, minLength:{
        value:3,
        message:'only 3 digits'
      },
        maxLength:{
        value:3,
        message:'no more than 3'
      }
      })}/>
          <span>{errors.cvc?.message}</span>
       
      </div>
      </div>
      <button className={styles.submit} type='submit'>Confirm</button>
    </form>
    </>
  )
}

export default CardDetails
