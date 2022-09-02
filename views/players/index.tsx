import Layout from 'layout';
import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { Card } from 'components';
import { players } from 'mocks/player';

const PlayersView: React.FC = () => {
  return (
    <Layout header sidebar>
      <div className={styles.wrapper}>
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
          <Link href="/mint/player">
            <button type="button" className={styles.create}>
              CREATE PLYR CARD
            </button>
          </Link>
        </div>

        <div className={styles.content}>
          {players.map((i) => (
            <Card key={i.id} type="player" />
          ))}
          {/* <Card type="player" /> */}
        </div>
      </div>
    </Layout>
  );
};

export default PlayersView;
