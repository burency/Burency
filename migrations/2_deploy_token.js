const BurencyToken = artifacts.require('BurencyToken');

module.exports = async function(deployer, network, accounts){
  const _name = "Burency";
  const _symbol = "BUY";
  const _decimals = 18;

  await deployer.deploy(BurencyToken, _name, _symbol, _decimals);
  const deployedToken = await BurencyToken.deployed();

  console.log(deployedToken);
}