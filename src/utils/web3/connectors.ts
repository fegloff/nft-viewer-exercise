import { InjectedConnector } from "@web3-react/injected-connector";

/**
 * Array of supported Chains
 */
const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
});

export const connectors = {
  injected: injected
}