"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

// Mock data for brokers
const mockBrokers = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    companyName: "Premier Auto Rentals",
    status: "verified",
    registeredDate: "Mar 10, 2025",
    carsListed: 8,
    totalBookings: 34,
    revenue: 4250,
    commissionRate: 15,
    avatar: "/avatars/avatar-1.jpg"
  },
  {
    id: "2",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    companyName: "LuxDrive Rentals",
    status: "verified",
    registeredDate: "Feb 15, 2025",
    carsListed: 12,
    totalBookings: 56,
    revenue: 7800,
    commissionRate: 12,
    avatar: "/avatars/avatar-2.jpg"
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.b@example.com",
    companyName: "EcoDrive Solutions",
    status: "pending",
    registeredDate: "Jan 22, 2025",
    carsListed: 5,
    totalBookings: 18,
    revenue: 2100,
    commissionRate: 15,
    avatar: "/avatars/avatar-3.jpg"
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah.w@example.com",
    companyName: "Urban Wheels",
    status: "pending",
    registeredDate: "Mar 05, 2025",
    carsListed: 3,
    totalBookings: 7,
    revenue: 950,
    commissionRate: 15,
    avatar: "/avatars/avatar-4.jpg"
  },
  {
    id: "5",
    name: "David Lee",
    email: "david.lee@example.com",
    companyName: "Executive Car Services",
    status: "verified",
    registeredDate: "Dec 12, 2024",
    carsListed: 15,
    totalBookings: 67,
    revenue: 9200,
    commissionRate: 10,
    avatar: "/avatars/avatar-5.jpg"
  },
  {
    id: "6",
    name: "Jennifer Garcia",
    email: "jennifer.g@example.com",
    companyName: "City Cruisers",
    status: "verified",
    registeredDate: "Jan 30, 2025",
    carsListed: 9,
    totalBookings: 41,
    revenue: 5300,
    commissionRate: 15,
    avatar: "/avatars/avatar-6.jpg"
  },
  {
    id: "7",
    name: "Robert Martinez",
    email: "robert.m@example.com",
    companyName: "Roadster Rentals",
    status: "suspended",
    registeredDate: "Feb 08, 2025",
    carsListed: 7,
    totalBookings: 23,
    revenue: 3100,
    commissionRate: 15,
    avatar: "/avatars/avatar-7.jpg"
  }
];

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case "verified": return "bg-green-900 text-green-500";
      case "pending": return "bg-yellow-900 text-yellow-500";
      case "suspended": return "bg-red-900 text-red-500";
      default: return "bg-gray-800 text-gray-400";
    }
  };
  
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor()}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

// Broker card component
const BrokerCard = ({ broker }: { broker: any }) => {
  return (
    <div className="bg-gray-750 rounded-xl overflow-hidden shadow-lg">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-14 w-14 rounded-full bg-gray-700 mr-4 overflow-hidden">
            {/* Placeholder for avatar */}
            <div className="h-full w-full flex items-center justify-center text-xl font-bold text-white">
              {broker.name.charAt(0)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{broker.name}</h3>
            <p className="text-gray-400">{broker.email}</p>
            <div className="mt-1">
              <StatusBadge status={broker.status} />
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-400 mb-1">Company</h4>
          <p className="text-white">{broker.companyName}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-1">Cars Listed</h4>
            <p className="text-white">{broker.carsListed}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-1">Total Bookings</h4>
            <p className="text-white">{broker.totalBookings}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-1">Revenue</h4>
            <p className="text-white">${broker.revenue.toLocaleString()}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-1">Commission Rate</h4>
            <p className="text-white">{broker.commissionRate}%</p>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
            View Details
          </button>
          <div className="flex space-x-2">
            <button className="p-1 text-gray-400 hover:text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button className="p-1 text-red-500 hover:text-red-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AdminBrokersPage() {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("admin");
  const [brokers, setBrokers] = useState(mockBrokers);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleUserTypeChange = (newUserType: "customer" | "broker" | "admin") => {
    setUserType(newUserType);
  };
  
  // Filter brokers based on status and search term
  const filteredBrokers = brokers
    .filter(broker => statusFilter === "all" || broker.status === statusFilter)
    .filter(broker => 
      broker.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      broker.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      broker.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      
      <div className="flex">
        <Sidebar userType={userType} activePage="Brokers" onUserTypeChange={handleUserTypeChange} />
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Manage Brokers</h2>
            
            <div className="flex space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search brokers..."
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pl-10 appearance-none text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select 
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pr-8 appearance-none text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="verified">Verified</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-2 flex items-center transition-colors">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Broker
              </button>
            </div>
          </div>
          
          {filteredBrokers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBrokers.map((broker) => (
                <BrokerCard key={broker.id} broker={broker} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-800 rounded-xl p-10 text-center">
              <p className="text-gray-400">No brokers found with the selected filters.</p>
            </div>
          )}
          
          {filteredBrokers.length > 0 && (
            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-gray-400">
                Showing <span className="font-medium text-white">{filteredBrokers.length}</span> of <span className="font-medium text-white">{brokers.length}</span> brokers
              </div>
              
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-700 rounded-md text-sm bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1 border border-blue-600 rounded-md text-sm bg-blue-600 text-white">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-700 rounded-md text-sm bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-700 rounded-md text-sm bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
