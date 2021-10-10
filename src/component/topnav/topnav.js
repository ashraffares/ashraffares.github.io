import React from 'react';
import { Link } from 'react-router-dom';
import styles from './topnav.module.css';

const Topnav = () => (

  <nav className={styles.nav}>
    <Link to="/">
      <div className={styles.logoGroup}>
        <div className={styles.topdiv}>
          <div />
          <div />
        </div>
        <div className={styles.bottomdiv}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </Link>
    <div>
      <a className={styles.links} href="mailto:ashraffares090@gmail.com">
        <i className="fas fa-envelope fa-lg " />
      </a>
      <a className={styles.links} href="https://github.com/ashraffares">
        <i className="fab fa-github fa-lg  " />
      </a>
      <a className={styles.links} href="https://www.linkedin.com/in/faresashraf/">
        <i className="fab fa-linkedin fa-lg  " />
      </a>
      <a className={styles.links} href="https://twitter.com/Fares09301164">
        <i className="fab fa-twitter-square fa-lg  " />
      </a>
    </div>

  </nav>
);

export default Topnav;
