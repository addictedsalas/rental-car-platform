"use client";

import { useState } from "react";
import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
import Header from "~/components/ui/Header";
import Sidebar from "~/components/ui/Sidebar";

export default function CustomerHome() {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("customer");
  const activePage = "Dashboard";

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

  return (
    <HydrateClient>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header userType={userType} />
        <div className="flex">
          <Sidebar userType={userType} activePage={activePage} onUserTypeChange={handleUserTypeChange} />
          <main className="flex-1 p-6">
            <h1 className="text-3xl font-bold mb-6">Find Your Perfect Rental Car</h1>
            
            {/* Search Form */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    placeholder="City, Airport, etc."
                    className="w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-300">
                    Pick-up Date
                  </label>
                  <input
                    type="date"
                    id="pickup-date"
                    className="w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="return-date" className="block text-sm font-medium text-gray-300">
                    Return Date
                  </label>
                  <input
                    type="date"
                    id="return-date"
                    className="w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
                  />
                </div>
                
                <div className="flex items-end">
                  <Link 
                    href="/customer/search" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  >
                    Search Cars
                  </Link>
                </div>
              </form>
            </div>
            
            {/* Featured Cars */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Featured Cars</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-gray-700">
                      {/* Car Image Placeholder */}
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Car Image
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold">Tesla Model {id}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <div className="text-sm text-gray-400">
                          <p>Electric • Automatic</p>
                          <p>5 Seats • 4 Doors</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-blue-400">${100 + id * 10}/day</p>
                        </div>
                      </div>
                      <Link 
                        href={`/customer/cars/${id}`}
                        className="mt-4 block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Car Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Economy', 'SUV', 'Luxury', 'Electric'].map((category) => (
                  <div key={category} className="bg-gray-800 rounded-lg shadow-md p-4 text-center">
                    <div className="h-16 flex items-center justify-center">
                      <span className="text-3xl">🚗</span>
                    </div>
                    <h3 className="text-lg font-medium mt-2">{category}</h3>
                    <Link 
                      href={`/customer/search?category=${category.toLowerCase()}`}
                      className="mt-2 inline-block text-blue-400 hover:text-blue-300"
                    >
                      Browse Cars
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </HydrateClient>
  );
}
