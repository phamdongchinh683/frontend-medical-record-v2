import { Role } from "@/utils/constant";

export interface IUserRole {
  role: Role | undefined;
  isLoading: boolean;
  error: Error | null;
}
