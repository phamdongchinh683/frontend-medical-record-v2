import { IRoleFeatureDescription } from "./IRoleFeatureDescription";

export interface IRoleSelection {
  roles: IRoleFeatureDescription[];
  setSelectedRole: (role: string) => void;
  setCurrentStep: (step: number) => void;
}
