/**
 * Truncate wallet address 
 * @param address {string} Wallet address
 * @param num {number} digits to show at the benging/end of wallet address
 * @returns {string} truncated address
 */
export const truncateAddressString = (address: string, num = 12) : string => {
  if (!address) {
    return '';
  }
  const first = address.slice(0, num);
  const last = address.slice(-num);
  return `${first}...${last}`;
}

/** ChainID Enum */
export enum EthChainIdEnum {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby	= 4,
  Goerli = 5,
  Kovan = 42
}

