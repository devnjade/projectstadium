import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

interface ICard {
  type: 'team' | 'player';
  customStyle?: string;
}

const Card: React.FC<ICard> = ({ type, customStyle }) => {
  return (
    <div className={styles.card}>
      <div className={styles.preview}>
      </div>
      <div className={styles.details}>
        <div className={styles.team_stats}>
          <span>
            {type == 'player' && 'team'}
            {type == 'team' && 'plyrs'}
          </span>
          <p>BLVKHAND</p>
        </div>
        <div className={styles.main_info}>
          <div>
            <p></p>
            <span></span>
          </div>
          {type == 'player' && <button>bid</button>}
        </div>
        <div className={styles.extras}>
          <span>last Offer</span>
          <p>2.4 eth</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
