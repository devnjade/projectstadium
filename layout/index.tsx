import { Header, Sidebar } from 'components';
import React from 'react';
import styles from './index.module.scss';

interface ILayout {
  header?: boolean;
  sidebar?: boolean;
  children?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ header, sidebar, children }) => {
  return (
    <div className={styles.wrapper}>
      {header && <Header />}
      <div className={styles.content}>
        {sidebar && <Sidebar />}
        {children}
      </div>
    </div>
  );
};

export default Layout;
