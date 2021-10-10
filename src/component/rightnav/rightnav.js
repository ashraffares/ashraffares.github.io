import React from 'react';
import { Link } from 'react-router-dom';
import styles from './rightnav.module.css';

const Rightnav = () => (
    <nav className={styles.nav}>
        <Link to="/" className={`${styles.nav_link} ${styles.active}`}>portfolio</Link>
        <Link to="/projects" className={styles.nav_link}>projects</Link>
    </nav>
);

export default Rightnav;