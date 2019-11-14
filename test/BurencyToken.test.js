import ether from './helpers/ether';

const BurencyToken = artifacts.require('BurencyToken');

contract('BurencyToken', ([main, invest1, invest2]) => {
    const _name = 'Test Token';
    const _symbol = 'TBT';
    const _decimals = 18;
  
    beforeEach(async function () {
      this.token = await BurencyToken.new(_name, _symbol, _decimals);
    });
  
    describe('token attributes', function() {
      it('has the correct name', async function() {
        const name = await this.token.name();
        assert.equal(name, _name);
      });
  
      it('has the correct symbol', async function() {
        const symbol = await this.token.symbol();
        assert.equal(symbol, _symbol);
      });
  
      it('Burn test' , async function() { 
        await this.token.burn(ether(100000000));
        const totalSupply = await this.token.totalSupply();
        assert.equal(web3.utils.fromWei(totalSupply), 600000000);
      });

      it('send tokens', async function() {
        await this.token.transfer(invest1, ether(3000));
        await this.token.transfer(invest2, ether(75000));

        const invest1Balance = await this.token.balanceOf(invest1);
        const invest2Balance = await this.token.balanceOf(invest2);

        assert.equal(web3.utils.fromWei(invest1Balance), 3000);
        assert.equal(web3.utils.fromWei(invest2Balance), 75000);

        const ownerBalance = await this.token.balanceOf(main);
        assert.equal(web3.utils.fromWei(ownerBalance), 699922000);
      });
    });
  });