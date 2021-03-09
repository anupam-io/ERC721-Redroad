// SPDX-License-Identifier: Unlicensed
pragma solidity >=0.6.2 <0.8.0;
contract Migrations {
  address public owner = msg.sender;
  uint public last_completed_migration;

  modifier restricted() {
    require(msg.sender == owner);
    _;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }
}
