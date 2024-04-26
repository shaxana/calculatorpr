import React, { useDebugValue } from 'react'
import styles from './style/styles.module.css'
function ResultInput({result,setResult}) {
  return (
   <div className={styles.result}>Result:{result}</div>
  )
}

export default ResultInput