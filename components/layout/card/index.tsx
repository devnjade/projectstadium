import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ICard {
  type: 'team' | 'player';
  customStyle?: string;
}

const Card: React.FC<ICard> = ({ type, customStyle }) => {
  const router = useRouter();

  const singlePage = (where: string) => {
    if (where == 'team') {
      router?.push('/teams/blvkhand');
    } else if (where == 'player') {
      router?.push('/players/sirsu');
    } else {
      return;
    }
  };

  return (
    <div onClick={() => singlePage(type)} className={styles.card}>
      <div className={styles.preview}></div>
      <div className={styles.details}>
        <div className={styles.team_stats}>
          <span>
            {type == 'player' && 'team'}
            {type == 'team' && 'plyrs'}
          </span>
          <p>
            {type == 'player' && 'BLVKHAND'}
            {type == 'team' && 'ROSTER OF 5'}
          </p>
        </div>
        <div className={styles.main_info}>
          <div className={styles.content}>
            <p>
              {type == 'player' && 'SIRSU #00000'}
              {type == 'team' && 'BLVKHVND #00761'}
            </p>
            <span>
              {type == 'player' && 'sirsu.eth'}
              {type == 'team' && 'blvkhvnd.eth'}
            </span>
          </div>
          {type == 'player' && <button className={styles.bid}>bid</button>}
        </div>
        <div className={styles.extras}>
          <span>
            {type == 'player' && 'last Offer'}
            {type == 'team' && 'Owned by'}
          </span>
          <p>
            {type == 'player' && '2.4 eth'}
            {type == 'team' && 'blvkhvnd.eth'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
