import Image from "next/image";
import styles from './aboutTemplete.module.css'
import { useTranslation} from 'react-i18next';
import i18n from '../../../i18n';
import React, { useState } from 'react';


const AboutTemplete = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  return (


    <div className={styles.container}>
      
      <div className={styles.aboutcontainer}>
        
        <div className={styles.flexabout}>
          <div className={styles.aboutimg}>
            <Image src={'https://i.postimg.cc/76h1m2nf/imagen-About.jpg'}  alt="" className={styles.profileimg} width={300} height={500}/>
          </div>
          <div className={styles.aboutText}>
          <h1>{t('aboutMe')}</h1>
          <button onClick={() => i18n.changeLanguage('es')}>Español</button>
          <button onClick={() => i18n.changeLanguage('en')}>English</button>
          <button onClick={() => i18n.changeLanguage('pt')}>Portugues</button>
          <button onClick={() => i18n.changeLanguage('ko')}>Koreano</button>
          <p>{t('bio')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTemplete;
