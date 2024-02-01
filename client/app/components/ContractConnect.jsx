import React from "react";
import contractABI from "../../artStore/artifacts/contracts/PropertyToken.sol/PropertyToken.json";
import { AlchemyProvider, Contract, ethers } from "ethers";
import { getAccount } from "@wagmi/core";
import { config } from "./wagmi";

const account = getAccount(config);

const provider = new AlchemyProvider("maticmum", process.env.ALCHEMY_ID);
const signer = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);
export const contractInstance = new Contract(
	process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
	contractABI.abi,
	signer
);
