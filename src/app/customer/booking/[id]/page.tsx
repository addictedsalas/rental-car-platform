import { HydrateClient } from "~/trpc/server";
import Link from "next/link";

export default function BookingPage({ params }: { params: { id: string } }) {
  // Mock car data
  const car = {
    id: params.id,
    name: `Tesla Model ${params.id === "1" ? "3" : params.id === "2" ? "S" : "X"}`,
    category: "Electric",
    price: 110 + (parseInt(params.id) * 10),
    features: ["Electric", "Automatic", "5 Seats", "4 Doors"],
    location: "New York City",
    image: "/car-placeholder.jpg",
  };

  return (
    <HydrateClient>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            href={`/customer/cars/${car.id}`} 
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Car Details
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Rental Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700">
                    Pick-up Date
                  </label>
                  <input
                    type="date"
                    id="pickup-date"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="pickup-time" className="block text-sm font-medium text-gray-700">
                    Pick-up Time
                  </label>
                  <input
                    type="time"
                    id="pickup-time"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="return-date" className="block text-sm font-medium text-gray-700">
                    Return Date
                  </label>
                  <input
                    type="date"
                    id="return-date"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="return-time" className="block text-sm font-medium text-gray-700">
                    Return Time
                  </label>
                  <input
                    type="time"
                    id="return-time"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="pickup-location" className="block text-sm font-medium text-gray-700">
                    Pick-up Location
                  </label>
                  <input
                    type="text"
                    id="pickup-location"
                    defaultValue={car.location}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="return-location" className="block text-sm font-medium text-gray-700">
                    Return Location
                  </label>
                  <input
                    type="text"
                    id="return-location"
                    defaultValue={car.location}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Driver's License & Insurance</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="license-number" className="block text-sm font-medium text-gray-700 mb-2">
                    Driver's License Number
                  </label>
                  <input
                    type="text"
                    id="license-number"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Driver's License
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="space-y-1">
                      <div className="flex justify-center">
                        <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-600">
                        <label htmlFor="license-upload" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                          <span>Upload a file</span>
                          <input id="license-upload" name="license-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Insurance Card
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="space-y-1">
                      <div className="flex justify-center">
                        <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-600">
                        <label htmlFor="insurance-upload" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                          <span>Upload a file</span>
                          <input id="insurance-upload" name="insurance-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Payment Information</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="expiration"
                      placeholder="MM/YY"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      placeholder="123"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="name-on-card"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
              
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-gray-200 rounded-md mr-4">
                  {/* Car Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                    Car Image
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">{car.name}</h3>
                  <p className="text-sm text-gray-600">{car.category}</p>
                </div>
              </div>
              
              <div className="border-t border-b py-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span>Pick-up</span>
                  <span className="font-medium">Mar 17, 2025, 10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Return</span>
                  <span className="font-medium">Mar 20, 2025, 10:00 AM</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>3 days x ${car.price}/day</span>
                  <span>${car.price * 3}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance</span>
                  <span>$45</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span>${Math.round(car.price * 3 * 0.15)}</span>
                </div>
              </div>
              
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${car.price * 3 + 45 + Math.round(car.price * 3 * 0.15)}</span>
                </div>
              </div>
              
              <Link 
                href={`/customer/confirmation/${car.id}`}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Complete Booking
              </Link>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                By clicking "Complete Booking", you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
