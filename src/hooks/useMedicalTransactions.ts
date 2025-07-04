import { CONTRACT_ADDRESS } from "@/utils/constant";
import { MEDICAL_CONTRACT_ABI } from "@/utils/contractAbi";
import { useWriteContract } from "wagmi";

export function useAddMedicalRecord() {
  const { writeContract } = useWriteContract();

  const addRecord = (patientAddress: `0x${string}`) => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: MEDICAL_CONTRACT_ABI,
      functionName: "addRecord",
      args: [patientAddress],
    });
  };

  return { addRecord };
}

export function useGrantPermission() {
  const { writeContract } = useWriteContract();

  const grantPermission = (doctorAddress: `0x${string}`) => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: MEDICAL_CONTRACT_ABI,
      functionName: "grantPermission",
      args: [doctorAddress],
    });
  };

  return { grantPermission };
}

export function useRevokePermission() {
  const { writeContract } = useWriteContract();

  const revokePermission = (doctorAddress: `0x${string}`) => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: MEDICAL_CONTRACT_ABI,
      functionName: "revokePermission",
      args: [doctorAddress],
    });
  };

  return { revokePermission };
}
