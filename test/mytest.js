const assert = require("assert");
const Redroad = artifacts.require("Redroad");
const inWei = 10 ** 18;

contract("Redroad", async (addresses) => {
  const [admin, buyer1, _] = addresses;

  it("works correctly.", async () => {
    let id;
    const road = await Redroad.new("The boss", "BRO");
    await road
      .awardItem(admin, "https://www.mywebsite.com/tokenURI")
      .then((d) => {
        id = d.logs[0].args.tokenId.toString();
      });

    assert.strictEqual(await road.ownerOf(id), admin);
    assert.strictEqual(parseInt(await road.balanceOf(admin)), 1);
    assert.strictEqual(parseInt(await road.totalSupply()), 1);

    // Checking balance
    await road
      .balanceOf(admin)
      .then((d) => console.log("Admin: ", d.toString()));
    await road
      .balanceOf(buyer1)
      .then((d) => console.log("Buyer1: ", d.toString()));

    // Transfering the token
    await road.approve(buyer1, id, { from: admin });
    await road.transferFrom(admin, buyer1, id, { from: buyer1 });

    // Checking balance
    await road
      .balanceOf(admin)
      .then((d) => console.log("Admin: ", d.toString()));
    await road
      .balanceOf(buyer1)
      .then((d) => console.log("Buyer1: ", d.toString()));
  });
});
