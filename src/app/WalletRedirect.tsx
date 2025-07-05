"use client";

import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccountEffect } from "wagmi";
import { Role } from "@/utils/constant";

export function WalletRedirect() {
  const router = useRouter();
  const { role: roleNumber } = useUserRole();

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
    } else {
      router.push("/sign-up");
    }
  }, [roleNumber, router]);
}
