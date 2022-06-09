// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestTokennn is ERC20("Test Token22", "TTT") {
    address public immutable owner = address(0x69000D6Da4eedf452a1e2048BEeEc901BcdCE82E);
    constructor() {
    // constructor(address _owner) {
        // owner = _owner;
        _mint(msg.sender, 10**30);
    }
}