import React from 'react'
import styles from "./page.module.css";
import Button from '@/components/button/Button';
import Image from 'next/image';
import {items} from './data';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';

const getData =(category) =>{
  const data = items[category];
  if(data)
  {
    return data;
  }

  return Error;
}

const  category =  async ({params}) => {
  const data= await getData(params.category);

  return (
    <div className={styles.container}>
      <div className={styles.catTitle}>{params.category}</div>
      {data.map((item) => 
     <div className={styles.item} key={item.id}>
      <div className={styles.content}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.desc}>{item.desc}</p>
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
)}
    </div>
    
  )
}

export default category