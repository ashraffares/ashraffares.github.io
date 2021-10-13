import React, { useState } from 'react';
import list from '../../list';
import Project from '../project';
import styles from './projectlist.module.css';

const Projectlist = () => {
  const [projects] = useState(list);
  return (
    <main className={styles.main}>
      <div className={styles.div}> . . . . . . . . . . . . . . . . . . . . .</div>
      <h1 className={styles.h1}>Projects</h1>
      <div className={styles.projectsWrapper}>
        {
          projects.map((proj) => <Project key={proj.id} project={proj} />)
        }
      </div>
    </main>
  );
};

export default Projectlist;
