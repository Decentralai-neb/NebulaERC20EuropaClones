const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('VoxelVerseShop', function () {
  let voxelverseshop, prospect, owner;

  before(async () => {
    [owner] = await ethers.getSigners();
    const Prospect = await ethers.getContractFactory('Prospect');
    prospect = await Prospect.deploy();
  });

  beforeEach(async () => {
    const VoxelVerseShop = await ethers.getContractFactory('VoxelVerseShop');
    voxelverseshop = await VoxelVerseShop.deploy();
    const prospectAddress = prospect.address;
    await prospect.addAllowedContract(voxelverseshop.address);
    await voxelverseshop.initializeProspect(prospect.address);

  });

  it('Should return the Prospect balance of the owner', async function () {
    const ownerBalance = await prospect.balanceOf(owner.address);
    console.log('Owner address:', owner.address);
    console.log('Owner Prospect balance:', ownerBalance.toString());
  
    expect(ownerBalance.toString()).to.equal('700000000000000000000000000000');
  });

  
  

  it('Should return the prospect contract address', async function () {
    const tx1 = await voxelverseshop.prospect();
    console.log(tx1);
    console.log('prospect address:', prospect.address);

    expect(tx1).to.be.eq(prospect.address);
  });

  it('Should mint Johnny token id 1', async function () {
    const ownerBalanceBefore = await voxelverseshop.balanceOf(owner.address, 1);
    console.log(ownerBalanceBefore);
    await voxelverseshop.mint(1, { value: ethers.utils.parseEther('0.05') });
    const ownerBalanceAfter = await voxelverseshop.balanceOf(owner.address, 1);
    console.log(ownerBalanceAfter);
    expect(ownerBalanceAfter).to.equal(ownerBalanceBefore.add(1));
  });
  
  

  it('Should return the Prospect balance of the owner', async function () {
    const ownerBalance = await prospect.balanceOf(owner.address);
    console.log('Owner address:', owner.address);
    console.log('Owner Prospect balance:', ownerBalance.toString());
  
    expect(ownerBalance.toString()).to.equal('700010000000000000000000000000');
  });



  
  

});