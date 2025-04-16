"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

export default function BrokerDashboard() {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("broker");
  const activePage = "Dashboard";

  const handleUserTypeChange = (newUserType: "customer" | "broker" | "admin") => {
    setUserType(newUserType);
  };

  // Mock data for broker dashboard
  const stats = [
    { label: "Total Cars", value: 12, icon: "car", change: "+2", changeType: "positive" },
    { label: "Active Bookings", value: 8, icon: "calendar", change: "+3", changeType: "positive" },
    { label: "Monthly Earnings", value: "$12,450", icon: "money", change: "+8%", changeType: "positive" },
    { label: "Customer Rating", value: "4.8", icon: "star", change: "+0.2", changeType: "positive" },
  ];

  const recentBookings = [
    {
      id: "B1001",
      customer: "John Smith",
      car: "Ferrari F8 Tributo",
      startDate: "2025-03-15",
      endDate: "2025-03-20",
      status: "active",
      amount: 7500,
      commission: 750,
    },
    {
      id: "B1002",
      customer: "Emma Johnson",
      car: "Lamborghini Huracan Spider",
      startDate: "2025-03-18",
      endDate: "2025-03-22",
      status: "upcoming",
      amount: 7200,
      commission: 720,
    },
    {
      id: "B1003",
      customer: "Michael Brown",
      car: "Rolls Royce Cullinan",
      startDate: "2025-03-10",
      endDate: "2025-03-15",
      status: "completed",
      amount: 7000,
      commission: 700,
    },
    {
      id: "B1004",
      customer: "Sarah Davis",
      car: "Lamborghini Huracan Evo",
      startDate: "2025-03-05",
      endDate: "2025-03-10",
      status: "completed",
      amount: 6800,
      commission: 680,
    },
  ];

  // Function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Function to render status badge
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return (
          <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded">
            Upcoming
          </span>
        );
      case "active":
        return (
          <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded">
            Active
          </span>
        );
      case "completed":
        return (
          <span className="px-2 py-1 bg-gray-500 text-white text-xs font-medium rounded">
            Completed
          </span>
        );
      case "cancelled":
        return (
          <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
            Cancelled
          </span>
        );
      default:
        return null;
    }
  };

  // Function to get icon for stats
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "car":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
        );
      case "calendar":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "money":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "star":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      default:
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      <div className="flex">
        <Sidebar userType={userType} activePage={activePage} onUserTypeChange={handleUserTypeChange} />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Broker Dashboard</h1>
            <p className="text-gray-400">Welcome back, manage your luxury car fleet and bookings</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-600 mr-4">
                    {getStatIcon(stat.icon)}
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">{stat.label}</h3>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
                <div className={`text-sm ${stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change} from last month
                </div>
              </div>
            ))}
          </div>
          
          {/* Recent Bookings */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Recent Bookings</h2>
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                View All
              </button>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-700">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Booking ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Car
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Dates
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Commission
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-750">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium">{booking.id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm">{booking.customer}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm">{booking.car}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm">
                            {formatDate(booking.startDate)} - {formatDate(booking.endDate)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {renderStatusBadge(booking.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium">${booking.amount}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-green-500">${booking.commission}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-500 hover:text-blue-400 mr-3">
                            View
                          </button>
                          {booking.status === "upcoming" && (
                            <button className="text-red-500 hover:text-red-400">
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Performance Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Monthly Earnings</h2>
              <div className="h-64 flex items-end justify-between space-x-2">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 w-8 h-32 rounded-t-md"></div>
                  <span className="text-xs mt-2">Jan</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 w-8 h-40 rounded-t-md"></div>
                  <span className="text-xs mt-2">Feb</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 w-8 h-36 rounded-t-md"></div>
                  <span className="text-xs mt-2">Mar</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 w-8 h-48 rounded-t-md"></div>
                  <span className="text-xs mt-2">Apr</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 w-8 h-52 rounded-t-md"></div>
                  <span className="text-xs mt-2">May</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 w-8 h-44 rounded-t-md"></div>
                  <span className="text-xs mt-2">Jun</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Car Performance</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Ferrari F8 Tributo</span>
                    <span className="text-sm text-gray-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Lamborghini Huracan Spider</span>
                    <span className="text-sm text-gray-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Rolls Royce Cullinan</span>
                    <span className="text-sm text-gray-400">78%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Lamborghini Huracan Evo</span>
                    <span className="text-sm text-gray-400">88%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
