import React from 'react';
import styles from './index.module.scss';
import logo from 'assets/svgs/logo.svg';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logo_style}>
          <Image src={logo} alt="project_stadium_logo" layout="responsive" />
        </div>
        <div className={styles.connect_wrap}>
          <ConnectButton showBalance={false} />
        </div>
      </div>
    </header>
  );
};

export default Header;
