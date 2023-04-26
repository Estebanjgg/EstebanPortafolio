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
        
      </div>

      
    </div>
  );
};

export default Hero;
