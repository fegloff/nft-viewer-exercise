export const truncateAddressString = (address: string, num = 12) => {
  if (!address) {
    return '';
  }
  const first = address.slice(0, num);
  const last = address.slice(-num);
  return `${first}...${last}`;
}

export enum EthChainIdEnum {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby	= 4,
  Goerli = 5,
  Kovan = 42
}

