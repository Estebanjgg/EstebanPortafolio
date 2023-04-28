import React, { useState } from "react";
import { projectData } from "./data";
import styles from "./project.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const ProjectsTemplete = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDemoClick = (demoLink: string) => {
    if (!demoLink) {
      setOpenDialog(true);
    } else {
      window.open(demoLink, "_blank", "noopener noreferrer");
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className={styles.projectsContainer}>
      <h2>Projects</h2>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"No demo available"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          At the moment we do not have a demo for this repository.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>

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
                <button onClick={() => handleDemoClick(project.gitHubLinkDemo)}>
                  <FontAwesomeIcon icon={faGithubAlt} spin size="lg" />
                  Demo
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectsTemplete;
