"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

export default function CustomerBookings() {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("customer");
  const activePage = "My Bookings";

  const handleUserTypeChange = (newUserType: "customer" | "broker" | "admin") => {
    setUserType(newUserType);
    // Redirect to the appropriate dashboard based on user type
    if (newUserType === "broker") {
      window.location.href = "/broker";
    } else if (newUserType === "admin") {
      window.location.href = "/admin";
    } else {
      window.location.href = "/customer";
    }
  };

  // Mock bookings data
  const bookings = [
    {
      id: "B001",
      carName: "Ferrari F8 Tributo",
      carImage: "/cars/f8 tributo.png",
      startDate: "2025-03-20",
      endDate: "2025-03-25",
      totalPrice: 7500,
      status: "upcoming",
      location: "New York City"
    },
    {
      id: "B002",
      carName: "Lamborghini Huracan Spider",
      carImage: "/cars/Huracan spider.png",
      startDate: "2025-04-05",
      endDate: "2025-04-10",
      totalPrice: 9000,
      status: "upcoming",
      location: "Miami"
    },
    {
      id: "B003",
      carName: "Rolls Royce Cullinan",
      carImage: "/cars/cullinan.png",
      startDate: "2025-02-15",
      endDate: "2025-02-20",
      totalPrice: 7000,
      status: "completed",
      location: "Los Angeles"
    },
    {
      id: "B004",
      carName: "Lamborghini Huracan Evo",
      carImage: "/cars/huracan-evo-spider.png",
      startDate: "2025-01-10",
      endDate: "2025-01-15",
      totalPrice: 8500,
      status: "completed",
      location: "Las Vegas"
    }
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      <div className="flex">
        <Sidebar userType={userType} activePage={activePage} onUserTypeChange={handleUserTypeChange} />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">My Bookings</h1>
            <p className="text-gray-400">View and manage your car rentals</p>
          </div>
          
          {/* Booking filters */}
          <div className="mb-6 bg-gray-800 rounded-lg p-4 flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              All Bookings
            </button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              Upcoming
            </button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              Active
            </button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              Completed
            </button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              Cancelled
            </button>
          </div>
          
          {/* Bookings list */}
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/4 h-48 md:h-auto relative">
                    <img
                      src={booking.carImage}
                      alt={booking.carName}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      {renderStatusBadge(booking.status)}
                    </div>
                  </div>
                  <div className="p-6 md:w-3/4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{booking.carName}</h3>
                        <p className="text-gray-400">Booking #{booking.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">${booking.totalPrice}</p>
                        <p className="text-xs text-gray-400">Total Price</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-gray-400 text-sm">Pickup Date</p>
                        <p className="font-medium">{formatDate(booking.startDate)}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Return Date</p>
                        <p className="font-medium">{formatDate(booking.endDate)}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Location</p>
                        <p className="font-medium">{booking.location}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Duration</p>
                        <p className="font-medium">
                          {Math.ceil((new Date(booking.endDate).getTime() - new Date(booking.startDate).getTime()) / (1000 * 60 * 60 * 24))} days
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Link 
                        href={`/customer/bookings/${booking.id}`}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        View Details
                      </Link>
                      
                      {booking.status === "upcoming" && (
                        <>
                          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                            Modify
                          </button>
                          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                            Cancel
                          </button>
                        </>
                      )}
                      
                      {booking.status === "completed" && (
                        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                          Write Review
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
