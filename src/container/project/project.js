/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import styles from './project.module.css';

const Project = ({ project }) => {
  const {
    img, name, description, github, live, stack,
  } = project;
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="project screen shot" />
      <div>
        <h4>{name}</h4>
        <div className={styles.linksContainer}>
          <a href={github} className={styles.link} target="_blank" rel="noreferrer">
            <i className="fab fa-github" />
            GITHUB
          </a>
          {
            live ? (
              <a href={live} className={styles.link} target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-square-alt" />
                Live
              </a>
            ) : null
          }
        </div>
        <p>{description}</p>
      </div>
      <div>
        {
          stack.map((el) => (
            <span className={styles.span} key={el}>
              {el}
            </span>
          ))
        }
      </div>
    </div>
  );
};
export default Project;
