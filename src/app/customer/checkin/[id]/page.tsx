"use client";

import { useState } from "react";
import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
import Header from "~/components/ui/Header";
import Sidebar from "~/components/ui/Sidebar";

export default function CheckInPage({ params }: { params: { id: string } }) {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("customer");
  const activePage = "Check-In";

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

  // Mock booking data
  const booking = {
    id: "BK" + params.id + "12345",
    car: {
      id: params.id,
      name: `Tesla Model ${params.id === "1" ? "3" : params.id === "2" ? "S" : "X"}`,
      category: "Electric",
    },
    dates: {
      pickup: "Mar 17, 2025, 10:00 AM",
      return: "Mar 20, 2025, 10:00 AM",
    },
    location: "New York City",
  };

  return (
    <HydrateClient>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header userType={userType} />
        <div className="flex">
          <Sidebar userType={userType} activePage={activePage} onUserTypeChange={handleUserTypeChange} />
          <main className="flex-1 p-6">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <Link 
                  href={`/customer/trips`} 
                  className="text-blue-400 hover:text-blue-300"
                >
                  ← Back to My Trips
                </Link>
              </div>
              
              <h1 className="text-3xl font-bold mb-6">Car Check-In</h1>
              
              <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-md mr-4">
                    {/* Car Image Placeholder */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                      Car Image
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{booking.car.name}</h2>
                    <p className="text-gray-400">Booking #{booking.id}</p>
                    <p className="text-gray-400">Pickup: {booking.dates.pickup}</p>
                  </div>
                </div>
                
                <div className="bg-yellow-900 border border-yellow-800 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-300">Important</h3>
                      <div className="mt-2 text-sm text-yellow-200">
                        <p>
                          Please thoroughly inspect the car and document any existing damage before driving away. 
                          This will protect you from being charged for damage you didn't cause.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Inspection Checklist</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input type="checkbox" id="exterior" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700" />
                      <label htmlFor="exterior" className="ml-2 block text-gray-300">
                        I have inspected the exterior of the car
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="interior" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700" />
                      <label htmlFor="interior" className="ml-2 block text-gray-300">
                        I have inspected the interior of the car
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="lights" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700" />
                      <label htmlFor="lights" className="ml-2 block text-gray-300">
                        I have checked that all lights are working
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="tires" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700" />
                      <label htmlFor="tires" className="ml-2 block text-gray-300">
                        I have checked the tire condition
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="fuel" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700" />
                      <label htmlFor="fuel" className="ml-2 block text-gray-300">
                        I have noted the current fuel/charge level
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Upload Photos</h3>
                  <p className="text-gray-400 mb-4">
                    Please take clear photos of the car from all angles, including any existing damage.
                    We recommend taking at least 8 photos (front, back, both sides, all corners).
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                      <div key={index} className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
                        <div className="space-y-1">
                          <div className="flex justify-center">
                            <svg className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="text-xs text-gray-500">
                            Photo {index}
                          </div>
                          <label className="cursor-pointer text-xs text-blue-400 hover:text-blue-300">
                            Upload
                            <input type="file" accept="image/*" className="hidden" />
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Additional Notes</h3>
                  <textarea
                    rows={4}
                    className="w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
                    placeholder="Note any existing damage or concerns here..."
                  ></textarea>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Odometer Reading</h3>
                  <div className="flex items-center">
                    <input
                      type="number"
                      className="w-40 rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
                      placeholder="e.g., 12345"
                    />
                    <span className="ml-2 text-gray-400">miles</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-8">
                  <input type="checkbox" id="agreement" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700" />
                  <label htmlFor="agreement" className="ml-2 block text-gray-300">
                    I confirm that I have inspected the vehicle and documented its condition accurately.
                  </label>
                </div>
                
                <div className="flex justify-end">
                  <Link 
                    href={`/customer/trips`}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  >
                    Complete Check-In
                  </Link>
                </div>
              </div>
              
              <div className="bg-blue-900 border border-blue-800 rounded-lg p-6">
                <h2 className="text-lg font-bold mb-2">Check-In Instructions</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Walk around the car and inspect for any damage (scratches, dents, etc.).</li>
                  <li>Check the interior for cleanliness and functionality.</li>
                  <li>Ensure all lights, signals, and wipers are working properly.</li>
                  <li>Note the fuel/charge level.</li>
                  <li>Take clear photos of the car from all angles.</li>
                  <li>Document any existing damage in the notes section.</li>
                  <li>Record the current odometer reading.</li>
                  <li>Complete the check-in process by submitting this form.</li>
                </ol>
              </div>
            </div>
          </main>
        </div>
      </div>
    </HydrateClient>
  );
}
