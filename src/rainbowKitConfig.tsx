"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "viem/chains";

const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!walletConnectProjectId) {
  throw new Error(
    "Error: NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is not defined. Please set it in your .env.local file"
  );
}

let configInstance: ReturnType<typeof getDefaultConfig> | null = null;

const getConfig = () => {
  if (!configInstance) {
    configInstance = getDefaultConfig({
      appName: "Medical Records DApp",
      projectId: walletConnectProjectId,
      chains: [sepolia],
      ssr: false,
    });
  }
  return configInstance;
};

export default getConfig();
