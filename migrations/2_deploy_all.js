const Redroad = artifacts.require("Redroad");

module.exports = function (deployer) {
  deployer.deploy(Redroad, "Redroad", "RRD");
};
