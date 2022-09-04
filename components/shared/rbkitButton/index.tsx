/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import styles from './index.module.scss';
import pfp from 'assets/images/pfp.png';

const RbKitButton: React.FC<{ onAccount?: () => void }> = ({ onAccount }) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
            className={styles.wrapper}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <button
                    className={styles.connect}
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    className={styles.wrong}
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <button
                  className={styles.profile}
                  type="button"
                  onClick={onAccount}
                >
                  <Image
                    src={pfp}
                    alt="account ens avatar"
                    width={40}
                    height={40}
                  />
                  {account.displayName}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default RbKitButton;
