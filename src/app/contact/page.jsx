import React from 'react'
import Image from 'next/image';
import styles from './contact.module.css';
import Button from '@/components/button/Button';
import contactimg from "../../../public/images/contact.png"
 const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let's Keep in touch</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={contactimg} className={styles.img}></Image>
        </div>
       <form className={styles.form}>
        <input className={styles.name} type='text' placeholder='name'></input>
        <input className={styles.email} type="email" placeholder='email'></input>
        <textarea className={styles.message} placeholder='message' rows={10} cols={30}></textarea>
        <Button type="Send" url="#"></Button>
       </form>
      </div>
    </div>
  )
}


export  default Contact;