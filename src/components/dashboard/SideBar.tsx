"use client";
import { renderIcon } from "@/utils/iconMap";

import navigation from "@/mocks/navigation.json";
import { Role } from "@/utils/constant";
import Link from "next/link";
import { useState } from "react";
export default function HeaderDashboard({ role }: { role: number }) {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <aside className="w-64 bg-white border-r border-pink-100 min-h-screen">
      <nav className="p-4 grid gap-2">
        {role === Role.PATIENT
          ? navigation.patientPage.map((item) => (
              <Link href={item.href} key={item.name}>
                <button
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === item.name
                      ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                      : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                  }`}
                >
                  {renderIcon(item.icon ?? "", { className: "h-5 w-5" })}
                  <span>{item.name}</span>
                </button>
              </Link>
            ))
          : role === Role.DOCTOR
          ? navigation.doctorPage.map((item) => (
              <Link href={item.href} key={item.name}>
                <button
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === item.name
                      ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                      : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                  }`}
                >
                  {renderIcon(item.icon ?? "", { className: "h-5 w-5" })}
                  <span>{item.name}</span>
                </button>
              </Link>
            ))
          : null}
      </nav>
    </aside>
  );
}
