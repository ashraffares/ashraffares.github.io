/* eslint-disable max-len */
import React from 'react';
import Projectlist from '../../container/projectlist';
import styles from './main.module.css';

const Main = () => (
  <>
    <section className={styles.wrapper}>
      <div className={styles.infoContainer}>
        <div>
          <div>
            <h1 className={`${styles.hColor} ${styles.h}`}>Hey,</h1>
            <h1 className={`${styles.hColor} ${styles.h}`}>I&apos;m Fares Ashraf</h1>
            <span className={`${styles.txtColor} ${styles.hsoftware}`}>Software engineer</span>
          </div>
          <div className={styles.info}>
            <div className={styles.lborder} />
            <div>
              <div>
                <p className={styles.txtColor}>
                  I love coding and follow industry standards,
                  {' '}
                  <br />
                  Pair-programming and working remotely with multinational team and meeting projects deadline.
                  <br />
                  Fluent in the English language, and capable of ramping up quickly and efficiently.
                </p>
              </div>
              <div>
                <div>
                  <h2 className={styles.hColor}>Front-end</h2>
                  <span className={styles.txtColor}>JavaScript -</span>
                  <span className={styles.txtColor}>React -</span>
                  <span className={styles.txtColor}>Redux -</span>
                  <span className={styles.txtColor}>HTML -</span>
                  <span className={styles.txtColor}>CSS -</span>
                  <span className={styles.txtColor}>BootStrap -</span>
                  <span className={styles.txtColor}>SASS -</span>
                  <span className={styles.txtColor}>Jest</span>
                </div>
                <div>
                  <h2 className={styles.hColor}>Back-end</h2>
                  <span className={styles.txtColor}>Ruby on Rails -</span>
                  <span className={styles.txtColor}>Ruby -</span>
                  <span className={styles.txtColor}>RSpec</span>
                </div>
                <div>
                  <h2 className={styles.hColor}>Tools</h2>
                  <span className={styles.txtColor}>Git -</span>
                  <span className={styles.txtColor}>GitHub -</span>
                  <span className={styles.txtColor}>Heroku -</span>
                  <span className={styles.txtColor}>Netlify -</span>
                  <span className={styles.txtColor}>Chrome -</span>
                  <span className={styles.txtColor}>Dev-Tools -</span>
                  <span className={styles.txtColor}>Terminal</span>
                </div>
                <div>
                  <h2 className={styles.hColor}>Soft Skills</h2>
                  <span className={styles.txtColor}>Teamwork -</span>
                  <span className={styles.txtColor}>Problem-Solving -</span>
                  <span className={styles.txtColor}>Flexibility/Adaptability -</span>
                  <span className={styles.txtColor}>Remote/Pair-Programming</span>
                </div>
                <div>
                  <h2 className={styles.hColor}>Contact Me</h2>
                  <span className={styles.txtColor}>Email: ashraffares090@gmail.com -</span>
                  <span className={styles.txtColor}>
                    Phone:
                    <a href="tel:+0201121603394" className={styles.txtColor}>+0201121603394 - </a>
                  </span>
                  <span className={styles.txtColor}>
                    <a className={styles.txtColor} href="https://docs.google.com/document/d/1o5Vif_lOEqD6xTodFXXqbsJxby7ioFjgi5O6iGJdrbE" target="_blank" rel="noreferrer" download>Resume</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.profile_pic} src="https://user-images.githubusercontent.com/37639594/136700476-8a9f87fc-0b12-4c09-a974-a7c6dbed0459.png" alt="fares" />
      </div>
    </section>
    <Projectlist />
    <div className={styles.linksWrapper}>
      <a className={styles.links} href="mailto:ashraffares090@gmail.com">
        <i className="fas fa-envelope fa-2x" />
      </a>
      <a className={styles.links} href="https://github.com/ashraffares" target="_blank" rel="noreferrer">
        <i className="fab fa-github fa-2x " />
      </a>
      <a className={styles.links} href="https://www.linkedin.com/in/faresashraf/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin fa-2x " />
      </a>
      <a className={styles.links} href="https://twitter.com/Fares09301164" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter-square fa-2x " />
      </a>
    </div>
  </>

);

export default Main;
