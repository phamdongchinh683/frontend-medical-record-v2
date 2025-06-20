import { Abi } from "viem";

export interface IUseContractReadProps {
  address: `0x${string}`;
  abi: Abi;
  functionName: string;
  args?: unknown[];
  account?: `0x${string}`;
}
