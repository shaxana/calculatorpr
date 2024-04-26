import React from 'react'
import { useState } from 'react'
import styles from './style/styles.module.css'

function FirstOperand({firstvalue, onChange}) {
   
  return (
    <form  className='firstinput'>
        <label className={styles.label} htmlFor="">1-ci eded</label>
        <input className={styles.input} type="number" onChange={onChange} value={firstvalue} />
    </form>
    )
}

export default FirstOperand