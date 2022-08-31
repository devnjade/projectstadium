import Layout from 'layout';
import React from 'react';
import styles from './index.module.scss';

const HomeView: React.FC = () => {
  return (
    <Layout header sidebar>
      <div className={styles.wrapper}></div>
    </Layout>
  );
};

export default HomeView;
