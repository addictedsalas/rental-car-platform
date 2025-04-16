"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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

export default function BookingConfirmationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("customer");
  const [loading, setLoading] = useState(true);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  
  useEffect(() => {
    // In a real app, this would be an API call to get the booking details
    const carId = searchParams.get('carId');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    
    if (carId && startDate && endDate) {
      const car = mockCars.find(c => c.id === carId);
      
      if (car) {
        // Calculate booking duration
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        // Generate a random booking ID
        const bookingId = `BK-${Math.floor(10000 + Math.random() * 90000)}`;
        
        setBookingDetails({
          id: bookingId,
          car,
          startDate,
          endDate,
          duration: diffDays,
          totalPrice: car.price * diffDays,
          status: "confirmed",
          pickupLocation: "Downtown Branch",
          paymentMethod: "Credit Card (**** 1234)"
        });
        
        setLoading(false);
      } else {
        // Handle car not found
        router.push("/cars");
      }
    } else {
      // Handle missing parameters
      router.push("/cars");
    }
  }, [searchParams, router]);
  
  const handleUserTypeChange = (newUserType: "customer" | "broker" | "admin") => {
    setUserType(newUserType);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4">Processing your booking...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      
      <div className="flex">
        <Sidebar userType={userType} activePage="My Bookings" onUserTypeChange={handleUserTypeChange} />
        
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-900/30 rounded-xl p-6 mb-8 border border-green-500/30">
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full p-2 mr-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Booking Confirmed!</h2>
                  <p className="text-green-300">Your booking has been successfully processed.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-8">
              <div className="p-6 border-b border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Booking #{bookingDetails.id}</h2>
                  <span className="px-3 py-1 bg-green-900 text-green-500 text-sm font-medium rounded-full">
                    Confirmed
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                    <div className="h-48 bg-gray-700 rounded-lg relative overflow-hidden">
                      <img 
                        src={bookingDetails.car.image} 
                        alt={`${bookingDetails.car.brand} ${bookingDetails.car.model}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-lg font-bold mb-2">
                      {bookingDetails.car.brand} {bookingDetails.car.model} {bookingDetails.car.variant}
                    </h3>
                    <p className="text-gray-400 mb-4">{bookingDetails.car.year} • {bookingDetails.car.type}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-gray-400 text-sm">Pickup Date</p>
                        <p className="font-medium">
                          {new Date(bookingDetails.startDate).toLocaleDateString('en-US', { 
                            weekday: 'short', 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Return Date</p>
                        <p className="font-medium">
                          {new Date(bookingDetails.endDate).toLocaleDateString('en-US', { 
                            weekday: 'short', 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Duration</p>
                        <p className="font-medium">{bookingDetails.duration} days</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Pickup Location</p>
                        <p className="font-medium">{bookingDetails.pickupLocation}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-baseline border-t border-gray-700 pt-4">
                      <div>
                        <p className="text-gray-400 text-sm">Total Price</p>
                        <p className="text-2xl font-bold">${bookingDetails.totalPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">Payment Method</p>
                        <p className="font-medium">{bookingDetails.paymentMethod}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-4">What's Next?</h3>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Check your email</h4>
                    <p className="text-gray-400">We've sent a confirmation email with all the details of your booking.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Prepare for pickup</h4>
                    <p className="text-gray-400">Bring your driver's license, the credit card used for booking, and a valid ID to the pickup location.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Enjoy your luxury experience</h4>
                    <p className="text-gray-400">Our team will guide you through the vehicle features before you drive away.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <Link 
                href="/customer/bookings" 
                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-6 py-3 text-center transition-colors font-medium"
              >
                View My Bookings
              </Link>
              
              <Link 
                href="/cars" 
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-6 py-3 text-center transition-colors font-medium"
              >
                Browse More Cars
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
