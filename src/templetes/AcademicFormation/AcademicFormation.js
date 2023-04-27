// AcademicFormation.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './AcademicFormation.module.css';
import {dir} from 'i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  const AcademicFormation = ({ trainings, courses }) => {
    const settingsTrainings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 1000,
      cssEase: 'linear',
      rtl: true,
      additionalTransform: 50,
    };
  
    const settingsCourses = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 1000,
      cssEase: 'linear',
      rtl: true,
    };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.container}>
        <section className={styles.trainingSection}>
          <h2 className={styles.trainingTitle}>Academic Training</h2>
          <div className={styles.carousel}>
            <Slider {...settingsTrainings}>
              {trainings.map((training, index) => (
                <div key={index} className={styles.carouselItem}>
                  <img src={training.image} alt={training.title} />
                  <div className={styles.itemInfo}>
                    <h3>{training.title}</h3>
                    <p>{training.year}</p>
                    <p>{training.institution}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        <section className={styles.coursesSection}>
          <h2 className={styles.coursesTitle}>Cursos</h2>
          <div className={styles.carousel}>
            <Slider {...settingsCourses}>
              {courses.map((course, index) => (
                <div key={index} className={styles.carouselItem}>
                  <img src={course.image} alt={course.title} />
                  <div className={styles.itemInfo}>
                    <h3>{course.title}</h3>
                    <p>{course.year}</p>
                    <a href={course.urlCredencial} target="_blank" rel="noopener noreferrer" className={styles.teste}> Mostrar credencial <i class="fa fa-rocket" aria-hidden="true"></i></a>
                    
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcademicFormation;