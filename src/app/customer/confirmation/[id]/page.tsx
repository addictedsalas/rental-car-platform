import { HydrateClient } from "~/trpc/server";
import Link from "next/link";

export default function BookingConfirmation({ params }: { params: { id: string } }) {
  // Mock booking data
  const booking = {
    id: "BK" + params.id + "12345",
    status: "pending",
    car: {
      id: params.id,
      name: `Tesla Model ${params.id === "1" ? "3" : params.id === "2" ? "S" : "X"}`,
      category: "Electric",
      price: 110 + (parseInt(params.id) * 10),
    },
    dates: {
      pickup: "Mar 17, 2025, 10:00 AM",
      return: "Mar 20, 2025, 10:00 AM",
    },
    location: "New York City",
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
    },
    payment: {
      total: (110 + (parseInt(params.id) * 10)) * 3 + 45 + Math.round((110 + (parseInt(params.id) * 10)) * 3 * 0.15),
      method: "Credit Card (****1234)",
    },
    timeline: [
      {
        step: "Booking Submitted",
        date: "Mar 16, 2025, 10:05 PM",
        completed: true,
      },
      {
        step: "Broker Review",
        date: "Estimated: Mar 17, 2025",
        completed: false,
      },
      {
        step: "Company Approval",
        date: "Estimated: Mar 17, 2025",
        completed: false,
      },
      {
        step: "Ready for Pickup",
        date: "Mar 17, 2025, 10:00 AM",
        completed: false,
      },
    ],
  };

  return (
    <HydrateClient>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-2">Booking Submitted!</h1>
              <p className="text-gray-600">
                Your booking request has been submitted and is waiting for approval.
              </p>
            </div>
            
            <div className="border rounded-lg overflow-hidden mb-8">
              <div className="bg-blue-50 border-b px-6 py-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Booking #{booking.id}</h2>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    {booking.status === "pending" ? "Pending Approval" : booking.status}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-700 mb-2">Car Details</h3>
                    <p className="font-medium">{booking.car.name}</p>
                    <p className="text-gray-600">{booking.car.category}</p>
                    <p className="text-gray-600">${booking.car.price}/day</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-700 mb-2">Rental Period</h3>
                    <div className="space-y-1">
                      <div className="flex">
                        <span className="font-medium w-24">Pick-up:</span>
                        <span>{booking.dates.pickup}</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Return:</span>
                        <span>{booking.dates.return}</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Location:</span>
                        <span>{booking.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-700 mb-2">Customer Information</h3>
                    <div className="space-y-1">
                      <div className="flex">
                        <span className="font-medium w-16">Name:</span>
                        <span>{booking.customer.name}</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-16">Email:</span>
                        <span>{booking.customer.email}</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-16">Phone:</span>
                        <span>{booking.customer.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-700 mb-2">Payment Information</h3>
                    <div className="space-y-1">
                      <div className="flex">
                        <span className="font-medium w-24">Total:</span>
                        <span>${booking.payment.total}</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Method:</span>
                        <span>{booking.payment.method}</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Status:</span>
                        <span className="text-yellow-600">Authorized (Pending Approval)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Booking Timeline</h2>
              <div className="relative">
                {booking.timeline.map((step, index) => (
                  <div key={index} className="flex mb-6 last:mb-0">
                    <div className="flex flex-col items-center mr-4">
                      <div className={`rounded-full h-8 w-8 flex items-center justify-center ${
                        step.completed ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400"
                      }`}>
                        {step.completed ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          index + 1
                        )}
                      </div>
                      {index < booking.timeline.length - 1 && (
                        <div className={`h-full w-0.5 ${
                          step.completed ? "bg-blue-500" : "bg-gray-200"
                        }`} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold">{step.step}</h3>
                      <p className="text-sm text-gray-600">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-gray-600">
                We'll notify you via email when your booking is approved.
              </p>
              <div className="space-x-4">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  onClick={() => window.print()}
                >
                  Print Confirmation
                </button>
                <Link 
                  href="/customer"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">What's Next?</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Your booking request is being reviewed by the broker.</li>
              <li>Once the broker approves, the car rental company will review and finalize the approval.</li>
              <li>You'll receive a confirmation email when your booking is approved.</li>
              <li>Arrive at the pickup location at the scheduled time with your driver's license and the credit card used for booking.</li>
              <li>Complete the check-in process by taking photos of the car condition.</li>
              <li>Enjoy your rental!</li>
            </ol>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
