import React, { useState } from 'react';
import list from '../../list';
import Project from '../project';
import styles from './projectlist.module.css';

const Projectlist = () => {
  const [projects] = useState(list);
  return (
    <main className={styles.main}>
      {
          projects.map((proj) => <Project key={proj.id} project={proj} />)
        }
    </main>
  );
};

export default Projectlist;
