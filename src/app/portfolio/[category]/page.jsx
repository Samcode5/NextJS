import React from 'react'
import styles from "./page.module.css";
import Button from '@/components/button/Button';
import Image from 'next/image';

const category = ({params}) => {
  return (
    <div className={styles.container}>
      <div className={styles.catTitle}>{params.category}</div>
     <div className={styles.item}>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
        <Button type="See More" url="#"></Button>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} 
        width={500}
        height={500}
        src="https://images.pexels.com/photos/17568714/pexels-photo-17568714/free-photo-of-subway-on-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt='Image'
        />
      </div>
     </div>
    </div>
  )
}

export default category