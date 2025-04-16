"use client";

import { useState } from "react";
import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
import Header from "~/components/ui/Header";
import Sidebar from "~/components/ui/Sidebar";

export default function MyTripsPage() {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("customer");
  const activePage = "My Trips";

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
      id: "BK112345",
      carId: "1",
      car: {
        name: "Tesla Model 3",
        category: "Electric",
        image: "/placeholder.png",
      },
      dates: {
        pickup: "Mar 17, 2025, 10:00 AM",
        return: "Mar 20, 2025, 10:00 AM",
      },
      location: "New York City",
      status: "upcoming",
      price: 375,
    },
    {
      id: "BK223456",
      carId: "2",
      car: {
        name: "Tesla Model S",
        category: "Electric",
        image: "/placeholder.png",
      },
      dates: {
        pickup: "Apr 5, 2025, 9:00 AM",
        return: "Apr 8, 2025, 9:00 AM",
      },
      location: "Los Angeles",
      status: "pending",
      price: 420,
    },
    {
      id: "BK334567",
      carId: "3",
      car: {
        name: "BMW 5 Series",
        category: "Luxury",
        image: "/placeholder.png",
      },
      dates: {
        pickup: "Feb 10, 2025, 11:00 AM",
        return: "Feb 15, 2025, 11:00 AM",
      },
      location: "Chicago",
      status: "completed",
      price: 550,
    },
    {
      id: "BK445678",
      carId: "4",
      car: {
        name: "Audi Q5",
        category: "SUV",
        image: "/placeholder.png",
      },
      dates: {
        pickup: "Jan 22, 2025, 10:00 AM",
        return: "Jan 25, 2025, 10:00 AM",
      },
      location: "Miami",
      status: "cancelled",
      price: 390,
    },
  ];

  // Helper function to get status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Helper function to get status text
  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "Upcoming";
      case "pending":
        return "Pending Approval";
      case "completed":
        return "Completed";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  };

  // Helper function to get action buttons based on status
  const getActionButtons = (booking: any) => {
    switch (booking.status) {
      case "upcoming":
        return (
          <div className="space-y-2">
            <Link
              href={`/customer/checkin/${booking.carId}`}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded"
            >
              Check-In
            </Link>
            <button className="w-full bg-red-50 hover:bg-red-100 text-red-700 text-sm font-medium py-2 px-4 rounded">
              Cancel Booking
            </button>
          </div>
        );
      case "pending":
        return (
          <div className="space-y-2">
            <Link
              href={`/customer/confirmation/${booking.carId}`}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded"
            >
              View Details
            </Link>
            <button className="w-full bg-red-50 hover:bg-red-100 text-red-700 text-sm font-medium py-2 px-4 rounded">
              Cancel Request
            </button>
          </div>
        );
      case "completed":
        return (
          <Link
            href={`/customer/cars/${booking.carId}`}
            className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 px-4 rounded"
          >
            Book Again
          </Link>
        );
      default:
        return (
          <Link
            href={`/customer/confirmation/${booking.carId}`}
            className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 px-4 rounded"
          >
            View Details
          </Link>
        );
    }
  };

  return (
    <HydrateClient>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header userType={userType} />
        <div className="flex">
          <Sidebar userType={userType} activePage={activePage} onUserTypeChange={handleUserTypeChange} />
          <main className="flex-1 p-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">My Trips</h1>
                <Link
                  href="/customer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                  Find New Car
                </Link>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-700 mb-8">
                <nav className="-mb-px flex space-x-8">
                  <button className="border-blue-500 text-blue-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    All Bookings
                  </button>
                  <button className="border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Upcoming
                  </button>
                  <button className="border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Pending
                  </button>
                  <button className="border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Completed
                  </button>
                </nav>
              </div>

              {/* Bookings List */}
              <div className="space-y-6">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row">
                        {/* Car Image */}
                        <div className="w-full md:w-1/4 mb-4 md:mb-0">
                          <div className="bg-gray-700 rounded-lg h-40 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">Car Image</span>
                          </div>
                        </div>

                        {/* Booking Details */}
                        <div className="w-full md:w-2/4 md:px-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h2 className="text-xl font-bold mb-2">
                                {booking.car.name}
                              </h2>
                              <p className="text-gray-400 mb-1">
                                {booking.car.category}
                              </p>
                            </div>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(
                                booking.status,
                              )}`}
                            >
                              {getStatusText(booking.status)}
                            </span>
                          </div>

                          <div className="mt-4 space-y-2">
                            <div className="flex">
                              <svg
                                className="h-5 w-5 text-gray-400 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <div>
                                <p className="text-sm text-gray-400">Pick-up</p>
                                <p className="font-medium">{booking.dates.pickup}</p>
                              </div>
                            </div>

                            <div className="flex">
                              <svg
                                className="h-5 w-5 text-gray-400 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <div>
                                <p className="text-sm text-gray-400">Return</p>
                                <p className="font-medium">{booking.dates.return}</p>
                              </div>
                            </div>

                            <div className="flex">
                              <svg
                                className="h-5 w-5 text-gray-400 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="font-medium">{booking.location}</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <p className="text-gray-400">
                              Booking ID:{" "}
                              <span className="font-medium">{booking.id}</span>
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="w-full md:w-1/4 mt-6 md:mt-0 flex flex-col justify-between">
                          <div className="text-right mb-4">
                            <p className="text-sm text-gray-400">Total Price</p>
                            <p className="text-2xl font-bold">${booking.price}</p>
                          </div>

                          {getActionButtons(booking)}
                        </div>
                      </div>
                    </div>

                    {booking.status === "upcoming" && (
                      <div className="bg-blue-900 px-6 py-3 border-t border-blue-800">
                        <div className="flex items-center">
                          <svg
                            className="h-5 w-5 text-blue-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <p className="text-sm text-blue-300">
                            Your car will be ready for pickup on{" "}
                            <span className="font-medium">
                              {booking.dates.pickup}
                            </span>
                            . Don't forget to bring your driver's license and the
                            credit card used for booking.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* No bookings state */}
              {bookings.length === 0 && (
                <div className="text-center py-12 bg-gray-800 rounded-lg">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-white">
                    No bookings found
                  </h3>
                  <p className="mt-1 text-gray-400">
                    You haven't made any car rental bookings yet.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/customer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Find a Car to Rent
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </HydrateClient>
  );
}
