"use client";

import useUserAccount from "@/hooks/useUserAccount";
import { useUserRole } from "@/hooks/useUserRole";
import { Role } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function WalletRedirect() {
  const { address } = useUserAccount();
  const { role: roleNumber, isLoading } = useUserRole();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && roleNumber !== undefined) {
      if (roleNumber === Role.DOCTOR) {
        router.push("/dashboard/doctor");
      } else if (roleNumber === Role.PATIENT) {
        router.push("/dashboard/patient");
      } else if (roleNumber === Role.NONE) {
        router.push("/signup");
      }
    }
  }, [roleNumber, isLoading, router, address]);

  return null;
}
