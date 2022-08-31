import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div
          className={`${styles.hypers} ${styles['hypers--head']} ${styles['hypers--off']}`}
        >
          <p>{'>'} menu</p>
        </div>
        <Link href="/players">
          <div className={styles.hypers}>
            <p>{'>'} players</p>
          </div>
        </Link>
        <Link href="/teams">
          <div className={styles.hypers}>
            <p>{'>'} teams</p>
          </div>
        </Link>
        <div className={`${styles.hypers} ${styles['hypers--off']}`}>
          <p>{'>'} leagues*</p>
        </div>
        <div className={`${styles.hypers} ${styles['hypers--off']}`}>
          <p>{'>'} open events*</p>
        </div>
        <Link href="/">
          <div className={styles.hypers}>
            <p>{'>'} info</p>
          </div>
        </Link>
      </div>
      <div className={styles.foot}>
        <span>🏟</span>
        <p>
          POWERED BY <br /> BLVKHVND + ZORA
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
