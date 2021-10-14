import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import list from '../../list';
import Project from '../project';
import styles from './projectlist.module.css';

const Projectlist = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  const [projects] = useState(list);
  return (
    <main className={styles.main}>
      <Carousel
        breakPoints={breakPoints}
      >
        {
            projects.map((proj) => <Project key={proj.id} project={proj} />)
        }
      </Carousel>
    </main>
  );
};

export default Projectlist;
