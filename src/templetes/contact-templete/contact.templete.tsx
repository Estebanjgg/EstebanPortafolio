import { useState, useEffect, ChangeEvent, FormEvent } from "react";
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



type IconProps = {
  icon: IconDefinition;
};

const Icon: React.FC<IconProps> = ({ icon }) => {
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

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactTemplete: React.FC = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch("/api/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.status === 200) {
      alert("Mensaje enviado correctamente");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Error al enviar el mensaje");
    }
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
        <div className={styles.suggestionsContainer}>
      <h2>Sugerencias</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
        <button
          type="reset"
          onClick={() =>
            setFormData({
              name: "",
              email: "",
              message: "",
            })
          }
        >
          Limpiar
        </button>
      </form>
    </div>
  </div>

    </div>
  );
}
export default ContactTemplete;