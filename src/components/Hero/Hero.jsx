import Image from "next/image";
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.herocontainer}>
      <Image src={'https://i.postimg.cc/wjfTG79c/IMG-20230311-163230.jpg'} className={styles.profileimg} width={300} height={300} alt="Joe's personal headshot" />
      <div className={styles.herotext}>
        <h1>Hey, I'm Esteban Gonzalez 👋</h1>
        <p>
          I'm a software developer based in Lagos, Nigeria. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
        <div className={styles.socialicons}>
          <a
            href="https://twitter.com/olawanle_joel"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/olawanlejoel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/olawanlejoel/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;