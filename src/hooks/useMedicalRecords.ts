// src/hooks/useMedicalRecords.tsx
import { IAddress } from "@/interfaces/IAddress";
import { IResult } from "@/interfaces/IResult";
import { CONTRACT_ADDRESS } from "@/utils/constant";
import { MEDICAL_CONTRACT_ABI } from "@/utils/contractAbi";
import { useContractRead } from "./useContractRead";
import useUserAccount from "./useUserAccount";


export function usePatientMedicalRecords(): IResult<bigint[]> {
  const { address } = useUserAccount();

  return useContractRead<bigint[]>({
    address: CONTRACT_ADDRESS,
    abi: MEDICAL_CONTRACT_ABI,
    functionName: "patientMedicalRecords",
    args: [],
    account: address,
  });
}

export function useAuthorizedPatients(): IResult<IAddress[]> {
  const { address } = useUserAccount();

  return useContractRead<IAddress[]>({
    address: CONTRACT_ADDRESS,
    abi: MEDICAL_CONTRACT_ABI,
    functionName: "getAuthorizedPatients",
    args: [],
    account: address,
  });
}

export function usePatientRecords(
  patientAddress: `0x${string}`
): IResult<bigint[]> {
  const { address } = useUserAccount();

  return useContractRead<bigint[]>({
    address: CONTRACT_ADDRESS,
    abi: MEDICAL_CONTRACT_ABI,
    functionName: "getMedicalRecords",
    args: [patientAddress],
    account: address,
  });
}
