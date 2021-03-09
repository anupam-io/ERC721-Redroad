// SPDX-License-Identifier: Unlicensed
pragma solidity >=0.6.2 <0.8.0;
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract Redroad is ERC721{
    constructor(
        string memory name,
        string memory symbol
    )
    ERC721(name, symbol){
    }

    function mint(address to, uint tokenId)external{
        _mint(to, tokenId);
    }
}
