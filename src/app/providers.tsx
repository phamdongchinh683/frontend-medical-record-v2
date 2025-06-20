"use client";

import config from "@/rainbowKitConfig"; // Import the configuration we created
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { WagmiProvider } from "wagmi";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  const queryClient = useMemo(() => new QueryClient(), []);

  useEffect(() => setMounted(true), []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{mounted ? children : null}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
