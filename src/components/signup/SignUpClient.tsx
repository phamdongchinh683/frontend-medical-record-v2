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
import { useRegisterAsDoctor, useRegisterAsPatient } from "@/hooks/useUserRole";
import { IAccountBalance } from "@/interfaces/IAccountBalance";
import benefits from "@/mocks/benefits.json";
import roleFeature from "@/mocks/rolesFeature.json";
import config from "@/rainbowKitConfig";
import { renderIcon } from "@/utils/iconMap";
import { getBalance } from "@wagmi/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";

export default function SignUpClient() {
  const router = useRouter();
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
    isPending: isPendingPatient,
    error: registerErrorPatient,
    isSuccess: isSuccessPatient,
  } = useRegisterAsPatient();

  const {
    registerAsDoctor,
    isPending: isPendingDoctor,
    error: registerErrorDoctor,
    isSuccess: isSuccessDoctor,
  } = useRegisterAsDoctor();

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
          console.error("Error fetching account:", err);
        }
      }
    }

    fetchAccount();
  }, []);

  useEffect(() => {
    if (isSuccessPatient || isSuccessDoctor) {
      setCurrentStep(4);
      setTimeout(() => {
        router.push(`/dashboard/${selectedRole}`);
      }, 2000);
    }
  }, [isSuccessPatient, isSuccessDoctor, router]);

  useEffect(() => {
    const currentError =
      selectedRole === "patient" ? registerErrorPatient : registerErrorDoctor;
    if (currentError) {
      setError(currentError.message || "Registration failed");
    }
  }, [registerErrorPatient, registerErrorDoctor, selectedRole]);

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

  const handleRegistration = () => {
    if (selectedRole === "patient") {
      registerAsPatient();
    } else {
      registerAsDoctor();
    }
  };

  const getRegistrationButtonText = () => {
    const isPending =
      selectedRole === "patient" ? isPendingPatient : isPendingDoctor;
    return isPending ? "Registering..." : `Register`;
  };

  const isRegistrationSuccess =
    selectedRole === "patient" ? isSuccessPatient : isSuccessDoctor;

  const roleSelectionProps = {
    roles: roleFeature.roles,
    setSelectedRole,
    setCurrentStep,
    text: "Change",
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
            <div className="text-center">
              <div
                className="flex justify-end"
                onClick={() => setCurrentStep(2)}
              >
                {renderIcon("ArrowLeft", {
                  className: "h-8 w-8 text-gray-600",
                })}
              </div>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-4">
                {renderIcon("CheckCircle", {
                  className: "h-8 w-8 text-green-600",
                })}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Complete Your Profile
              </h2>
              <p className="text-gray-600">
                {selectedRole === "patient"
                  ? "Tell us about yourself to personalize your healthcare experience"
                  : "Provide your professional information to verify your credentials"}
              </p>
              <br />
              <WalletConnected account={account} />
              <br />
              <form onSubmit={handleRegistration} className="space-y-6">
                <PersonalInfo />
              </form>
              <div className="pt-3">
                <Button
                  type="submit"
                  value={getRegistrationButtonText()}
                  onClick={handleRegistration}
                />
              </div>
            </div>
          )}
          {isRegistrationSuccess && currentStep === 4 && <SuccessAction />}
          <SecurityNotice />
        </div>
      </div>
    </div>
  );
}
