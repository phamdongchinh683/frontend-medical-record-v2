"use client";
import { useUserRole } from "@/hooks/useUserRole";
import navigation from "@/mocks/navigation.json";
import { Role } from "@/utils/constant";
import Link from "next/link";

const navLink = (item: { name: string; href: string }) => {
  return (
    <Link
      key={item.name}
      href={item.href}
      className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-rose-100 hover:text-pink-600 transition-colors duration-200"
    >
      {item.name}
    </Link>
  );
};

export default function NavigationSection() {
  const { role: roleNumber } = useUserRole();

  return (
    <div className="hidden md:flex items-center space-x-2">
      {roleNumber == undefined || roleNumber === Role.NONE
        ? navigation.landingPage.map((item) => navLink(item))
        : null}
    </div>
  );
}
