import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <hr />
      <div className={styles.footercontainer}>
        <p>
          © {new Date().getFullYear()} Esteban Portfolio
        </p>
        <a href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FEstebanjgg%2FEstebanPortafolio"><img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FEstebanjgg%2FEstebanPortafolio&label=Visitors&labelColor=%23d9e3f0&countColor=%232ccce4&style=plastic&labelStyle=upper" /></a>
        <div className={styles.socialicons}>
          <a
            href="https://twitter.com/estebanjosegon5"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/Estebanjgg"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/esteban-jose-gonzalez-gomez-297771173/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;
