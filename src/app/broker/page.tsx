"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import Link from "next/link";

export default function BrokerDashboard() {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("broker");
  const [activePage, setActivePage] = useState("Dashboard");

  // Mock data for broker dashboard
  const stats = {
    pendingRequests: 12,
    approvedBookings: 45,
    totalCommission: 3250,
    conversionRate: 78,
  };

  const recentBookings = [
    {
      id: "BK112345",
      customer: "John Doe",
      car: "Tesla Model 3",
      dates: "Mar 17-20, 2025",
      status: "pending",
      commission: 85,
    },
    {
      id: "BK223456",
      customer: "Jane Smith",
      car: "BMW 5 Series",
      dates: "Mar 15-18, 2025",
      status: "approved",
      commission: 110,
    },
    {
      id: "BK334567",
      customer: "Michael Johnson",
      car: "Audi Q5",
      dates: "Mar 22-25, 2025",
      status: "pending",
      commission: 95,
    },
    {
      id: "BK445678",
      customer: "Emily Williams",
      car: "Mercedes-Benz E-Class",
      dates: "Mar 19-23, 2025",
      status: "approved",
      commission: 130,
    },
    {
      id: "BK556789",
      customer: "Robert Brown",
      car: "Tesla Model S",
      dates: "Mar 25-28, 2025",
      status: "pending",
      commission: 120,
    },
  ];

  // Helper function to get status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-500 text-white";
      case "pending":
        return "bg-yellow-500 text-white";
      case "rejected":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  // Handle user type change
  const handleUserTypeChange = (type: "customer" | "broker" | "admin") => {
    setUserType(type);
    if (type === "customer") {
      setActivePage("Dashboard");
    } else if (type === "broker") {
      setActivePage("Dashboard");
    } else {
      setActivePage("Dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      
      <div className="flex">
        <Sidebar 
          userType={userType} 
          activePage={activePage}
          onUserTypeChange={handleUserTypeChange} 
        />
        
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Broker Dashboard</h1>
            <p className="text-gray-400">Manage your car rental business</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-600 bg-opacity-25">
                  <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-sm font-medium text-gray-400">Pending Requests</h2>
                  <p className="text-2xl font-semibold">{stats.pendingRequests}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-600 bg-opacity-25">
                  <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-sm font-medium text-gray-400">Approved Bookings</h2>
                  <p className="text-2xl font-semibold">{stats.approvedBookings}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-600 bg-opacity-25">
                  <svg className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-sm font-medium text-gray-400">Total Commission</h2>
                  <p className="text-2xl font-semibold">${stats.totalCommission}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-600 bg-opacity-25">
                  <svg className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-sm font-medium text-gray-400">Conversion Rate</h2>
                  <p className="text-2xl font-semibold">{stats.conversionRate}%</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Bookings */}
          <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-lg font-medium">Recent Booking Requests</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Booking ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Customer</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Car</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Dates</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Commission</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{booking.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{booking.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{booking.car}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{booking.dates}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(booking.status)}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">${booking.commission}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <Link href={`/broker/requests/${booking.id}`} className="text-blue-500 hover:text-blue-400">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-700 bg-gray-800">
              <Link href="/broker/requests" className="text-blue-500 hover:text-blue-400 text-sm font-medium">
                View all requests →
              </Link>
            </div>
          </div>
          
          {/* Performance Chart Placeholder */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Monthly Performance</h2>
              <div className="flex space-x-3">
                <button className="inline-flex items-center px-2 py-1 border border-gray-600 text-sm font-medium rounded text-gray-300 bg-gray-700 hover:bg-gray-600">
                  This Month
                </button>
                <button className="inline-flex items-center px-2 py-1 border border-gray-600 text-sm font-medium rounded text-gray-300 bg-gray-700 hover:bg-gray-600">
                  Last 3 Months
                </button>
                <button className="inline-flex items-center px-2 py-1 border border-gray-600 text-sm font-medium rounded text-gray-300 bg-gray-700 hover:bg-gray-600">
                  Year to Date
                </button>
              </div>
            </div>
            <div className="h-64 bg-gray-700 rounded flex items-center justify-center">
              <p className="text-gray-400">Performance chart will be displayed here</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
