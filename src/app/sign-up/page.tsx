"use client";

import Button from "@/components/Button";
import {
  Benefits,
  MetaMaskSignUp,
  RoleSelection,
  SecurityNotice,
  StepIndicator,
  SuccessAction,
  WalletConnected,
} from "@/components/signup";
import { useRegisterAsPatient } from "@/hooks/useUserRole";
import { IAccountBalance } from "@/interfaces/IAccountBalance";
import benefits from "@/mocks/benefits.json";
import roleFeature from "@/mocks/rolesFeature.json";
import config from "@/rainbowKitConfig";
import { renderIcon } from "@/utils/iconMap";
import { getBalance } from "@wagmi/core";
import { useEffect, useState } from "react";

export default function SignUpPage() {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] =
    useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [account, setAccount] = useState<IAccountBalance>({
    address: "",
    balance: "",
  });
  const {
    registerAsPatient,
    isPending,
    error: registerError,
    isSuccess,
  } = useRegisterAsPatient();

  useEffect(() => {
    setIsMetaMaskInstalled(typeof window.ethereum !== "undefined");

    async function fetchAccount() {
      if (window.ethereum) {
        try {
          const accounts: string[] = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            const balanceResult = await getBalance(config, {
              address: accounts[0] as `0x${string}`,
            });
            setAccount({
              address: accounts[0],
              balance: balanceResult.value.toString(),
            });
          }
        } catch (err) {
          console.error(err);
        }
      }
    }

    fetchAccount();
  }, []);

  const handleConnectMetaMask = async () => {
    if (!window.ethereum) {
      setError(
        "MetaMask is not installed. Please install MetaMask to continue."
      );
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        });

        setAccount({
          address: accounts[0],
          balance: (parseInt(balance, 16) / Math.pow(10, 18)).toFixed(4),
        });

        setCurrentStep(3);
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to connect to MetaMask";
      setError(errorMessage);
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setCurrentStep(4);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (registerError) {
      setError(registerError.message || "Registration failed");
    }
  }, [registerError]);

  const roleSelectionProps = {
    roles: roleFeature.roles,
    setSelectedRole,
    setCurrentStep,
  };

  const metaMaskSignUpProps = {
    selectedRole,
    error,
    isMetaMaskInstalled,
    isConnecting,
    connectMetaMask: handleConnectMetaMask,
    setCurrentStep,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-pink-100 p-8">
          <StepIndicator currentStep={currentStep} />
          {currentStep === 1 && <RoleSelection {...roleSelectionProps} />}
          {currentStep === 2 && (
            <>
              <MetaMaskSignUp {...metaMaskSignUpProps} />
              <br />
              <Benefits benefits={benefits} />
            </>
          )}
          {currentStep === 3 && (
            <>
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-4">
                  {renderIcon("CheckCircle", {
                    className: "h-8 w-8 text-green-600",
                  })}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Wallet Connected
                </h2>
                <p className="text-gray-600">
                  {selectedRole === "patient"
                    ? "Please click the button below to register as patient"
                    : "Please click the button below to register as doctor"}
                </p>
              </div>
              <WalletConnected account={account} />
              <br />
              <Button
                type="submit"
                value={
                  isPending
                    ? "Registering..."
                    : selectedRole === "patient"
                    ? "Register as Patient"
                    : "Register as Doctor"
                }
                onClick={() => registerAsPatient()}
              />
            </>
          )}
          {isSuccess && currentStep === 4 && <SuccessAction />}
          <SecurityNotice />
        </div>
      </div>
    </div>
  );
}
