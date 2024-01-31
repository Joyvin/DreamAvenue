import { ethers } from "hardhat";

describe("TrackerTest", () => {
	it("Mints tokens", async () => {
		let allProps;
		const instance = await ethers.deployContract("PropertyToken");

		await instance.mint("agr1");
		await instance.mint("agr2");

		allProps = await instance.getAllProps();
		await instance.sellProperty(allProps[0][allProps[0].length - 1], 1);
		await instance.rentProperty(allProps[1][allProps[0].length - 1], 1);

		allProps = await instance.getAllProps();
		console.log(allProps);
		const propsOnSale = allProps.filter((p) => {
			return Number(p[2]) != 0;
		});
		const propsOnRent = allProps.filter((p) => {
			return Number(p[3]) != 0;
		});

		const tx = {
			value: allProps[0][2],
		};
		console.log(
			(await ethers.provider.getBalance(instance.getAddress())).toString()
		);
		await instance.purchaseProperty(
			allProps[0][allProps[0].length - 1],
			tx
		);

		console.log(propsOnSale);
		console.log(propsOnRent);
		console.log(
			await ethers.provider.getBalance(instance.getAddress()).toString()
		);

		// toRent =
		// console.log(journey);
	});
});
