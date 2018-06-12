import React from 'react';
import styles from './index.css';
import SideMenu from '../components/sideMenu/index';
import Header from '../components/header/index';
import withRouter from 'umi/withRouter';

function Layout({ children, location }) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <SideMenu location={location}/>
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Layout);
