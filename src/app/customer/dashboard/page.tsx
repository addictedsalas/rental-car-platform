"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import { FaGasPump, FaCog, FaUsers, FaStar } from "react-icons/fa";

// Mock car data based on the provided images
const availableCars = [
  {
    id: "1",
    brand: "FERRARI",
    model: "F8 Tributo",
    variant: "Coupe",
    year: 2023,
    price: 1500,
    image: "/cars/f8 tributo.png",
    status: "premium",
    availability: "available",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 2,
    type: "Sports Car",
    rating: 4.9,
  },
  {
    id: "2",
    brand: "ROLLS ROYCE",
    model: "Cullinan",
    variant: "Black Badge",
    year: 2023,
    price: 1400,
    image: "/cars/cullinan.png",
    status: "premium",
    availability: "available",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 5,
    type: "Luxury SUV",
    rating: 4.8,
  },
  {
    id: "3",
    brand: "ROLLS ROYCE",
    model: "Cullinan",
    variant: "Silver",
    year: 2023,
    price: 1400,
    image: "/cars/cullinan silver.png",
    status: "premium",
    availability: "available",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 5,
    type: "Luxury SUV",
    rating: 4.9,
  },
  {
    id: "4",
    brand: "LAMBORGHINI",
    model: "Huracan",
    variant: "Spider",
    year: 2023,
    price: 1800,
    image: "/cars/Huracan spider.png",
    status: "premium",
    availability: "available",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 2,
    type: "Convertible",
    rating: 5.0,
  },
  {
    id: "5",
    brand: "LAMBORGHINI",
    model: "Huracan Evo",
    variant: "Spider",
    year: 2023,
    price: 1700,
    image: "/cars/huracan-evo-spider.png",
    status: "premium",
    availability: "available",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 2,
    type: "Convertible",
    rating: 4.8,
  },
  {
    id: "6",
    brand: "LAMBORGHINI",
    model: "Huracan Evo",
    variant: "Green",
    year: 2023,
    price: 1650,
    image: "/cars/green-huracan-evo.png",
    status: "premium",
    availability: "available",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 2,
    type: "Sports Car",
    rating: 4.7,
  }
];

// Mock data for upcoming bookings
const upcomingBookings = [
  {
    id: "BK-1234",
    carBrand: "FERRARI",
    carModel: "F8 Tributo",
    carYear: 2023,
    pickupDate: "Mar 25, 2025 - 10:00 AM",
    returnDate: "Mar 28, 2025 - 6:00 PM",
    status: "confirmed",
    image: "/cars/f8 tributo.png",
    price: 1500,
    location: "Downtown Luxury Branch"
  },
  {
    id: "BK-1235",
    carBrand: "LAMBORGHINI",
    carModel: "Huracan Spider",
    carYear: 2023,
    pickupDate: "Apr 10, 2025 - 9:00 AM",
    returnDate: "Apr 15, 2025 - 5:00 PM",
    status: "confirmed",
    image: "/cars/Huracan spider.png",
    price: 1800,
    location: "Airport VIP Terminal"
  }
];

// Mock data for recent rentals
const recentRentals = [
  {
    id: "BK-1230",
    carBrand: "ROLLS ROYCE",
    carModel: "Cullinan",
    carYear: 2023,
    pickupDate: "Mar 10, 2025 - 10:00 AM",
    returnDate: "Mar 12, 2025 - 6:00 PM",
    status: "completed",
    image: "/cars/cullinan.png",
    price: 1400,
    location: "Downtown Luxury Branch"
  },
  {
    id: "BK-1228",
    carBrand: "LAMBORGHINI",
    carModel: "Huracan Evo",
    carYear: 2023,
    pickupDate: "Feb 25, 2025 - 9:00 AM",
    returnDate: "Feb 28, 2025 - 5:00 PM",
    status: "completed",
    image: "/cars/green-huracan-evo.png",
    price: 1650,
    location: "Airport VIP Terminal"
  }
];

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case "confirmed": return "bg-green-900 text-green-500";
      case "completed": return "bg-blue-900 text-blue-500";
      case "cancelled": return "bg-red-900 text-red-500";
      case "in-progress": return "bg-yellow-900 text-yellow-500";
      default: return "bg-gray-800 text-gray-400";
    }
  };
  
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor()}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

