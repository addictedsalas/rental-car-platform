"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

// Mock car data based on the provided images
const mockCars = [
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
    description: "Experience the thrill of driving a Ferrari F8 Tributo, featuring a twin-turbocharged V8 engine that delivers breathtaking performance and an unforgettable driving experience.",
    features: [
      "710 HP Twin-Turbo V8 Engine",
      "0-60 mph in 2.9 seconds",
      "Top Speed: 211 mph",
      "7-Speed Dual-Clutch Transmission",
      "Carbon Fiber Interior Package",
      "Premium Sound System",
      "Apple CarPlay Integration",
      "Adaptive Suspension"
    ],
    specifications: {
      engine: "3.9L Twin-Turbo V8",
      power: "710 hp @ 8,000 rpm",
      torque: "568 lb-ft @ 3,250 rpm",
      transmission: "7-Speed Dual-Clutch",
      drivetrain: "Rear-Wheel Drive",
      weight: "3,164 lbs",
      fuelEconomy: "15 city / 19 highway"
    }
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
    description: "The Rolls-Royce Cullinan Black Badge represents the pinnacle of luxury SUVs, combining effortless performance with unparalleled comfort and craftsmanship.",
    features: [
      "6.75L Twin-Turbo V12 Engine",
      "All-Wheel Drive",
      "Air Suspension with Terrain Recognition",
      "Starlight Headliner",
      "Bespoke Audio System",
      "Rear Theater Configuration",
      "Refrigerated Compartment",
      "Lambswool Floor Mats"
    ],
    specifications: {
      engine: "6.75L Twin-Turbo V12",
      power: "592 hp @ 5,000 rpm",
      torque: "664 lb-ft @ 1,700 rpm",
      transmission: "8-Speed Automatic",
      drivetrain: "All-Wheel Drive",
      weight: "6,069 lbs",
      fuelEconomy: "12 city / 20 highway"
    }
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
    description: "The Rolls-Royce Cullinan in elegant Silver finish offers a perfect blend of luxury, comfort, and capability, setting new standards in the ultra-luxury SUV segment.",
    features: [
      "6.75L Twin-Turbo V12 Engine",
      "All-Wheel Drive",
      "Panoramic Sunroof",
      "Starlight Headliner",
      "Bespoke Audio System",
      "Rear Privacy Suite",
      "Champagne Cooler",
      "Handcrafted Interior"
    ],
    specifications: {
      engine: "6.75L Twin-Turbo V12",
      power: "563 hp @ 5,000 rpm",
      torque: "627 lb-ft @ 1,600 rpm",
      transmission: "8-Speed Automatic",
      drivetrain: "All-Wheel Drive",
      weight: "5,986 lbs",
      fuelEconomy: "12 city / 20 highway"
    }
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
    description: "The Lamborghini Huracan Spider combines the exhilaration of open-air driving with the raw power and precision engineering that defines the Lamborghini brand.",
    features: [
      "5.2L V10 Engine",
      "0-60 mph in 3.1 seconds",
      "Top Speed: 201 mph",
      "7-Speed Dual-Clutch Transmission",
      "Retractable Soft Top",
      "Carbon Ceramic Brakes",
      "Drive Mode Selector",
      "Premium Sound System"
    ],
    specifications: {
      engine: "5.2L Naturally Aspirated V10",
      power: "631 hp @ 8,000 rpm",
      torque: "443 lb-ft @ 6,500 rpm",
      transmission: "7-Speed Dual-Clutch",
      drivetrain: "All-Wheel Drive",
      weight: "3,400 lbs",
      fuelEconomy: "13 city / 18 highway"
    }
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
    description: "The Lamborghini Huracan Evo Spider represents the next generation of open-top supercars, with enhanced aerodynamics, advanced technology, and breathtaking performance.",
    features: [
      "5.2L V10 Engine",
      "0-60 mph in 2.9 seconds",
      "Top Speed: 202 mph",
      "7-Speed Dual-Clutch Transmission",
      "Electrohydraulic Soft Top",
      "Lamborghini Dinamica Veicolo Integrata",
      "Carbon Fiber Components",
      "8.4-inch Touchscreen Interface"
    ],
    specifications: {
      engine: "5.2L Naturally Aspirated V10",
      power: "640 hp @ 8,000 rpm",
      torque: "443 lb-ft @ 6,500 rpm",
      transmission: "7-Speed Dual-Clutch",
      drivetrain: "All-Wheel Drive",
      weight: "3,399 lbs",
      fuelEconomy: "13 city / 18 highway"
    }
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
    description: "The Lamborghini Huracan Evo in striking Verde Mantis green combines Italian engineering excellence with unmistakable design, delivering an unforgettable driving experience.",
    features: [
      "5.2L V10 Engine",
      "0-60 mph in 2.9 seconds",
      "Top Speed: 202 mph",
      "7-Speed Dual-Clutch Transmission",
      "Magnetorheological Suspension",
      "Lamborghini Dynamic Steering",
      "Carbon Ceramic Brakes",
      "Performance Traction Control System"
    ],
    specifications: {
      engine: "5.2L Naturally Aspirated V10",
      power: "640 hp @ 8,000 rpm",
      torque: "443 lb-ft @ 6,500 rpm",
      transmission: "7-Speed Dual-Clutch",
      drivetrain: "All-Wheel Drive",
      weight: "3,350 lbs",
      fuelEconomy: "13 city / 18 highway"
    }
  }
];

