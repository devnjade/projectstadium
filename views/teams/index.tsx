import Layout from 'layout';
import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { Card } from 'components';
import { players } from 'mocks/player';

const TeamsView: React.FC = () => {
  return (
    <Layout header sidebar>
      <div className={styles.wrapper}>
        <div className={styles.topbar}>
          <div className={styles.ops}>
            <p className={styles.hyper}>TEAMS</p>
            <button className={`${styles.hyper} ${styles['hyper--button']}`}>
              ALL
            </button>
            <button
              className={`${styles.hyper} ${styles['hyper--button']} ${styles['hyper--active']}`}
            >
              HAS ROSTER
            </button>
            <button className={`${styles.hyper} ${styles['hyper--button']}`}>
              OPEN TEAMS
            </button>
          </div>
          <button className={styles.create}>CREATE TEAM</button>
        </div>

        <div className={styles.content}>
          {players.map((i) => (
            <Card key={i.id} type="team" />
          ))}
          {/* <Card type="player" /> */}
        </div>
      </div>
    </Layout>
  );
};

export default TeamsView;

