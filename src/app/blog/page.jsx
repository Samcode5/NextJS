import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './blog.module.css'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{cache:'no-store'})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

 const Blog = async() => {
  const data= await getData();
  return (
    <div className={styles.Maincontainer}>
    {data.map((item) =>(
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
        <h1 className={styles.title}>{item.title}</h1>
        <div className={styles.text}>text</div>
      </div>
      </Link>
    ))}
    </div>
  )
}


export  default Blog;