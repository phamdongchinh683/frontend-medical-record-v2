"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, mainnet, zksync } from "wagmi/chains";
import { sepolia } from "viem/chains";

const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!walletConnectProjectId) {
  throw new Error(
    "Error: NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is not defined. Please set it in your .env.local file"
  );
}

const config = getDefaultConfig({
  appName: "Medical Records DApp",
  projectId: walletConnectProjectId,
  chains: [anvil, zksync, mainnet, sepolia],
  ssr: false,
});

export default config;
