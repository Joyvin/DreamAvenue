import { ethers } from "hardhat";

describe("TrackerTest", () => {
	it("Mints tokens", async () => {
		const instance = await ethers.deployContract("PropertyToken");

		await instance.mint("agr1");
		await instance.mint("agr2");

		const journey = await instance.getValues();
		console.log(journey);
	});
});
