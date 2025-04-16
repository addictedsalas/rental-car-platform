"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import CarFilters from "@/components/ui/CarFilters";
import CarCard, { Car } from "@/components/ui/CarCard";

// Luxury car data based on the provided images
const mockCars: Car[] = [
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
  },
];

export default function CarsPage() {
  const searchParams = useSearchParams();
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("customer");
  const [filteredCars, setFilteredCars] = useState<Car[]>(mockCars);
  const [filters, setFilters] = useState({});
  const [activePage, setActivePage] = useState("Browse Cars");

  // Handle filter changes from the CarFilters component
  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    
    // Apply filters to cars
    let filtered = [...mockCars];
    
    if (newFilters.brand && newFilters.brand !== "All Brands") {
      filtered = filtered.filter(car => car.brand === newFilters.brand);
    }
    
    if (newFilters.model && newFilters.model !== "All Models") {
      filtered = filtered.filter(car => car.model === newFilters.model);
    }
    
    if (newFilters.priceMin) {
      filtered = filtered.filter(car => car.price >= parseInt(newFilters.priceMin));
    }
    
    if (newFilters.priceMax) {
      filtered = filtered.filter(car => car.price <= parseInt(newFilters.priceMax));
    }
    
    if (newFilters.type && newFilters.type !== "All Types") {
      filtered = filtered.filter(car => car.type === newFilters.type);
    }
    
    if (newFilters.color && newFilters.color !== "All Colors") {
      // This would be implemented if we had color data
    }
    
    setFilteredCars(filtered);
  };

  // Handle user type change
  const handleUserTypeChange = (type: "customer" | "broker" | "admin") => {
    setUserType(type);
    // Reset active page based on user type
    if (type === "customer") {
      setActivePage("Browse Cars");
    } else if (type === "broker") {
      setActivePage("Cars");
    } else {
      setActivePage("Cars");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      
      <div className="flex">
        <Sidebar 
          userType={userType} 
          activePage={activePage}
          onUserTypeChange={handleUserTypeChange} 
        />
        
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Luxury Car Collection</h1>
            <p className="text-gray-400">Experience the ultimate in automotive excellence</p>
          </div>
          
          {/* Horizontal filters */}
          <div className="mb-6">
            <CarFilters 
              userType={userType} 
              onFilterChange={handleFilterChange}
              horizontal={true}
            />
          </div>
          
          {/* Car grid */}
          <div className="flex-1">
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map(car => (
                  <CarCard 
                    key={car.id} 
                    car={car} 
                    userType={userType} 
                  />
                ))}
              </div>
            ) : (
              <div className="bg-gray-800 rounded-xl p-8 text-center">
                <h3 className="text-xl font-medium mb-2">No cars found</h3>
                <p className="text-gray-400 mb-4">Try adjusting your filters to find more options.</p>
                <button 
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  onClick={() => handleFilterChange({
                    brand: "All Brands",
                    model: "All Models",
                    priceMin: "",
                    priceMax: "",
                    type: "All Types",
                    color: "All Colors",
                    insurance: false,
                  })}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
