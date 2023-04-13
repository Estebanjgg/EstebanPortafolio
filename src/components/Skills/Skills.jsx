import styles from './Skill.module.css'

const Skills = () => {
    return (
      <div className={styles.skillscontainer}>
        <h2>Skills</h2>
        <div className={styles.gridskills}>
          <div className={`${styles.skillcard} ${styles.html}`} >
            <i className="fa-brands fa-html5 html-icon"></i>
            <p>HTML</p>
          </div>
          <div className={`${styles.skillcard} ${styles.css}`}>
            <i className="fa-brands fa-css3-alt css-icon"></i>
            <p>CSS</p>
          </div>
          <div className={`${styles.skillcard} ${styles.js}`}>
            <i className="fa-brands fa-js-square js-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className={`${styles.skillcard} ${styles.react}`}>
            <i className="fa-brands fa-react react-icon"></i>
            <p>React</p>
          </div>
          <div className={`${styles.skillcard} ${styles.node}`}>
            <i className="fa-brands fa-node-js node-icon"></i>
            <p>Node</p>
          </div>
          <div className={`${styles.skillcard} ${styles.python}`}>
            <i className="fa-brands fa-python python-icon"></i>
            <p>Python</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;