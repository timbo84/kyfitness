import styles from "./navbar.module.css"



export default function navbar() {
    return (
        <nav className={styles.navbar}>
  <div className={styles.logo}>Logo</div>
  <ul className={styles.tabs}>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

    )
}