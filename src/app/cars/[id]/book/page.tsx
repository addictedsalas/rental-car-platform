"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
    locations: [
      "Downtown Branch",
      "Airport Terminal 1",
      "Luxury Mall Location"
    ]
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
    locations: [
      "Downtown Branch",
      "Airport Terminal 1",
      "Luxury Mall Location"
    ]
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
    locations: [
      "Downtown Branch",
      "Airport Terminal 1",
      "Luxury Mall Location"
    ]
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
    locations: [
      "Downtown Branch",
      "Airport Terminal 1",
      "Luxury Mall Location"
    ]
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
    locations: [
      "Downtown Branch",
      "Airport Terminal 1",
      "Luxury Mall Location"
    ]
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
    locations: [
      "Downtown Branch",
      "Airport Terminal 1",
      "Luxury Mall Location"
    ]
  }
];

export default function BookCarPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("customer");
  const [car, setCar] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [additionalServices, setAdditionalServices] = useState({
    insurance: true,
    chauffeur: false,
    delivery: false,
    childSeat: false
  });
  const [step, setStep] = useState(1);
  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTotalDays(diffDays);
      
      // Calculate total price
      let price = car ? car.price * diffDays : 0;
      
      // Add additional services
      if (additionalServices.insurance) price += 50 * diffDays;
      if (additionalServices.chauffeur) price += 200 * diffDays;
      if (additionalServices.delivery) price += 100;
      if (additionalServices.childSeat) price += 10 * diffDays;
      
      setTotalPrice(price);
    }
  }, [startDate, endDate, additionalServices, car]);

  const handleUserTypeChange = (newUserType: "customer" | "broker" | "admin") => {
    setUserType(newUserType);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      // Validate dates
      if (!startDate || !endDate || !pickupLocation) {
        alert("Please fill in all required fields");
        return;
      }
      
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (start >= end) {
        alert("End date must be after start date");
        return;
      }
      
      setStep(2);
    } else {
      // In a real app, this would submit the booking to an API
      router.push(`/customer/bookings/confirmation?carId=${params.id}&startDate=${startDate}&endDate=${endDate}`);
    }
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
              Back to Car Details
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2 p-6">
                <h1 className="text-2xl font-bold mb-2">Book {car.brand} {car.model}</h1>
                <p className="text-gray-400 mb-6">{car.variant} • {car.year}</p>
                
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-2">Car Details</h2>
                  <div className="grid grid-cols-2 gap-4">
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
                </div>
                
                <div>
                  <h2 className="text-lg font-bold mb-2">Pricing</h2>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${car.price}</span>
                    <span className="text-gray-400 ml-1">/day</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gray-750 p-6">
                <div className="mb-4">
                  <div className="flex mb-6">
                    <div className={`flex-1 pb-4 text-center ${step === 1 ? 'border-b-2 border-blue-500 text-blue-500' : 'border-b border-gray-700 text-gray-400'}`}>
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${step === 1 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'} mr-2`}>1</span>
                      Rental Details
                    </div>
                    <div className={`flex-1 pb-4 text-center ${step === 2 ? 'border-b-2 border-blue-500 text-blue-500' : 'border-b border-gray-700 text-gray-400'}`}>
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${step === 2 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'} mr-2`}>2</span>
                      Review & Pay
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    {step === 1 ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Pickup Date*</label>
                            <input 
                              type="date" 
                              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                              min={new Date().toISOString().split('T')[0]}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Return Date*</label>
                            <input 
                              type="date" 
                              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                              min={startDate || new Date().toISOString().split('T')[0]}
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Pickup Location*</label>
                          <select 
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                            required
                          >
                            <option value="">Select location</option>
                            {car.locations.map((location: string) => (
                              <option key={location} value={location}>{location}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Return Location</label>
                          <select 
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={returnLocation}
                            onChange={(e) => setReturnLocation(e.target.value)}
                          >
                            <option value="">Same as pickup</option>
                            {car.locations.map((location: string) => (
                              <option key={location} value={location}>{location}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Additional Services</label>
                          <div className="space-y-2">
                            <label className="flex items-center">
                              <input 
                                type="checkbox" 
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
                                checked={additionalServices.insurance}
                                onChange={(e) => setAdditionalServices({...additionalServices, insurance: e.target.checked})}
                              />
                              <span className="ml-2">Premium Insurance ($50/day)</span>
                            </label>
                            <label className="flex items-center">
                              <input 
                                type="checkbox" 
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
                                checked={additionalServices.chauffeur}
                                onChange={(e) => setAdditionalServices({...additionalServices, chauffeur: e.target.checked})}
                              />
                              <span className="ml-2">Professional Chauffeur ($200/day)</span>
                            </label>
                            <label className="flex items-center">
                              <input 
                                type="checkbox" 
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
                                checked={additionalServices.delivery}
                                onChange={(e) => setAdditionalServices({...additionalServices, delivery: e.target.checked})}
                              />
                              <span className="ml-2">Car Delivery to Your Location ($100)</span>
                            </label>
                            <label className="flex items-center">
                              <input 
                                type="checkbox" 
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
                                checked={additionalServices.childSeat}
                                onChange={(e) => setAdditionalServices({...additionalServices, childSeat: e.target.checked})}
                              />
                              <span className="ml-2">Child Seat ($10/day)</span>
                            </label>
                          </div>
                        </div>
                        
                        <button 
                          type="submit" 
                          className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-3 transition-colors font-medium"
                        >
                          Continue to Review
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-lg font-bold mb-3">Booking Summary</h2>
                          <div className="bg-gray-700 rounded-lg p-4 space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Car</span>
                              <span>{car.brand} {car.model} {car.variant}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Pickup Date</span>
                              <span>{new Date(startDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Return Date</span>
                              <span>{new Date(endDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Duration</span>
                              <span>{totalDays} days</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Pickup Location</span>
                              <span>{pickupLocation}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Return Location</span>
                              <span>{returnLocation || pickupLocation}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h2 className="text-lg font-bold mb-3">Price Breakdown</h2>
                          <div className="bg-gray-700 rounded-lg p-4 space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Base Rate (${car.price}/day × {totalDays} days)</span>
                              <span>${car.price * totalDays}</span>
                            </div>
                            
                            {additionalServices.insurance && (
                              <div className="flex justify-between">
                                <span className="text-gray-400">Premium Insurance ($50/day × {totalDays} days)</span>
                                <span>${50 * totalDays}</span>
                              </div>
                            )}
                            
                            {additionalServices.chauffeur && (
                              <div className="flex justify-between">
                                <span className="text-gray-400">Professional Chauffeur ($200/day × {totalDays} days)</span>
                                <span>${200 * totalDays}</span>
                              </div>
                            )}
                            
                            {additionalServices.delivery && (
                              <div className="flex justify-between">
                                <span className="text-gray-400">Car Delivery</span>
                                <span>$100</span>
                              </div>
                            )}
                            
                            {additionalServices.childSeat && (
                              <div className="flex justify-between">
                                <span className="text-gray-400">Child Seat ($10/day × {totalDays} days)</span>
                                <span>${10 * totalDays}</span>
                              </div>
                            )}
                            
                            <div className="pt-2 border-t border-gray-600 flex justify-between font-bold">
                              <span>Total</span>
                              <span>${totalPrice}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-4">
                          <button 
                            type="button" 
                            onClick={() => setStep(1)}
                            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-3 transition-colors font-medium"
                          >
                            Back
                          </button>
                          <button 
                            type="submit" 
                            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-3 transition-colors font-medium"
                          >
                            Confirm & Pay
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
