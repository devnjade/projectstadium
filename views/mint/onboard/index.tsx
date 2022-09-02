import Layout from 'layout';
import React from 'react';
import styles from './index.module.scss';
import mock from 'assets/images/mintonboard.png';
import Image from 'next/image';
import Link from 'next/link';

const MintOnboardView: React.FC = () => {
  return (
    <Layout header sidebar>
      <div className={styles.wrapper}>
        <div className={styles.bar}>
          <p>CREATE PLYR or TEAM</p>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <Image
              src={mock}
              alt="mint_mock_image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.right}>
            <div className={styles.container}>
              <p className={styles.title}>WHO ARE YOU?</p>
              <div className={styles.box}>
                <p>I AM A PLAYER</p>
                <span>
                  Your player card acts as your account and profile. Use this
                  card to join teams.
                </span>
                <Link href="/mint/player">
                  <button type="button">MAKE YOUR PLAYER</button>
                </Link>
              </div>
              <div className={styles.box}>
                <p>I AM A TEAM</p>
                <span>
                  Building a team allows you to acquire players and build your
                  roster.
                </span>
                <Link href="/mint/team">
                  <button type="button">ASSEMBLE YOUR TEAM</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MintOnboardView;
