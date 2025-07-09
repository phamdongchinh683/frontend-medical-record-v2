"use client";

import { useUserRole } from "@/hooks/useUserRole";
import { Role } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccountEffect } from "wagmi";

export function WalletRedirect() {
  const router = useRouter();
  const { role: roleNumber, isLoading } = useUserRole();

  useAccountEffect({
    onDisconnect: () => {
      router.push("/");
    },
  });

  useEffect(() => {
    if (roleNumber === Role.DOCTOR) {
      router.push("/dashboard/doctor");
    } else if (roleNumber === Role.PATIENT) {
      router.push("/dashboard/patient");
    } else if (roleNumber === Role.NONE) {
      router.push("/sign-up");
    }
  }, [roleNumber, isLoading, router]);

  return null;
}
