import { IAddress } from "@/interfaces/IAddress";
import { useAccount, useBalance } from "wagmi";

export default function useUserAccount(): IAddress {
  const { address } = useAccount();
  return { address };
}

export function useUserBalance() {
  const { address } = useAccount();
  const { data: balanceData, isLoading, error } = useBalance({
    address: address,
  });

  return {
    balance: balanceData?.formatted || "0",
    isLoading,
    error,
    address
  };
}
