import { IRole } from "@/interfaces/IRole";
import { CONTRACT_ADDRESS } from "@/utils/constant";
import { MEDICAL_CONTRACT_ABI } from "@/utils/contractAbi";
import { useWriteContract } from "wagmi";
import { useContractRead } from "./useContractRead";
import useUserAccount from "./useUserAccount";

export function useUserRole(): IRole {
  const { address } = useUserAccount();

  const {
    data: roleNumber,
    isLoading,
    error,
  } = useContractRead<number>({
    address: CONTRACT_ADDRESS,
    abi: MEDICAL_CONTRACT_ABI,
    functionName: "roles",
    args: address ? [address] : [],
    account: address,
  });

  return {
    role: roleNumber,
    isLoading,
    error,
  };
}

export function useRegisterAsPatient() {
  const { writeContract, isPending, error, isSuccess } = useWriteContract();

  const registerAsPatient = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: MEDICAL_CONTRACT_ABI,
      functionName: "registerAsPatient",
      args: [],
    });
  };

  return { registerAsPatient, isPending, error, isSuccess };
}

// Register as Doctor
export function useRegisterAsDoctor() {
  const { writeContract } = useWriteContract();

  const registerAsDoctor = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: MEDICAL_CONTRACT_ABI,
      functionName: "registerAsDoctor",
      args: [],
    });
  };

  return { registerAsDoctor };
}
