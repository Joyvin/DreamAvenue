require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.20",
	paths: {
		artifacts: "./client/artStore/artifacts",
	},
	networks: {
		hardhat: {
			chainId: 1337,
		},
		mumbai: {
			url: process.env.API_URL,
			accounts: [`0x${process.env.PRIVATE_KEY}`],
		},
	},
};
