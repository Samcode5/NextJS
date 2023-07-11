
import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';


const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 Glorify All Rights reserved</div>
        <div className={styles.logo}>
         <Image src="/images/facebook.png" width={15} height={15} alt="Facebook"className='opacity-60 cursor-pointer'></Image>
         <Image src="/images/instagram.png" width={15} height={15} alt="instagram"className='opacity-60 cursor-pointer'></Image>
         <Image src="/images/whatsapp.png" width={15} height={15} alt='whatsapp'className='opacity-60 cursor-pointer'></Image>
        </div>
    </div>
  )
}

export default Footer