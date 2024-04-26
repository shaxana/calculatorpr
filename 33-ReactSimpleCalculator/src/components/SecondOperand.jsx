import React from 'react'
import { useState } from 'react'
import styles from './style/styles.module.css'

function SecondOperand({secondvalue, onChange}) {
   
  return (
    <form className='secondvalue'>
        <label htmlFor="" className={styles.label}>2-ci eded</label>
        <input className={styles.input} type="number" onChange={onChange} value={secondvalue}/>
    </form>
    )
}

export default SecondOperand