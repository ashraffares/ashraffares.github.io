import React from 'react';
import styles from './topnav.module.css';

const Topnav = () => (
    <nav className={styles.nav}>
        <div className={styles.logoGroup}>
            <div class={styles.topdiv}>
                <div />
                <div />
            </div>
        <div className={styles.bottomdiv}>
                <div />
                <div />
                <div />
            </div>
        </div>
        <div>
            <a className={styles.links} href="mailto:ashraffares090@gmail.com">
                <i class="fas fa-envelope fa-lg "  />
            </a>
            <a className={styles.links} href="https://github.com/ashraffares">
                <i class="fab fa-github fa-lg  " />
            </a>
            <a className={styles.links} href="https://www.linkedin.com/in/faresashraf/" >
                <i class="fab fa-linkedin fa-lg  " />
            </a>
            <a className={styles.links} href="https://twitter.com/Fares09301164">
                <i class="fab fa-twitter-square fa-lg  " />
            </a>
        </div>

    </nav>
);

export default Topnav;