// Booking card component
const BookingCard = ({ booking }: { booking: any }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div className="h-40 bg-gray-700 relative">
        {/* Car image */}
        <img 
          src={booking.image} 
          alt={`${booking.carBrand} ${booking.carModel}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-white">{booking.carBrand} {booking.carModel}</h3>
          <StatusBadge status={booking.status} />
        </div>
        <p className="text-gray-400 text-sm mb-2">{booking.carYear} • Booking #{booking.id}</p>
        
        <div className="space-y-2 mb-3">
          <div className="flex items-start">
            <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="text-sm text-white">Pickup: {booking.pickupDate}</p>
              <p className="text-sm text-white">Return: {booking.returnDate}</p>
            </div>
          </div>
          <div className="flex items-start">
            <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm text-white">{booking.location}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-700">
          <div>
            <span className="text-lg font-bold text-white">${booking.price}</span>
            <span className="text-gray-400 text-sm">/day</span>
          </div>
          <Link href={`/customer/bookings/${booking.id}`} className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

// Car card component for dashboard
const DashboardCarCard = ({ car }: { car: any }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-40">
        {car.status === "premium" && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-gradient-to-r from-amber-500 to-yellow-300 text-black text-xs font-bold rounded">
            PREMIUM
          </span>
        )}
        <Link href={`/cars/${car.id}`}>
          <div className="h-full w-full overflow-hidden">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
      </div>
      
      <div className="p-4">
        <Link href={`/cars/${car.id}`} className="block">
          <h3 className="text-lg font-bold text-white hover:text-blue-400 transition-colors">
            {car.brand} {car.model}
          </h3>
          <p className="text-gray-400 text-sm mb-2">{car.variant} • {car.year}</p>
        </Link>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span>{car.rating}/5</span>
          </div>
          <span className="text-gray-400">{car.type}</span>
        </div>
        
        <div className="flex items-baseline mb-3">
          <span className="text-xl font-bold text-white">${car.price}</span>
          <span className="text-gray-400 ml-1">/day</span>
        </div>
        
        <Link href={`/cars/${car.id}`} className="block w-full">
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function CustomerDashboardPage() {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("customer");
  
  const handleUserTypeChange = (newUserType: "customer" | "broker" | "admin") => {
    setUserType(newUserType);
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      
      <div className="flex">
        <Sidebar userType={userType} activePage="Dashboard" onUserTypeChange={handleUserTypeChange} />
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Welcome back, Alex</h2>
            
            <Link href="/cars" className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-2 flex items-center transition-colors">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Rent a Car
            </Link>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link href="/cars" className="bg-gray-800 rounded-xl p-6 shadow-lg hover:bg-gray-750 transition-colors">
              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">Browse Cars</h3>
                  <p className="text-sm text-gray-400">Find your perfect vehicle</p>
                </div>
              </div>
            </Link>
            
            <Link href="/customer/bookings" className="bg-gray-800 rounded-xl p-6 shadow-lg hover:bg-gray-750 transition-colors">
              <div className="flex items-center">
                <div className="bg-green-600 p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">My Bookings</h3>
                  <p className="text-sm text-gray-400">Manage your reservations</p>
                </div>
              </div>
            </Link>
            
            <Link href="/customer/messages" className="bg-gray-800 rounded-xl p-6 shadow-lg hover:bg-gray-750 transition-colors">
              <div className="flex items-center">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">Messages</h3>
                  <p className="text-sm text-gray-400">Contact car owners</p>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Featured Luxury Cars *
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Featured Luxury Cars</h3>
              <Link href="/cars" className="text-blue-500 hover:text-blue-400 text-sm">
                View All Cars
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {availableCars.slice(0, 3).map((car) => (
                <DashboardCarCard key={car.id} car={car} />
              ))}
            </div>
          </div>*/}
          
          {/* Upcoming Bookings */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Upcoming Bookings</h3>
              <Link href="/customer/bookings" className="text-blue-500 hover:text-blue-400 text-sm">
                View All
              </Link>
            </div>
            
            {upcomingBookings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-800 rounded-xl p-10 text-center">
                <p className="text-gray-400">You don't have any upcoming bookings.</p>
                <Link href="/cars" className="mt-4 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                  Browse Cars
                </Link>
              </div>
            )}
          </div>
          
          {/* Recent Rentals */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Recent Rentals</h3>
              <Link href="/customer/bookings?filter=completed" className="text-blue-500 hover:text-blue-400 text-sm">
                View All
              </Link>
            </div>
            
            {recentRentals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentRentals.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-800 rounded-xl p-10 text-center">
                <p className="text-gray-400">You haven't completed any rentals yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
