"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

// Smaller component for customer status badge
const CustomerStatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case "active": return "bg-green-500 text-white";
      case "new": return "bg-blue-500 text-white";
      case "inactive": return "bg-gray-500 text-white";
      case "vip": return "bg-purple-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };
  
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor()}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

// Mock customer data
const mockCustomers = [
  {
    id: "C-1001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    status: "active",
    totalBookings: 8,
    totalSpent: 1250,
    lastBooking: "Mar 15, 2025",
    joinedDate: "Jan 10, 2024",
    verificationStatus: "verified",
  },
  {
    id: "C-1002",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    phone: "+1 (555) 234-5678",
    status: "vip",
    totalBookings: 15,
    totalSpent: 3200,
    lastBooking: "Mar 12, 2025",
    joinedDate: "Nov 5, 2023",
    verificationStatus: "verified",
  },
  {
    id: "C-1003",
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "+1 (555) 345-6789",
    status: "active",
    totalBookings: 5,
    totalSpent: 950,
    lastBooking: "Mar 1, 2025",
    joinedDate: "Feb 20, 2024",
    verificationStatus: "verified",
  },
  {
    id: "C-1004",
    name: "Sarah Davis",
    email: "sarah.d@example.com",
    phone: "+1 (555) 456-7890",
    status: "new",
    totalBookings: 1,
    totalSpent: 200,
    lastBooking: "Mar 10, 2025",
    joinedDate: "Mar 5, 2025",
    verificationStatus: "pending",
  },
  {
    id: "C-1005",
    name: "David Wilson",
    email: "david.w@example.com",
    phone: "+1 (555) 567-8901",
    status: "inactive",
    totalBookings: 3,
    totalSpent: 650,
    lastBooking: "Jan 22, 2025",
    joinedDate: "Dec 10, 2023",
    verificationStatus: "verified",
  },
];

export default function BrokerCustomersPage() {
  const [customers, setCustomers] = useState(mockCustomers);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("broker");
  const activePage = "Customers";
  
  // Filter customers based on status and search term
  const filteredCustomers = customers.filter(customer => {
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter;
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  const handleUserTypeChange = (newUserType: "customer" | "broker" | "admin") => {
    setUserType(newUserType);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      
      <div className="flex">
        <Sidebar userType={userType} activePage={activePage} onUserTypeChange={handleUserTypeChange} />
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Customers</h2>
            
            <div className="flex space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search customers..."
                  className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <button className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 flex items-center hover:bg-gray-700 transition-colors">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter
              </button>
              
              <button className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 flex items-center hover:bg-gray-700 transition-colors">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Export
              </button>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-4 mb-6 flex flex-wrap items-center gap-3">
            <span className="text-sm text-gray-400">Status:</span>
            <button 
              className={`px-3 py-1 rounded-lg text-sm ${statusFilter === "all" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
              onClick={() => setStatusFilter("all")}
            >
              All
            </button>
            <button 
              className={`px-3 py-1 rounded-lg text-sm ${statusFilter === "active" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
              onClick={() => setStatusFilter("active")}
            >
              Active
            </button>
            <button 
              className={`px-3 py-1 rounded-lg text-sm ${statusFilter === "new" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
              onClick={() => setStatusFilter("new")}
            >
              New
            </button>
            <button 
              className={`px-3 py-1 rounded-lg text-sm ${statusFilter === "vip" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
              onClick={() => setStatusFilter("vip")}
            >
              VIP
            </button>
            <button 
              className={`px-3 py-1 rounded-lg text-sm ${statusFilter === "inactive" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
              onClick={() => setStatusFilter("inactive")}
            >
              Inactive
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-750">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Customer
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Bookings
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Total Spent
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Last Activity
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-750">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-lg font-medium text-white">
                              {customer.name.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium">{customer.name}</div>
                            <div className="text-sm text-gray-400">ID: {customer.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">{customer.email}</div>
                        <div className="text-sm text-gray-400">{customer.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <CustomerStatusBadge status={customer.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {customer.totalBookings}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        ${customer.totalSpent}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div>{customer.lastBooking}</div>
                        <div className="text-gray-400">Joined: {customer.joinedDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <Link href={`/broker/customers/${customer.id}`} className="text-blue-500 hover:text-blue-400">
                            View
                          </Link>
                          <button className="text-blue-500 hover:text-blue-400">
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredCustomers.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                No customers found matching your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
