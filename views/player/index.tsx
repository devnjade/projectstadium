import Layout from 'layout';
import React from 'react';
import styles from './index.module.scss';
import down from 'assets/svgs/arrowdown.svg';
import pbg from 'assets/images/playerbg.png';
import Image from 'next/image';
import Link from 'next/link';

const PlayerView: React.FC = () => {
  return (
    <Layout header sidebar>
      <div className={styles.wrapper}>
        <div className={styles.bar}>
          <p>player {'>'} sirsu</p>
        </div>
        <div className={styles.banner}>
          <Image
            src={pbg}
            alt="player_card_bg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.bar}>
          <p className={styles.mid}>player info</p>
          <span>
            <Image src={down} alt="down-arrow" />
          </span>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.type}>
              <span>🏟</span>
              <p>stadium</p>
            </div>
            <div className={styles.details}>
              <p className={styles.name}>sirsu</p>
              <p className={styles.description}>
                SIRSU <br /> FREE AGENT UNDER STADIUM <br /> CURRENTLY LOOKING
                FOR A TEAM
              </p>
              <div className={styles.mint_info}>
                <div className={styles.sub}>
                  <span>minter</span>
                  <p>sirsu.eth</p>
                </div>
                <div className={styles.sub}>
                  <span>owner</span>
                  <p>sirsu.eth</p>
                </div>
              </div>
            </div>
            <div className={styles.history}>
              <p className={styles.title}>History</p>
              <div className={styles.list}>
                <div className={styles.each}>
                  <div className={styles.xo}>
                    <p>blvkhvnd.eth accepted the offer</p>
                    <span className={styles.link}>June 22, 2022 ↗</span>
                  </div>
                  <div className={`${styles.xo} ${styles['xo--right']}`}>
                    <p className={styles.eth}>2.43 ETH</p>
                    <span>$4,123.55 USD</span>
                  </div>
                </div>
                <div className={styles.each}>
                  <div className={styles.xo}>
                    <p>sirsu.eth minted this NFT</p>
                    <span className={styles.link}>June 20, 2022 ↗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={`${styles.box} ${styles['box--team_status']}`}>
              <div className={styles.team}>
                <span>team</span>
                <p>blvkhand</p>
              </div>
              <p className={styles.lib}>active</p>
            </div>
            <div className={`${styles.box} ${styles['box--player_status']}`}>
              <div className={styles.offer}>
                <span className={styles.title}>Last Offer</span>
                <div className={styles.price}>
                  <p>2.4 eth</p>
                  <span>$4,123.55 usd</span>
                </div>
              </div>
              <div className={styles.rec_status}>
                <span>RECRUITMENT STATUS</span>
                <p>OPEN</p>
                <Link href="/teams">
                  <button type="button">FIND A TEAM</button>
                </Link>
              </div>
            </div>
            <div className={`${styles.box} ${styles['box--team']}`}>
              <span>TEAM</span>
              <p>YOU ARE NOT PART OF A TEAM</p>
              <Link href="/mint/team">
                <button type="button">CREATE TEAM</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlayerView;
