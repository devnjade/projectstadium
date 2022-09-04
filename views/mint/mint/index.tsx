import Layout from 'layout';
import React from 'react';
import styles from './index.module.scss';
import card from 'assets/images/playercard.png';
import Image from 'next/image';
import { colors } from 'mocks/colors';
import Link from 'next/link';

interface IMint {
  type: 'player' | 'team';
}

enum stages {
  INIT = 'INIT',
  PREVIEW = 'PREVIEW',
  MINT = 'MINT',
  MINTED = 'MINTED',
}

const MintView: React.FC<IMint> = ({ type }) => {
  const [stage, setStage] = React.useState<stages>(stages.INIT);

  const timerRef = React.useRef<null | any>(null);

  const [tag, setTag] = React.useState<string>();
  const [pickedColor, setPickedColor] = React.useState<string>();
  const [payoutAddress, setPayoutAddress] = React.useState<string>();

  const [disabled, setDisabled] = React.useState<boolean>(true);

  const pickColor = (value: string) => {
    setPickedColor(value);
  };

  const previewMint = () => {
    setStage(stages.PREVIEW);
  };

  const safelyMint = () => {
    setStage(stages.MINT);
    timerRef.current = setTimeout(() => setStage(stages.MINTED), 1000);
  };

  const goBack = () => {
    if (stage == stages.PREVIEW) {
      setStage(stages.INIT);
    }
  };

  React.useEffect(() => {
    if (
      tag !== null &&
      pickedColor !== null &&
      payoutAddress !== null &&
      payoutAddress?.length === 42
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [tag, pickedColor, payoutAddress]);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  let showPreviewTxt = stage != stages.INIT;
  let showMintingTxt = stage != stages.INIT && stage != stages.PREVIEW;
  let showMintedTxt =
    stage != stages.INIT && stage != stages.PREVIEW && stage != stages.MINT;

  const add = '0XC90E2943228E9A9A14193294C463F7870BE5FE8B';
  console.log(add.length);

  return (
    <Layout header sidebar>
      <div className={styles.wrapper}>
        <div className={styles.bar}>
          {type == 'player' && <p>CREATE PLYR or TEAM {'>'} PLYR CARD</p>}
          {type == 'team' && <p>CREATE PLYR or TEAM {'>'} TEAM CARD</p>}
          {stage === stages.INIT && (
            <button onClick={previewMint} disabled={disabled}>
              CREATE {'→'}
            </button>
          )}
          {stage === stages.PREVIEW && (
            <button onClick={goBack}> {'←'} GO BACK</button>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.container}>
              <p
                className={
                  stage !== stages.INIT
                    ? `${styles.header} ${styles['header--fade']}`
                    : styles.header
                }
              >
                {'>'} NOW, TELL US WHO YOU <br /> ARE ANON.
              </p>
              {showPreviewTxt && (
                <p
                  className={
                    stage !== stages.PREVIEW
                      ? `${styles.header} ${styles['header--fade']}`
                      : styles.header
                  }
                >
                  {'>'} LET ME GET THIS STRAIGHT...
                  <br />
                  <br />
                  YOUR NAME IS {tag}, YOUR <br /> COLOR IS {pickedColor} AND YOU
                  <br />
                  ARE A PLAYER?
                  <br />
                  <br />
                  IF SO, CREATE YOUR CARD.
                </p>
              )}
              {showMintingTxt && (
                <p
                  className={
                    stage !== stages.MINT
                      ? `${styles.header} ${styles['header--fade']}`
                      : styles.header
                  }
                >
                  {'>'} CREATING CARD....
                </p>
              )}
              {showMintedTxt && (
                <p
                  className={
                    stage !== stages.MINTED
                      ? `${styles.header} ${styles['header--fade']}`
                      : styles.header
                  }
                >
                  {'>'} YOU ARE NOW A PLAYER. IT’S <br /> TIME YOU FIND YOURSELF
                  A TEAM.
                </p>
              )}
              {stage == stages.INIT && (
                <div className={styles.details}>
                  <p className={styles.title}>PLAYER DETAILS</p>
                  <div className={styles.form}>
                    <div className={styles.input_group}>
                      <label>Gamertag</label>
                      <input
                        onChange={(e) => setTag(e.target.value)}
                        type="text"
                        value={tag}
                      />
                    </div>
                    <div className={styles.color_picker}>
                      <div className={styles.input_group}>
                        <label>PRIMARY COLOR</label>
                        <input value={pickedColor!} type="text" disabled />
                      </div>
                      <div className={styles.colors}>
                        {colors.map((i) => (
                          <button
                            key={i.id}
                            className={styles.picker}
                            style={{
                              background: i.hex,
                            }}
                            onClick={() => {
                              pickColor(i.name);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className={styles.input_group}>
                      <label>PAYOUT ADDRESS</label>
                      <input
                        onChange={(e) => setPayoutAddress(e.target.value)}
                        type="text"
                        value={payoutAddress}
                      />
                    </div>
                    <p className={styles.sub}>
                      The address that will receive any withdrawals and
                      royalties. It can be your personal wallet, a
                      multisignature wallet, or an external splits contract.
                    </p>
                  </div>
                </div>
              )}
              {stage == stages.PREVIEW && (
                <button onClick={safelyMint} className={styles.create}>
                  CREATE PLAYER CARD
                </button>
              )}
              {stage == stages.MINTED && (
                <div className={styles.minted_buttons}>
                  <Link href="/players/io">
                    <button type="button">VIEW PLAYER CARD</button>
                  </Link>
                  <Link href="/teams">
                    <button className={styles.invert} type="button">
                      FIND TEAMS
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.container}>
              <div className={styles.preview}>
                <Image
                  src={card}
                  alt="player_card"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: 16 }}
                />
              </div>
              {stage !== stages.INIT && tag !== null && (
                <div className={styles.info}>
                  <p className={styles.name}>{tag}</p>
                  <div className={styles.box}>
                    <div className={styles.team}>
                      <span>TEAM</span>
                      <p>FREE AGENT</p>
                    </div>
                    <p className={styles.lib}>INACTIVE</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MintView;
