
import React from 'react'
import Image from 'next/image';
import styles from './about.module.css';
import aboutimg from "../../../public/images/about.jpg";
import Button from "../../components/button/button";
function About(){
 
  return (
    <div className={styles.container}>
      <div className={styles.img}>
       <Image src={aboutimg} className='rounded-md w-full '></Image>
      </div>
      <div className={styles.textContainer}>
       <div className={styles.item}>
        <h1 className='font-bold text-3xl'>Who are we</h1>
        <p className="font-lg text-justify">It is a long established fact that a reader will be distracted by 
        the readable content of a page when looking at its layout. The point of 
        using Lorem Ipsum is that it has a more-or-less normal distribution of 
        letters, as opposed to using 'Content here, content here', making it 
        look like readable English
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or 
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't 
        anything embarrassing hidden in the middle of text
        </p>
       </div>
       <div className={styles.item}>
        <h1 className='font-bold text-3xl'>What we do</h1>
        <p className='font-lg text-justify'> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet mauris 
        eget est interdum convallis molestie id sem. In vel urna eu velit hendrerit sodales mattis at magna.<br/>
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the Internet.
        It uses a dictionary of over 200 Latin words, combined with a handful of
         model sentence structures, to generate Lorem Ipsum which looks reasonable.
         The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc
        </p><br/>
        <Button type="Contact" url="/contact"></Button>
       </div>
      </div>
    </div>
  )
}


export  default About;