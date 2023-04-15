import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.herocontainer}>
      <Image
        src={"https://i.postimg.cc/wjfTG79c/IMG-20230311-163230.jpg"}
        className={`${styles.profileimg} ${styles.rotate}`}
        width={300}
        height={300}
        alt="Esteban personal headshot"
      />
      <div className={styles.herotext}>
        <h1 className={styles.animatedtext}>Hey, I'm Esteban Gonzalez 👋</h1>
        <p>
        Hello people, how are you, I am a full stack developer, always passionate about learning something new
        </p>
        <div className={styles.socialicons}>
          <a
            href="https://twitter.com/estebanjosegon5"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/Estebanjgg"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/esteban-jose-gonzalez-gomez-297771173/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default Hero;
