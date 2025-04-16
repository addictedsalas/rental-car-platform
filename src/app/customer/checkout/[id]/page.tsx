import { HydrateClient } from "~/trpc/server";
import Link from "next/link";

export default function CheckOutPage({ params }: { params: { id: string } }) {
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
    initialOdometer: 12345,
  };

  return (
    <HydrateClient>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link 
              href={`/customer/trips`} 
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to My Trips
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">Car Check-Out</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-md mr-4">
                {/* Car Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                  Car Image
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold">{booking.car.name}</h2>
                <p className="text-gray-600">Booking #{booking.id}</p>
                <p className="text-gray-600">Return: {booking.dates.return}</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Important</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Please thoroughly document the car's condition before returning it.
                      Take clear photos of all sides of the vehicle and note any new issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Return Checklist</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="checkbox" id="personal-items" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="personal-items" className="ml-2 block text-gray-700">
                    I have removed all personal items from the car
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="clean" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="clean" className="ml-2 block text-gray-700">
                    I have cleaned the interior of the car
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="fuel-level" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="fuel-level" className="ml-2 block text-gray-700">
                    I have refueled/recharged the car as required
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="keys" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="keys" className="ml-2 block text-gray-700">
                    I have all keys/key cards ready to return
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="damage" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="damage" className="ml-2 block text-gray-700">
                    I have documented any new damage or issues
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Upload Photos</h3>
              <p className="text-gray-600 mb-4">
                Please take clear photos of the car from all angles to document its condition upon return.
                We recommend taking at least 8 photos (front, back, both sides, all corners).
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <div key={index} className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <div className="space-y-1">
                      <div className="flex justify-center">
                        <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="text-xs text-gray-500">
                        Photo {index}
                      </div>
                      <label className="cursor-pointer text-xs text-blue-600 hover:text-blue-500">
                        Upload
                        <input type="file" accept="image/*" className="hidden" />
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Odometer Reading</h3>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="w-40 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., 12500"
                  />
                  <span className="ml-2 text-gray-600">miles</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Initial reading: {booking.initialOdometer} miles
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Fuel/Charge Level</h3>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option value="">Select level</option>
                  <option value="full">Full (100%)</option>
                  <option value="threequarters">Three-quarters (75%)</option>
                  <option value="half">Half (50%)</option>
                  <option value="quarter">Quarter (25%)</option>
                  <option value="empty">Empty (Less than 10%)</option>
                </select>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Additional Notes</h3>
              <textarea
                rows={4}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Note any new damage, issues, or concerns here..."
              ></textarea>
            </div>
            
            <div className="flex items-center mb-8">
              <input type="checkbox" id="agreement" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="agreement" className="ml-2 block text-gray-700">
                I confirm that I have documented the vehicle's condition accurately and returned it as required.
              </label>
            </div>
            
            <div className="flex justify-end">
              <Link 
                href={`/customer/trips`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Complete Check-Out
              </Link>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Check-Out Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Remove all personal belongings from the car.</li>
              <li>Ensure the car is clean and in good condition.</li>
              <li>Refuel/recharge the car as required by your rental agreement.</li>
              <li>Take clear photos of the car from all angles.</li>
              <li>Document the final odometer reading.</li>
              <li>Note the fuel/charge level.</li>
              <li>Report any new damage or issues in the notes section.</li>
              <li>Complete the check-out process by submitting this form.</li>
              <li>Return the keys to the designated location or representative.</li>
            </ol>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
