"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MediCore EMR</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="connect-button-wrapper">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
