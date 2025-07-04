export interface IMetaMaskSignUp {
  selectedRole: string;
  error: string | null;
  isMetaMaskInstalled: boolean;
  isConnecting: boolean;
  connectMetaMask: () => void;
  setCurrentStep: (step: number) => void;
}
