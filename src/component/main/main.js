import React from 'react';
import styles from './main.module.css';

const Main = () => (
  <section className={styles.wrapper}>
    <div className={styles.infoContainer}>
      <div>
        <div>
          <h1 className={`${styles.hColor} ${styles.h}`}>Hey,</h1>
          <h1 className={`${styles.hColor} ${styles.h}`}>I'm Fares Ashraf</h1>
          <span className={`${styles.txtColor} ${styles.hsoftware}`}>Software engineer</span>
        </div>
        <div className={styles.info}>
          <div className={styles.lborder} />
          <div>
            <div>
              <p className={styles.txtColor}>
                I can help you build a product,feature or website
                {' '}
                <br />
                Look through some of my work and experience!
                <br />
                If you like what you see and have a project you need me to coded,
                <br />
                don’t hesitate to contact me.
              </p>
            </div>
            <div>
              <div>
                <h2 className={styles.hColor}>Front-end</h2>
                <span className={styles.txtColor}>Javascript -</span>
                <span className={styles.txtColor}>React -</span>
                <span className={styles.txtColor}>Redux -</span>
                <span className={styles.txtColor}>HTML -</span>
                <span className={styles.txtColor}>CSS -</span>
                <span className={styles.txtColor}>Bootstrap -</span>
                <span className={styles.txtColor}>Sass -</span>
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
                <span className={styles.txtColor}>Dev Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.profile_pic} src="https://avatars.githubusercontent.com/u/37639594?s=400&u=7400c535793776eb926fbf93b5203bf9e0de8e53&v=4" alt="fares" />
    </div>
  </section>

);

export default Main;
