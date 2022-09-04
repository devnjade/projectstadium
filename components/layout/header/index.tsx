import React from 'react';
import styles from './index.module.scss';
import logo from 'assets/svgs/logo.svg';
import Image from 'next/image';
import RbKitButton from 'components/shared/rbkitButton';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import Link from 'next/link';

const Header: React.FC = () => {
  const router = useRouter();

  const { address } = useAccount();

  const viewProfile = () => {
    router.push(`/players/${address}`);
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/">
          <div className={styles.logo_style}>
            <Image src={logo} alt="project_stadium_logo" layout="responsive" />
          </div>
        </Link>
        <div className={styles.connect_wrap}>
          <RbKitButton onAccount={viewProfile} />
        </div>
      </div>
    </header>
  );
};

export default Header;
