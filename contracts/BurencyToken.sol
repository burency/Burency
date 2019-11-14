
pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "openzeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";

contract BurencyToken is  StandardToken, DetailedERC20, BurnableToken{
    constructor(string _name, string _symbol, uint8 _decimals)
    DetailedERC20(_name, _symbol, _decimals)

    public {
        totalSupply_ = 10**18 * 700000000;
        balances[msg.sender] = 10**18 * 700000000;
    }
}