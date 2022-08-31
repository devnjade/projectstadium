import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import React from 'react';
import { vars } from 'utils/variables';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.rinkeby],
  [alchemyProvider({ apiKey: vars.alchemyId }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Project Stadium',
  chains,
});

const wagmiClient = createClient({
  connectors,
  provider,
});

const AppProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: '#AFF4C6',
          accentColorForeground: '#000',
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default AppProvider;
