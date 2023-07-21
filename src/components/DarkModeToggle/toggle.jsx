"use client"
import React, { useContext } from 'react'
import styles from './toggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';
const Toggle = () => {
  const {toggle,mode}=useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball} style={mode==="light"?{left:"5px"}:{right:"5px"}}></div>
    </div>
  )
}

export default Toggle