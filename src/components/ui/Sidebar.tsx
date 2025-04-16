"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidebarProps {
  userType: "customer" | "broker" | "admin";
  activePage?: string;
  onUserTypeChange?: (type: "customer" | "broker" | "admin") => void;
}

export default function Sidebar({ userType, activePage = "Dashboard", onUserTypeChange }: SidebarProps) {
  const [selectedUserType, setSelectedUserType] = useState<"customer" | "broker" | "admin">(userType);
  const router = useRouter();
  
  // Handle user type change
  const handleUserTypeChange = (type: "customer" | "broker" | "admin") => {
    setSelectedUserType(type);
    if (onUserTypeChange) {
      onUserTypeChange(type);
    }
    
    // Redirect to appropriate dashboard based on user type
    switch (type) {
      case "customer":
        router.push("/cars");
        break;
      case "broker":
        router.push("/broker/dashboard");
        break;
      case "admin":
        router.push("/admin/dashboard");
        break;
    }
  };
  
  // Menu items based on user type
  const getMenuItems = () => {
    switch (selectedUserType) {
      case "customer":
        return [
          /* { name: "Dashboard", icon: "dashboard", href: "/customer/dashboard" }, */
          { name: "Browse Cars", icon: "car", href: "/cars" },
          { name: "My Bookings", icon: "calendar", href: "/customer/bookings" },
          { name: "Favorites", icon: "heart", href: "/customer/favorites" },
          { name: "Messages", icon: "message", href: "/customer/messages" },
          { name: "Profile", icon: "user", href: "/customer/profile" },
        ];
      case "broker":
        return [
          { name: "Dashboard", icon: "dashboard", href: "/broker/dashboard" },
          { name: "Cars", icon: "car", href: "/broker/cars" },
          { name: "Bookings", icon: "calendar", href: "/broker/bookings" },
          { name: "Customers", icon: "users", href: "/broker/customers" },
          { name: "Earnings", icon: "money", href: "/broker/earnings" },
          /* { name: "Statistics", icon: "chart", href: "/broker/statistics" }, */
          { name: "Messages", icon: "message", href: "/broker/messages", badge: 3 },
          { name: "Settings", icon: "settings", href: "/broker/settings" },
        ];
      case "admin":
        return [
          { name: "Dashboard", icon: "dashboard", href: "/admin/dashboard" },
          { name: "Cars", icon: "car", href: "/admin/cars" },
          { name: "Brokers", icon: "users", href: "/admin/users" },
          /* { name: "Brokers", icon: "briefcase", href: "/admin/brokers" }, */
          { name: "Customers", icon: "users", href: "/broker/customers" },
          { name: "Bookings", icon: "calendar", href: "/admin/bookings" },
          { name: "Reports", icon: "report", href: "/admin/reports" },
          { name: "Settings", icon: "settings", href: "/admin/settings" },
        ];
      default:
        return [];
    }
  };
  
  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "dashboard":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        );
      case "car":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
        );
      case "calendar":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "heart":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case "message":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        );
      case "user":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case "users":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case "money":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "chart":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case "settings":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case "briefcase":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "report":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-gray-900 text-white h-full flex flex-col p-4 rounded-xl shadow-md">
      {/* User type selector for demo purposes */}
      <div className="mb-6 p-3 bg-gray-800 rounded-lg">
        <div className="flex text-xs mb-2 text-gray-400">
          <span>Demo Mode: Select User Type</span>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <button
            className={`px-2 py-1 rounded-lg text-xs ${selectedUserType === "customer" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            onClick={() => handleUserTypeChange("customer")}
          >
            Customer
          </button>
          <button
            className={`px-2 py-1 rounded-lg text-xs ${selectedUserType === "broker" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            onClick={() => handleUserTypeChange("broker")}
          >
            Broker
          </button>
          <button
            className={`px-2 py-1 rounded-lg text-xs ${selectedUserType === "admin" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            onClick={() => handleUserTypeChange("admin")}
          >
            Admin
          </button>
        </div>
      </div>
      
      {/* Menu items */}
      <nav>
        <ul className="space-y-1">
          {getMenuItems().map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg ${
                  activePage === item.name ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                <span className="mr-3">{getIcon(item.icon)}</span>
                <span>{item.name}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* User info at bottom */}
      <div className="mt-auto pt-6 border-t border-gray-800 mt-6">
        <div className="flex items-center px-4 py-3">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium mr-3">
            RS
          </div>
          <div>
            <div className="font-medium">Robert Scott</div>
            <div className="text-xs text-gray-400">Admin</div>
          </div>
        </div>
        <button className="w-full mt-2 flex items-center justify-center px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
}
