"use client";

import config from "@/rainbowKitConfig";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { WagmiProvider } from "wagmi";
import { WalletRedirect } from "./WalletRedirect";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  const queryClient = useMemo(() => new QueryClient(), []);

  const theme = useMemo(
    () =>
      lightTheme({
        accentColor: "#ec4899",
        accentColorForeground: "white",
        borderRadius: "medium",
        fontStack: "system",
      }),
    []
  );

  const wagmiConfig = useMemo(() => config, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={theme}>
          <WalletRedirect />
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
