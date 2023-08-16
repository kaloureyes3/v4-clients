import {
  TESTNET_CHAIN_ID,
} from '../src/clients/constants';
import { NetworkOptimizer } from '../src/network_optimizer';

async function test(): Promise<void> {
  // all valid endpoints
  try {
    const optimizer = new NetworkOptimizer();
    const endpoints = [
      'https://validator.v4testnet1.dydx.exchange',
      'https://dydx-testnet.nodefleet.org',
      'https://dydx-testnet-archive.allthatnode.com:26657/XZvMM41hESf8PJrEQiTzbCOMVyFca79R',
    ];
    const optimal = await optimizer.findOptimalNode(endpoints, TESTNET_CHAIN_ID);
    console.log(optimal);
  } catch (error) {
    console.log(error.message);
  }

  // one invalid endpoint
  try {
    const optimizer = new NetworkOptimizer();
    const endpoints = [
      'https://validator.v4testnet1.dydx.exchange',
      'https://dydx-testnet.nodefleet.org',
      'https://dydx-testnet-archive.allthatnode.com:26657/XZvMM41hESf8PJrEQiTzbCOMVyFca79R',
      'https://example.com',
    ];
    const optimal = await optimizer.findOptimalNode(endpoints, TESTNET_CHAIN_ID);
    console.log(optimal);
  } catch (error) {
    console.log(error.message);
  }

  // all invalid endpoints

  try {
    const optimizer = new NetworkOptimizer();
    const endpoints = [
      'https://example.com',
      'https://example.org',
    ];
    const optimal = await optimizer.findOptimalNode(endpoints, TESTNET_CHAIN_ID);
    console.log(optimal);
  } catch (error) {
    console.log(error.message);
  }
}

test().catch(console.log);
