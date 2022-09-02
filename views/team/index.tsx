import Layout from 'layout';
import React from 'react';
import styles from './index.module.scss';
import down from 'assets/svgs/arrowdown.svg';
import tbg from 'assets/images/teambg.png';
import Image from 'next/image';

const TeamView: React.FC = () => {
  return (
    <Layout header sidebar>
      <div className={styles.wrapper}>
        <div className={styles.bar}>
          <p>TEAMS {'>'} BLVKHVND</p>
        </div>
        <div className={styles.banner}>
          <Image
            src={tbg}
            alt="player_card_bg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.bar}>
          <p className={styles.mid}>team info</p>
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
            <div className={styles.box}>
              <span>RECRUITMENT STATUS</span>
              <p>OPEN</p>
              <button>FIND A TEAM</button>
            </div>
            <div className={styles.list}>
              <p className={styles.title}>ROSTER LIST</p>
              <div className={styles.players}>
                <div className={styles.player}>
                  <div className={styles.team}>
                    <span>sirsu</span>
                    <p>blvkhand</p>
                  </div>
                  <p className={styles.lib}>active</p>
                </div>
                <div className={styles.player}>
                  <div className={styles.team}>
                    <span>plyr</span>
                    <p>druzy</p>
                  </div>
                  <p className={styles.lib}>active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamView;
