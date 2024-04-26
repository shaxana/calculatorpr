import React from 'react'
import styles from './style/styles.module.css'

function MultipButton({onClick}) {
  return (
    <button className={styles.multipBtn} onClick={onClick}>Multiply</button>
  )
}

export default MultipButton