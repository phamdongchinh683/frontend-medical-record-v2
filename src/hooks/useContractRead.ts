import { IResult } from "@/interfaces/IResult";
import { IUseContractReadProps } from "@/interfaces/IUseContractReadProps";
import { useReadContract } from "wagmi";

export function useContractRead<T>({
  address,
  abi,
  functionName,
  args = [],
  account,
}: IUseContractReadProps): IResult<T> {
  const { data, isLoading, error } = useReadContract({
    address,
    abi,
    functionName,
    args,
    account,
  });

  return { data: data as T, isLoading, error };
}
