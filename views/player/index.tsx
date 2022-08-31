import Layout from 'layout';
import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { Card } from 'components';

const PlayerView: React.FC = () => {
  return (
    <Layout header sidebar>
      <main className={styles.wrapper}>
        <div className={styles.topbar}>
          <div className={styles.ops}>
            <p className={styles.hyper}>players</p>
            <button className={`${styles.hyper} ${styles['hyper--button']}`}>
              ALL
            </button>
            <button 
              className={`${styles.hyper} ${styles['hyper--button']} ${styles['hyper--active']}`}
            >
              ALLEGIANCE
            </button>
            <button className={`${styles.hyper} ${styles['hyper--button']}`}>
              FREE AGENCY
            </button>
          </div>
          <button className={styles.create}>CREATE PLYR CARD</button>
        </div>

        <div className={styles.content}>
          <div className={styles.grid}>
            <Card type="player" />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default PlayerView;