export default function CarDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("customer");
  const [car, setCar] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  
  useEffect(() => {
    // In a real app, this would be an API call
    const selectedCar = mockCars.find(c => c.id === params.id);
    if (selectedCar) {
      setCar(selectedCar);
      setLoading(false);
    } else {
      // Handle car not found
      router.push("/cars");
    }
  }, [params.id, router]);
  
  const handleUserTypeChange = (newUserType: "customer" | "broker" | "admin") => {
    setUserType(newUserType);
  };
  
  // Function to render star rating
  const renderStarRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        
        {hasHalfStar && (
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="halfStarGradient">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#4B5563" />
              </linearGradient>
            </defs>
            <path fill="url(#halfStarGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4">Loading car details...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      
      <div className="flex">
        <Sidebar userType={userType} activePage="Browse Cars" onUserTypeChange={handleUserTypeChange} />
        
        <main className="flex-1 p-6">
          <div className="mb-6">
            <button 
              onClick={() => router.back()} 
              className="flex items-center text-blue-500 hover:text-blue-400 transition-colors"
            >
              <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Cars
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
            <div className="md:flex">
              <div className="md:w-1/2 h-80 md:h-auto relative">
                <img 
                  src={car.image} 
                  alt={`${car.brand} ${car.model}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-900 text-blue-500 text-sm font-medium rounded-full">
                    {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6 md:w-1/2">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h1 className="text-2xl font-bold">{car.brand} {car.model}</h1>
                    <p className="text-gray-400">{car.variant} • {car.year}</p>
                  </div>
                  <div className="flex items-center">
                    {renderStarRating(car.rating)}
                    <span className="ml-2 text-gray-400">{car.rating}/5</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{car.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">Type</p>
                    <p>{car.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Seats</p>
                    <p>{car.seats}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Transmission</p>
                    <p>{car.transmission}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Fuel</p>
                    <p>{car.fuel}</p>
                  </div>
                </div>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">${car.price}</span>
                  <span className="text-gray-400 ml-1">/day</span>
                </div>
                
                <div className="flex space-x-4">
                  <Link 
                    href={`/cars/${car.id}/book`}
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-3 text-center transition-colors font-medium"
                  >
                    Book Now
                  </Link>
                  <button className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="border-b border-gray-700">
              <div className="flex">
                <button 
                  className={`px-6 py-4 font-medium ${activeTab === 'overview' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`px-6 py-4 font-medium ${activeTab === 'features' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('features')}
                >
                  Features
                </button>
                <button 
                  className={`px-6 py-4 font-medium ${activeTab === 'specifications' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Specifications
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">About this {car.brand} {car.model}</h2>
                  <p className="text-gray-300 mb-6">{car.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-750 rounded-lg p-4">
                      <h3 className="font-bold mb-3">Performance</h3>
                      <p className="text-gray-300">
                        Experience the raw power and precision engineering that makes the {car.brand} {car.model} a true marvel of automotive excellence.
                      </p>
                    </div>
                    
                    <div className="bg-gray-750 rounded-lg p-4">
                      <h3 className="font-bold mb-3">Luxury Experience</h3>
                      <p className="text-gray-300">
                        Immerse yourself in the premium materials, cutting-edge technology, and meticulous craftsmanship that define luxury driving.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {car.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'specifications' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Technical Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                    <div>
                      <p className="text-gray-400 text-sm">Engine</p>
                      <p>{car.specifications.engine}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Power</p>
                      <p>{car.specifications.power}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Torque</p>
                      <p>{car.specifications.torque}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Transmission</p>
                      <p>{car.specifications.transmission}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Drivetrain</p>
                      <p>{car.specifications.drivetrain}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Weight</p>
                      <p>{car.specifications.weight}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Fuel Economy</p>
                      <p>{car.specifications.fuelEconomy}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
