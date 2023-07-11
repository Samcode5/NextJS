import React from 'react'
import styles from "./button.module.css"
import Link from 'next/link'
const Button = ({type,url}) => {
  return (
    <Link href={url}>
    <button className={styles.container}>{type}</button>
    </Link>
  )
}

export default Button