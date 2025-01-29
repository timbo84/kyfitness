import Navbar from "@/components/navbar/navbar";
import styles from "./page.module.css"

export default function Home() {
  return (
   <div className={styles.homepage}>
   <Navbar />
   <div className={styles.homepageCard}>
    
    <h1 className={styles.h1}>
      Hi Kylynn! This is going to be your home page
    </h1>
   </div>
   </div>
  );
}
