import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faGithub, } from "@fortawesome/free-brands-svg-icons";
import styles from "./contact.module.css";

export default function ContactTemplete() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
  <div className={styles.overlay}>
    <div className={styles.zoom}>
      <Image
        src={'https://i.postimg.cc/021fb79K/about.gif'}
        alt="Imagen de contacto"
        width={700}
        height={700}
      />
    </div>
  </div>
</div>
      <div className={styles.infoContainer}>
        <h1>Contáctanos</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <span>123-456-7890</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>info@tudominio.com</span>
          </li>
          <li>
            <a href="https://www.facebook.com/tudominio" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/tudominio" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/tudominio" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.github.com/tudominio" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}