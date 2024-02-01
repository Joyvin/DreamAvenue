import { http, createConfig } from "wagmi";
import { base, mainnet, polygon } from "wagmi/chains";
import { injected, coinbaseWallet, walletConnect } from "wagmi/connectors";

const projectId = "<WALLETCONNECT_PROJECT_ID>";

export const config = createConfig({
	chains: [mainnet, base, polygon],
	connectors: [
		injected(),
		coinbaseWallet({ appName: "Create Wagmi" }),
		walletConnect({
			projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? "",
		}),
	],
	transports: {
		[polygon.id]: http(
			"https://polygon-mumbai.g.alchemy.com/v2/kPuyaI_BHNIEmkcfX-UCtm_OVR_lMXfz",
			{
				key: "alchemy",
			}
		),
	},
});
