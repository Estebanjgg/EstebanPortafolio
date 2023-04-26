import { useState, useEffect  } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./contact.module.css";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const Icon = ({ icon }: { icon: IconDefinition }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setClicked(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  const handleClick = () => {
    setClicked(true);
  };
  return (
    <FontAwesomeIcon
    icon={icon}
    className={`${styles.faicon} ${clicked ? styles.clicked : ""}`}
    onClick={handleClick}
    />
  );
};

export default function ContactTemplate() {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.infoContainer} mb-4`}>
        <h1>Contact me</h1>

        <ul>
          <br />
          <li>
            <Icon icon={faEnvelope} />
            <span>esteban030990@gmail.com</span>
          </li>
          <br />
          <li>
            <a href="https://www.facebook.com/estebamg/" target="_blank">
              <Icon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/estebam05/" target="_blank">
              <Icon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/esteban-jose-gonzalez-gomez-297771173/"
              target="_blank"
            >
              <Icon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Estebanjgg" target="_blank">
              <Icon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={"https://i.postimg.cc/LRn0QV7D/about.gif"}
          alt="Imagen de contacto"
          width={400}
          height={400}
          className={`${styles.image} ${isImageClicked ? styles.enlarged : styles["rounded-image"]}`}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
