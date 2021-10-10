import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Main from '../main';
import Projects from '../projects';
import Rightnav from '../rightnav';
import Topnav from '../topnav';
import styles from './app.module.css';

function App() {
  return (
    <main className={styles.app}>
      <Topnav />
      <Rightnav />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/projects" component={Projects} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
}

export default App;
