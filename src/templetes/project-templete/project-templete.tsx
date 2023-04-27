import { projectData } from "./data";
import styles from "./project.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';



const ProjectsTemplete = () => {
  return (
    <div className={styles.projectsContainer}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projectData &&
          projectData.map((project) => (
            <div className={styles.projectCard} key={project.id}>
              <div className={styles.projectHeader}>
                <FontAwesomeIcon icon={faFolderOpen} className="folder-icon" />
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <br />
                <p>{project.description}</p>
              </div>
              <div className={styles.projectFooter}>
                <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                  <button>
                    <FontAwesomeIcon icon={faGithubAlt} spin size="lg" />
                    GitHub
                  </button>
                </a>
                <a href={project.gitHubLinkDemo} target="_blank" rel="noopener noreferrer">
                  <button>
                    <FontAwesomeIcon icon={faGithubAlt} spin size="lg" />
                    Demo
                  </button>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};


export default ProjectsTemplete;
