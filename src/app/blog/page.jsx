import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './blog.module.css'
 const Blog = () => {
  return (
    <div className={styles.Maincontainer}>
     <Link  href='/blog/testid' className={styles.container}>
      <div className={styles.imgContainer}>
         <Image 
         src="https://images.pexels.com/photos/17530670/pexels-photo-17530670/free-photo-of-light-city-dawn-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
         width={300}
         height={250}
         className={styles.img}
         />
        </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.text}>text</div>
      </div>
      </Link>
      <Link  href='/blog/testid' className={styles.container}>
      <div className={styles.imgContainer}>
         <Image 
         src="https://images.pexels.com/photos/17530670/pexels-photo-17530670/free-photo-of-light-city-dawn-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
         width={300}
         height={250}
         className={styles.img}
         />
        </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.text}>text</div>
      </div>
      </Link>
      <Link  href='/blog/id' className={styles.container}>
      <div className={styles.imgContainer}>
         <Image 
         src="https://images.pexels.com/photos/17530670/pexels-photo-17530670/free-photo-of-light-city-dawn-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
         width={300}
         height={250}
         className={styles.img}
         />
        </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.text}>text</div>
      </div>
      </Link>
    </div>
  )
}


export  default Blog;