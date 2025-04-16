"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

// Mock data for users
const mockUsers = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    role: "broker",
    status: "active",
    registeredDate: "Mar 10, 2025",
    carsListed: 8,
    totalBookings: 34,
    revenue: 4250,
    avatar: "/avatars/avatar-1.jpg"
  },
  {
    id: "2",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    role: "broker",
    status: "active",
    registeredDate: "Feb 15, 2025",
    carsListed: 12,
    totalBookings: 56,
    revenue: 7800,
    avatar: "/avatars/avatar-2.jpg"
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.b@example.com",
    role: "broker",
    status: "inactive",
    registeredDate: "Jan 22, 2025",
    carsListed: 5,
    totalBookings: 18,
    revenue: 2100,
    avatar: "/avatars/avatar-3.jpg"
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah.w@example.com",
    role: "broker",
    status: "pending",
    registeredDate: "Mar 05, 2025",
    carsListed: 3,
    totalBookings: 7,
    revenue: 950,
    avatar: "/avatars/avatar-4.jpg"
  },
  {
    id: "5",
    name: "David Lee",
    email: "david.lee@example.com",
    role: "broker",
    status: "active",
    registeredDate: "Dec 12, 2024",
    carsListed: 15,
    totalBookings: 67,
    revenue: 9200,
    avatar: "/avatars/avatar-5.jpg"
  },
  {
    id: "6",
    name: "Jennifer Garcia",
    email: "jennifer.g@example.com",
    role: "broker",
    status: "active",
    registeredDate: "Jan 30, 2025",
    carsListed: 9,
    totalBookings: 41,
    revenue: 5300,
    avatar: "/avatars/avatar-6.jpg"
  },
  {
    id: "7",
    name: "Robert Martinez",
    email: "robert.m@example.com",
    role: "broker",
    status: "suspended",
    registeredDate: "Feb 08, 2025",
    carsListed: 7,
    totalBookings: 23,
    revenue: 3100,
    avatar: "/avatars/avatar-7.jpg"
  },
  {
    id: "8",
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    role: "broker",
    status: "active",
    registeredDate: "Mar 01, 2025",
    carsListed: 11,
    totalBookings: 48,
    revenue: 6700,
    avatar: "/avatars/avatar-8.jpg"
  }
];

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case "active": return "bg-green-900 text-green-500";
      case "inactive": return "bg-gray-800 text-gray-400";
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

export default function AdminUsersPage() {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("admin");
  const [users, setUsers] = useState(mockUsers);
  const [roleFilter, setRoleFilter] = useState("broker");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleUserTypeChange = (newUserType: "customer" | "broker" | "admin") => {
    setUserType(newUserType);
  };
  
  // Filter users based on role, status, and search term
  const filteredUsers = users
    .filter(user => roleFilter === "all" || user.role === roleFilter)
    .filter(user => statusFilter === "all" || user.status === statusFilter)
    .filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      
      <div className="flex">
        <Sidebar userType={userType} activePage="Users" onUserTypeChange={handleUserTypeChange} />
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Manage Users</h2>
            
            <div className="flex space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search users..."
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
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                >
                  <option value="all">All Roles</option>
                  <option value="broker">Brokers</option>
                  <option value="customer">Customers</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
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
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
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
                Add User
              </button>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-750">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      User
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Registered
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Cars Listed
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Bookings
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Revenue
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-750">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-700 mr-3 overflow-hidden">
                            {/* Placeholder for avatar */}
                            <div className="h-full w-full flex items-center justify-center text-lg font-bold text-white">
                              {user.name.charAt(0)}
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-white">{user.name}</div>
                            <div className="text-sm text-gray-400">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={user.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {user.registeredDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {user.carsListed}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {user.totalBookings}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        ${user.revenue.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex justify-end space-x-2">
                          <button className="text-gray-400 hover:text-white">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button className="text-blue-500 hover:text-blue-400">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button className="text-red-500 hover:text-red-400">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredUsers.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-400">No users found with the selected filters.</p>
              </div>
            )}
            
            <div className="bg-gray-750 px-6 py-3 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Showing <span className="font-medium text-white">{filteredUsers.length}</span> of <span className="font-medium text-white">{users.length}</span> users
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
          </div>
        </div>
      </div>
    </div>
  );
}
