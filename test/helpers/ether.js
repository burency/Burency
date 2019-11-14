export default function ether (n) {
    return web3.utils.toWei(new web3.utils.BN(n));
  }