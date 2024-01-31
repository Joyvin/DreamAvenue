import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import { config } from "dotenv";
config();

const { API_URL, PRIVATE_KEY } = process.env;

const hConfig: HardhatUserConfig = {
	solidity: "0.8.19",
	paths: {
		artifacts: "./client/artStore/artifacts",
	},
	networks: {
		hardhat: {
			chainId: 1337,
		},
		mumbai: {
			url: API_URL,
			accounts: [`0x${PRIVATE_KEY}`],
		},
	},
};

export default hConfig;

// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();

// /** @type import('hardhat/config').HardhatUserConfig */
// exports = {
// 	solidity: "0.8.20",
// 	paths: {
// 		artifacts: "./client/artStore/artifacts",
// 	},
// 	networks: {
// 		hardhat: {
// 			chainId: 1337,
// 		},
// 		mumbai: {
// 			url: process.env.API_URL,
// 			accounts: [`0x${process.env.PRIVATE_KEY}`],
// 		},
// 	},
// };
