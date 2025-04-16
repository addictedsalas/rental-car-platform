"use client";

import { useState } from "react";
import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
import Header from "~/components/ui/Header";
import Sidebar from "~/components/ui/Sidebar";

export default function SearchResults() {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("customer");
  const activePage = "Search";

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

  // Mock car data
  const cars = [
    {
      id: 1,
      name: "Tesla Model 3",
      category: "Electric",
      price: 110,
      features: ["Electric", "Automatic", "5 Seats", "4 Doors"],
      location: "New York City",
      rating: 4.8,
    },
    {
      id: 2,
      name: "BMW X5",
      category: "SUV",
      price: 150,
      features: ["Gas", "Automatic", "5 Seats", "5 Doors"],
      location: "New York City",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Mercedes-Benz S-Class",
      category: "Luxury",
      price: 200,
      features: ["Gas", "Automatic", "5 Seats", "4 Doors"],
      location: "New York City",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Toyota Corolla",
      category: "Economy",
      price: 80,
      features: ["Gas", "Automatic", "5 Seats", "4 Doors"],
      location: "New York City",
      rating: 4.5,
    },
    {
      id: 5,
      name: "Honda CR-V",
      category: "SUV",
      price: 120,
      features: ["Gas", "Automatic", "5 Seats", "5 Doors"],
      location: "New York City",
      rating: 4.7,
    },
    {
      id: 6,
      name: "Ford Mustang",
      category: "Sports",
      price: 160,
      features: ["Gas", "Automatic", "4 Seats", "2 Doors"],
      location: "New York City",
      rating: 4.8,
    },
  ];

  return (
    <HydrateClient>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header userType={userType} />
        <div className="flex">
          <Sidebar userType={userType} activePage={activePage} onUserTypeChange={handleUserTypeChange} />
          <main className="flex-1 p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Search Results</h1>
              <Link 
                href="/customer" 
                className="text-blue-400 hover:text-blue-300"
              >
                Modify Search
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="w-full md:w-1/4">
                <div className="bg-gray-800 rounded-lg shadow-md p-6 sticky top-4">
                  <h2 className="text-xl font-bold mb-4">Filters</h2>
                  
                  <div className="mb-4">
                    <h3 className="font-medium mb-2">Price Range</h3>
                    <div className="flex items-center gap-2">
                      <input 
                        type="range" 
                        min="0" 
                        max="500" 
                        className="w-full accent-blue-500"
                      />
                    </div>
                    <div className="flex justify-between mt-1 text-gray-300">
                      <span>$0</span>
                      <span>$500</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-medium mb-2">Car Type</h3>
                    {['Economy', 'SUV', 'Luxury', 'Electric', 'Sports'].map((type) => (
                      <div key={type} className="flex items-center mb-2">
                        <input 
                          type="checkbox" 
                          id={`type-${type}`} 
                          className="mr-2 accent-blue-500"
                        />
                        <label htmlFor={`type-${type}`} className="text-gray-300">{type}</label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-medium mb-2">Features</h3>
                    {['Automatic', 'Manual', 'GPS', 'Bluetooth', 'Backup Camera'].map((feature) => (
                      <div key={feature} className="flex items-center mb-2">
                        <input 
                          type="checkbox" 
                          id={`feature-${feature}`} 
                          className="mr-2 accent-blue-500"
                        />
                        <label htmlFor={`feature-${feature}`} className="text-gray-300">{feature}</label>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
              
              {/* Search Results */}
              <div className="w-full md:w-3/4">
                <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{cars.length} cars found</span>
                    <div className="flex items-center">
                      <label htmlFor="sort" className="mr-2 text-gray-300">Sort by:</label>
                      <select 
                        id="sort" 
                        className="rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
                      >
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Rating: High to Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {cars.map((car) => (
                    <div key={car.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto bg-gray-700">
                          {/* Car Image Placeholder */}
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            Car Image
                          </div>
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold">{car.name}</h3>
                              <p className="text-sm text-gray-400">{car.category}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-blue-400">${car.price}/day</p>
                              <div className="flex items-center mt-1 text-gray-300">
                                <span className="text-yellow-500 mr-1">★</span>
                                <span>{car.rating} (42 reviews)</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <div className="flex flex-wrap gap-2 mb-4">
                              {car.features.map((feature, index) => (
                                <span 
                                  key={index} 
                                  className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex justify-between items-center mt-4">
                              <p className="text-gray-300">
                                <span className="font-medium">Location:</span> {car.location}
                              </p>
                              <Link 
                                href={`/customer/cars/${car.id}`}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination */}
                <div className="mt-8 flex justify-center">
                  <nav className="inline-flex rounded-md shadow">
                    <a href="#" className="px-3 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700">
                      Previous
                    </a>
                    <a href="#" className="px-3 py-2 border-t border-b border-gray-700 bg-gray-800 text-blue-400 font-medium">
                      1
                    </a>
                    <a href="#" className="px-3 py-2 border-t border-b border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700">
                      2
                    </a>
                    <a href="#" className="px-3 py-2 border-t border-b border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700">
                      3
                    </a>
                    <a href="#" className="px-3 py-2 rounded-r-md border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700">
                      Next
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </HydrateClient>
  );
}
