"use client";

import useUserAccount from "@/hooks/useUserAccount";
import { useUserRole } from "@/hooks/useUserRole";
import { Role } from "@/utils/constant";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccountEffect } from "wagmi";

export function WalletRedirect() {
  const { address } = useUserAccount();
  const { role: roleNumber } = useUserRole();
  const router = useRouter();
  const pathname = usePathname();

  useAccountEffect({
    onDisconnect: () => {
      router.push("/");
    },
  });

  useEffect(() => {
    if (roleNumber === Role.DOCTOR && pathname !== "/dashboard/doctor") {
      router.push("/dashboard/doctor");
    } else if (
      roleNumber === Role.PATIENT &&
      pathname !== "/dashboard/patient"
    ) {
      router.push("/dashboard/patient");
    } else if (roleNumber === Role.NONE && pathname !== "/sign-up") {
      router.push("/sign-up");
    }
  }, [roleNumber, router, address, pathname]);

  return null;
}
