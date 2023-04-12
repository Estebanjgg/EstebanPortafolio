import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  image: {
    width: 300,
    height: 'auto',
    marginRight: 40,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: 20,
    },
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <img src={'https://i.postimg.cc/gknfjGnW/foto-About.jpg'} alt="Profile" className={classes.image} />
      <div className={classes.info}>ages
        <h2>Contact Me</h2>
        <div className={classes.link}>
          <FontAwesomeIcon icon={faPhone} className={classes.icon} />
          <p>+1 (123) 456-7890</p>
        </div>
        <div className={classes.link}>
          <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
          <p>hello@example.com</p>
        </div>
        <div className={classes.link}>
          <FontAwesomeIcon icon={faGlobe} className={classes.icon} />
          <a href="https://www.example.com">www.example.com</a>
        </div>
        <div className={classes.link}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.icon} />
          <p>123 Main St, Anytown USA</p>
        </div>
        <div className={classes.link}>
          <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
          <a href="https://www.facebook.com/example"><p>Facebook</p></a>
        </div>
        <div className={classes.link}>
          <FontAwesomeIcon icon={faInstagram} className={classes.icon} />
          <a href="https://www.instagram.com/example"><p>Instagram</p></a>
        </div>
        <div className={classes.link}>
          <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
          <a href="https://www.linkedin.com/in/example"><p>LinkedIn</p></a>
        </div>
        <div className={classes.link}>
          <FontAwesomeIcon icon={faGithub} className={classes.icon} />
          <a href="https://www.github.com/example"><p>GitHub</p></a>
        </div>
        
      </div>
     
     
    </div>
  );
};

export default Contact;