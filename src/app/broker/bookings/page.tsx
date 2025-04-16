"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

// Components to keep code blocks smaller
const BookingStatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case "active": return "bg-green-900 text-green-500";
      case "completed": return "bg-blue-900 text-blue-500";
      case "cancelled": return "bg-red-900 text-red-500";
      default: return "bg-gray-800 text-gray-400";
    }
  };
  
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor()}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const BookingItem = ({ booking }: { booking: any }) => {
  return (
    <tr className="hover:bg-gray-750">
      <td className="px-6 py-4 whitespace-nowrap">
        <Link href={`/broker/bookings/${booking.id}`} className="text-blue-500 hover:underline">
          #{booking.id}
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-700 mr-3"></div>
          <div>
            <div className="font-medium text-white">{booking.customerName}</div>
            <div className="text-sm text-gray-400">{booking.customerEmail}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="font-medium text-white">{booking.carBrand} {booking.carModel}</div>
        <div className="text-sm text-gray-400">{booking.carYear}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-white">
        {booking.pickupDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-white">
        {booking.returnDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <BookingStatusBadge status={booking.status} />
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
        </div>
      </td>
    </tr>
  );
};

// Mock data for approved bookings
const mockBookings = [
  {
    id: "BK-1234",
    customerName: "John Smith",
    customerEmail: "john.smith@example.com",
    carBrand: "Toyota",
    carModel: "Camry",
    carYear: 2023,
    pickupDate: "Mar 15, 2025 - 10:00 AM",
    returnDate: "Mar 18, 2025 - 6:00 PM",
    status: "active",
  },
  {
    id: "BK-1235",
    customerName: "Emily Johnson",
    customerEmail: "emily.j@example.com",
    carBrand: "Honda",
    carModel: "Civic",
    carYear: 2022,
    pickupDate: "Mar 12, 2025 - 9:00 AM",
    returnDate: "Mar 14, 2025 - 5:00 PM",
    status: "completed",
  },
  {
    id: "BK-1236",
    customerName: "Michael Brown",
    customerEmail: "michael.b@example.com",
    carBrand: "BMW",
    carModel: "3 Series",
    carYear: 2023,
    pickupDate: "Mar 20, 2025 - 11:00 AM",
    returnDate: "Mar 25, 2025 - 7:00 PM",
    status: "active",
  },
  {
    id: "BK-1237",
    customerName: "Sarah Davis",
    customerEmail: "sarah.d@example.com",
    carBrand: "Tesla",
    carModel: "Model 3",
    carYear: 2023,
    pickupDate: "Mar 10, 2025 - 8:00 AM",
    returnDate: "Mar 11, 2025 - 8:00 PM",
    status: "cancelled",
  },
  {
    id: "BK-1238",
    customerName: "David Wilson",
    customerEmail: "david.w@example.com",
    carBrand: "Mercedes",
    carModel: "C-Class",
    carYear: 2022,
    pickupDate: "Mar 22, 2025 - 10:00 AM",
    returnDate: "Mar 24, 2025 - 6:00 PM",
    status: "active",
  },
];

export default function ApprovedBookingsPage() {
  const [bookings, setBookings] = useState(mockBookings);
  const [statusFilter, setStatusFilter] = useState("all");
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("broker");
  const activePage = "Approved Bookings";
  
  // Filter bookings based on status
  const filteredBookings = statusFilter === "all" 
    ? bookings 
    : bookings.filter(booking => booking.status === statusFilter);
  
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
            <h2 className="text-2xl font-bold">Approved Bookings</h2>
            
            <div className="flex space-x-3">
              <div className="relative">
                <select 
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pr-8 appearance-none text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Bookings</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
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
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-750">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Booking ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Customer
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Car
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Pickup Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Return Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredBookings.map((booking) => (
                    <BookingItem key={booking.id} booking={booking} />
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredBookings.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-400">No bookings found with the selected filter.</p>
              </div>
            )}
            
            <div className="bg-gray-750 px-6 py-3 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Showing <span className="font-medium text-white">{filteredBookings.length}</span> of <span className="font-medium text-white">{bookings.length}</span> bookings
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
