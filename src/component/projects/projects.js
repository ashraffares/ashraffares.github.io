import React from 'react';
import styles from './projects.module.css';

const Projects = () => (
  <div className={styles.card}>
    <img
      src="![TodoApi](https://user-images.githubusercontent.com/37639594/136688565-4d7d7312-7e42-45ee-b99d-c534bdb91417.png)
            "
      alt="project screen shot"
    />
    <div>
      <div>
        <h4>ProjectName</h4>
        <a href="https://github.com/ashraffares/TodoApiV1">project link</a>
      </div>
      <p>
        Todo list API is easily accessible through a modern RESTful API and secured using the JWT.
      </p>
      <div>
        <span />
      </div>
    </div>
  </div>
);
export default Projects;
