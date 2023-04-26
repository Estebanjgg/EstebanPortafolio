import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
 
  return (
     
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        
      </div>
      <div className={styles.links}>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a>About</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a>Contact</a>
        </Link>
        <Link href="/projects" legacyBehavior>
          <a>Projects</a>
        </Link>
      </div>
    </nav>
      
  )
  
};

export default Navbar;