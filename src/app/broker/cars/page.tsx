"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import { Car } from "@/components/ui/CarCard";

// Smaller component for car status badge
const CarStatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case "available": return "bg-green-900 text-green-500";
      case "booked": return "bg-blue-900 text-blue-500";
      case "maintenance": return "bg-yellow-900 text-yellow-500";
      case "inactive": return "bg-gray-800 text-gray-400";
      default: return "bg-gray-800 text-gray-400";
    }
  };
  
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor()}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

// Mock car data with additional broker-specific fields
const mockCars = [
  {
    id: "1",
    brand: "Toyota",
    model: "Camry",
    variant: "XSE",
    year: 2023,
    price: 25,
    image: "/cars/camry.jpg",
    status: "available",
    totalBookings: 12,
    revenue: 1450,
    rating: 4.8,
  },
  {
    id: "2",
    brand: "Honda",
    model: "Civic",
    variant: "Sport",
    year: 2022,
    price: 22,
    image: "/cars/civic.jpg",
    status: "available",
    totalBookings: 8,
    revenue: 980,
    rating: 4.5,
  },
  {
    id: "3",
    brand: "BMW",
    model: "3 Series",
    variant: "330i",
    year: 2023,
    price: 45,
    image: "/cars/bmw.jpg",
    status: "booked",
    totalBookings: 15,
    revenue: 2250,
    rating: 4.9,
  },
  {
    id: "4",
    brand: "Tesla",
    model: "Model 3",
    variant: "Long Range",
    year: 2023,
    price: 50,
    image: "/cars/tesla.jpg",
    status: "available",
    totalBookings: 10,
    revenue: 1800,
    rating: 4.7,
  },
  {
    id: "5",
    brand: "Mercedes",
    model: "C-Class",
    variant: "C300",
    year: 2022,
    price: 48,
    image: "/cars/mercedes.jpg",
    status: "maintenance",
    totalBookings: 6,
    revenue: 1200,
    rating: 4.6,
  },
];

export default function BrokerCarsPage() {
  const [cars, setCars] = useState(mockCars);
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("broker");
  const activePage = "Cars";
  
  // Filter cars based on status
  const filteredCars = statusFilter === "all" 
    ? cars 
    : cars.filter(car => car.status === statusFilter);
  
  // Sort cars based on selected option
  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "bookings":
        return b.totalBookings - a.totalBookings;
      case "revenue":
        return b.revenue - a.revenue;
      case "rating":
        return b.rating - a.rating;
      case "newest":
      default:
        return b.year - a.year;
    }
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
            <h2 className="text-2xl font-bold">My Cars</h2>
            
            <Link 
              href="/broker/cars/add" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Car
            </Link>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
            {/* Status filter */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Status:</span>
              <div className="flex space-x-2">
                <button 
                  className={`px-3 py-1 rounded-lg text-sm ${statusFilter === "all" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
                  onClick={() => setStatusFilter("all")}
                >
                  All
                </button>
                <button 
                  className={`px-3 py-1 rounded-lg text-sm ${statusFilter === "available" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
                  onClick={() => setStatusFilter("available")}
                >
                  Available
                </button>
                <button 
                  className={`px-3 py-1 rounded-lg text-sm ${statusFilter === "booked" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
                  onClick={() => setStatusFilter("booked")}
                >
                  Booked
                </button>
                <button 
                  className={`px-3 py-1 rounded-lg text-sm ${statusFilter === "maintenance" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
                  onClick={() => setStatusFilter("maintenance")}
                >
                  Maintenance
                </button>
              </div>
            </div>
            
            {/* Sort options */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Sort by:</span>
              <select 
                className="bg-gray-700 border-none rounded-lg px-3 py-1 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="bookings">Most Bookings</option>
                <option value="revenue">Highest Revenue</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-750">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Car
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Bookings
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Revenue
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Rating
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {sortedCars.map((car) => (
                    <tr key={car.id} className="hover:bg-gray-750">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-12 w-12 bg-gray-700 rounded-lg mr-3 flex-shrink-0"></div>
                          <div>
                            <div className="font-medium text-white">{car.brand} {car.model}</div>
                            <div className="text-sm text-gray-400">{car.variant}, {car.year}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-white">${car.price}/hour</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <CarStatusBadge status={car.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-white">{car.totalBookings}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-white">${car.revenue}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium text-white mr-1">{car.rating}</span>
                          <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex justify-end space-x-2">
                          <Link 
                            href={`/broker/cars/${car.id}`}
                            className="text-gray-400 hover:text-white"
                          >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </Link>
                          <Link 
                            href={`/broker/cars/${car.id}/edit`}
                            className="text-blue-500 hover:text-blue-400"
                          >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Link>
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
            
            {sortedCars.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-400">No cars found with the selected filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
