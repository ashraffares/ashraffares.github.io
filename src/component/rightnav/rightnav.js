import React from 'react';
import { Link } from 'react-router-dom';
import styles from './rightnav.module.css';

const Rightnav = () => (
  <nav className={styles.nav}>
    <Link to="/" className={`${styles.nav_link} ${styles.active}`}>portfolio</Link>
    <Link to="/projects" className={styles.nav_link}>projects</Link>
    <a href="https://docs.google.com/document/d/1o5Vif_lOEqD6xTodFXXqbsJxby7ioFjgi5O6iGJdrbE" target="_blank" className={styles.nav_link} rel="noreferrer">Resume</a>
  </nav>
);

export default Rightnav;
