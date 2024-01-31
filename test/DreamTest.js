const { expect } = require("chai");

describe("Property Token", () => {
	it("tokenizes", async () => {
		const instance = await ethers.deployContract("PropertyToken");
		await instance.mint("agr1");
		await instance.mint("agr2");

		const res = await instance.getValues();
		console.log(res);
	});
});
