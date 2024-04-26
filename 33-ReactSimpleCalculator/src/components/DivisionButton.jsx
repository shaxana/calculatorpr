import React from 'react'
import styles from './style/styles.module.css'

function DivisionButton({onClick}) {
  return (
    <button className={styles.divisionBtn} onClick={onClick}>Divide</button>
  )
}

export default DivisionButton