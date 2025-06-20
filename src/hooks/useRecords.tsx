import { CONTRACT_ADDRESS } from "@/utils/constant";
import { parseAbi } from "viem";
import useUserAccount from "./useUserAccount";
import { useContractRead } from "./useContractRead";

const abi = parseAbi([
  "function patientMedicalRecords() view returns (uint256[])",
]);

export default function useRecords() {
  const { address } = useUserAccount();

  const {
    data: tokenIds,
    isLoading,
    error,
  } = useContractRead<bigint[]>({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: "patientMedicalRecords",
    args: [],
    account: address,
  });

  return { tokenIds, isLoading, error };
}
