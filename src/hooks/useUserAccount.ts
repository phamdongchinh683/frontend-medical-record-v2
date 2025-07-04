import { IAddress } from "@/interfaces/IAddress";
import { useAccount } from "wagmi";

export default function useUserAccount(): IAddress {
  const { address } = useAccount();
  return { address };
}
