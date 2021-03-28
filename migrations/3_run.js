const Redroad = artifacts.require("Redroad");

module.exports = async function (deployer) {
    const road = await Redroad.deployed();
    const url = `https://raw.githubusercontent.com/akcgjc007/erc721-Redroad/master/meta/0.json`;
    
    const account = (await web3.eth.getAccounts())[0];
    
    await road.awardItem(account, url)
};
  