import React from "react";
import styles from "./Footer.module.css"

const githubUsername = "PedrohgdSantos"
const Footer = () => {
    return (
      <footer className={styles.footer}>
        <p className={styles.credit}>
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noreferrer"
          >

            <i className="bi bi-github" aria-hidden="true" />
            <span>{githubUsername}</span>
          </a>

          <span>@{new Date().getFullYear()}</span>
        </p>
      </footer>
    );
};
export default Footer;