
import Image from 'next/image'
import styles from "./page.module.css";
import cover from "../../public/images/cover.jpg";
import Link from 'next/link';

export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>Beauty is the State of mind.</h1>
      <p className="font-sans text-2xl">We will show your Skin,hair and body the care and attention they deserve.</p>
      <Link href="/portfolio">
      <button className="p-5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-2xl cursor-pointer w-max">See Our Work</button>
      </Link>
    </div>
    <div className={styles.item}>
    <Image src={cover} className={styles.img}></Image>
  </div>
 </div>
  )
}
