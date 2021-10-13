import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Main from '../main';
import Projectlist from '../../container/projectlist';
import Topnav from '../topnav';
import styles from './app.module.css';

function App() {
  return (
    <main className={styles.app}>
      <Topnav />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/projects" component={Projectlist} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
}

export default App;
