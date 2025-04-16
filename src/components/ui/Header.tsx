"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  userType?: "customer" | "broker" | "admin";
}

export default function Header({ userType = "customer" }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  
  return (
    <header className="bg-gray-900 text-white p-4 rounded-xl mb-6 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/murciLogo.png"
              alt="Murci Car Rental Logo"
              width={180}
              height={50}
              className="mr-2"
            />
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* User profile */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <div className="text-sm font-medium">Robert Scott</div>
              <div className="text-xs text-gray-400">Admin</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
              RS
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
