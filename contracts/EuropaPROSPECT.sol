// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract EuropaPROSPECT is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    constructor(
        string memory name,
        string memory symbol
    ) ERC20(name, symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(DEFAULT_ADMIN_ROLE, 0xA7d345228AE3C4b5388c8B5EF18794dAc4b6cc5a);
    }

    function mint(address to, uint256 amount) public virtual {
        require(hasRole(MINTER_ROLE, msg.sender), "Caller is not a minter");
        _mint(to, amount);
    }

    function burn(uint256 amount) public virtual {
        require(hasRole(BURNER_ROLE, msg.sender), "Caller is not a burner");
        _burn(msg.sender, amount);
    }
}