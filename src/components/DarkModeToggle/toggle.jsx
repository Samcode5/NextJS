import React from 'react'
import styles from './toggle.module.css';
const Toggle = () => {
  return (
    <div className={styles.container}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball}></div>
    </div>
  )
}

export default Toggle