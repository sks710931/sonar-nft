import { InjectedConnector } from "@web3-react/injected-connector";

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    56,97
  ], //421611 arb test change to 42161, 8001 => 137
});

export function activateInjectedProvider(providerName) {
  const { ethereum } = window;

  if (!ethereum?.providers) {
      return undefined;
  }

  let provider;
  switch (providerName) {
      case 'TrustWallet':
          provider = ethereum.providers.find(({ isTrustWallet}) => isTrustWallet);
          console.log(provider)
          break;
      case 'MetaMask':
          provider = ethereum.providers.find(({ isMetaMask }) => isMetaMask);
          break;
      default:
        break;
  }

  if (provider) {
      ethereum.setSelectedProvider(provider);
  }
}