import { Role } from "@/utils/constant";

export interface IRole {
  role: Role | undefined;
  isLoading: boolean;
  error: Error | null;
}
