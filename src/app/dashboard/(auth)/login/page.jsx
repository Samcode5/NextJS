"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import styles from './page.module.css';
const Login = () => {
  return (
    <div className={styles.container}>
      <button onClick={async() => await signIn('google')}>Login with Google</button>
    </div>
  )
}

export default Login