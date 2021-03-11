const Redroad = artifacts.require("Redroad");
const inWei = 10 ** 18;

contract('Redroad', async addresses => {
	const [admin, buyer1, buyer2, _] = addresses;

	it('works correctly.', async () => {		
		let id;
		const road = await Redroad.new("The boss", "TIT")		
		await road.awardItem(admin, "https://game.example/item-id-8u5h2m.json")
		.then(d=>{
			id = d.logs[0].args.tokenId.toString();
		});	
		await road.ownerOf(id).then(d=>console.log(d));
		await road.tokenURI(id).then(d=>console.log(d));
	});
});