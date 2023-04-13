import { projectData } from "./data";
import styles from "./project.module.css";

const ProjectsTemplete = () => {
  return (
    <div className={styles.projectsContainer}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projectData &&
          projectData.map((project) => (
            <div className={styles.projectCard} key={project.id}>
              <div className={styles.projectHeader}>
                <i className="fa-regular fa-folder-open folder-icon"></i>
                <div className={styles.smallicons}>
                  <a href={project.gitHubLink}>
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectsTemplete;
