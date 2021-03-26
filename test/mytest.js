const Redroad = artifacts.require("Redroad");
const inWei = 10 ** 18;

contract("Redroad", async (addresses) => {
  const [admin, buyer1, buyer2, _] = addresses;

  it("works correctly.", async () => {
    let id;
    const road = await Redroad.new("The boss", "BRO");
    await road
      .awardItem(admin, "https://game.example/item-id-8u5h2m.json")
      .then((d) => {
        id = d.logs[0].args.tokenId.toString();
      });
    await road.ownerOf(id).then((d) => console.log("ownerOf: ", d));
    await road.tokenURI(id).then((d) => console.log("tokenURI: ", d));
    await road
      .totalSupply()
      .then((d) => console.log("Total supply: ", d.toString()));

    await road
      .balanceOf(admin)
      .then((d) => console.log("Admin: ", d.toString()));
    await road
      .balanceOf(buyer1)
      .then((d) => console.log("Buyer1: ", d.toString()));

    // Transfering the token
    await road.approve(buyer1, id, { from: admin });
    await road.transferFrom(admin, buyer1, id, { from: buyer1 });

    await road
      .balanceOf(admin)
      .then((d) => console.log("Admin: ", d.toString()));
    await road
      .balanceOf(buyer1)
      .then((d) => console.log("Buyer1: ", d.toString()));
  });
});
