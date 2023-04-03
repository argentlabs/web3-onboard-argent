import type { WalletInit } from '@web3-onboard/common';
import type { IArgentLoginOptions } from '@argent/login';
declare function argent(walletConnect: IArgentLoginOptions["walletConnect"]): WalletInit;
export default argent;
