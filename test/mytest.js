const Redroad = artifacts.require("Redroad");
const inWei = 10 ** 18;

contract('Redroad', async addresses => {
	const [admin, buyer1, buyer2, _] = addresses;

	it('works correctly.', async () => {		
		const con = await Redroad.new("My flyign NFT", "TIT");	
		await con.mint(admin, 1);
		await con.approve(rft.address, 1);
		
	});
});