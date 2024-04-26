import React from 'react'
import styles from './style/styles.module.css'

function AddButton({onClick}) {
  return (
   <>
    <button className={styles.addBtn} onClick={onClick}>Add</button>
      
   </>
  )
}

export default AddButton