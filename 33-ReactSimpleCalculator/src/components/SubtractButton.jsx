import React from 'react'
import styles from './style/styles.module.css'

function SubtractButton({onClick}) {
  return (
   <>
   <button className={styles.subtractBtn} onClick={onClick}>Subtract</button>
   </>
  )
}

export default SubtractButton