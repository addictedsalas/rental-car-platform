import { HydrateClient } from "~/trpc/server";
import Link from "next/link";

export default function BookingRequestDetail({ params }: { params: { id: string } }) {
  // Mock data for the booking request
  const request = {
    id: params.id,
    status: "pending",
    createdAt: "Mar 16, 2025, 10:05 PM",
    car: {
      id: "1",
      name: "Tesla Model 3",
      category: "Electric",
      price: 120,
      image: "/placeholder.png",
    },
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      rating: 4.8,
      bookingsCount: 5,
      verificationStatus: "verified",
    },
    dates: {
      pickup: "Mar 17, 2025, 10:00 AM",
      return: "Mar 20, 2025, 10:00 AM",
      duration: 3,
    },
    location: "New York City",
    commission: 85,
    totalPrice: 420,
  };

  return (
    <HydrateClient>
      <main className="bg-gray-50 min-h-screen">
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden md:flex md:w-64 md:flex-col fixed inset-y-0">
            <div className="flex flex-col flex-grow bg-blue-700 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <span className="text-white text-xl font-bold">Car Rental Broker</span>
              </div>
              <div className="mt-8 flex-1 flex flex-col">
                <nav className="flex-1 px-2 space-y-1">
                  <Link href="/broker" className="text-blue-100 hover:bg-blue-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <svg className="mr-3 h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Dashboard
                  </Link>
                  <Link href="/broker/requests" className="bg-blue-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <svg className="mr-3 h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Booking Requests
                  </Link>
                  <Link href="/broker/bookings" className="text-blue-100 hover:bg-blue-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <svg className="mr-3 h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Approved Bookings
                  </Link>
                  <Link href="/broker/cars" className="text-blue-100 hover:bg-blue-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <svg className="mr-3 h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                    Available Cars
                  </Link>
                  <Link href="/broker/customers" className="text-blue-100 hover:bg-blue-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <svg className="mr-3 h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Customers
                  </Link>
                  <Link href="/broker/earnings" className="text-blue-100 hover:bg-blue-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <svg className="mr-3 h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Earnings
                  </Link>
                  <Link href="/broker/settings" className="text-blue-100 hover:bg-blue-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <svg className="mr-3 h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="md:pl-64 flex flex-col flex-1">
            {/* Top navigation */}
            <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
              <div className="flex-1 px-4 flex justify-between">
                <div className="flex-1 flex items-center">
                  <Link href="/broker/requests" className="mr-4 text-blue-600 hover:text-blue-800">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </Link>
                  <h1 className="text-2xl font-semibold text-gray-900">Booking Request #{request.id}</h1>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>

                  {/* Profile dropdown */}
                  <div className="ml-3 relative">
                    <div>
                      <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <span className="inline-flex h-8 w-8 rounded-full bg-gray-200 items-center justify-center">
                          <span className="text-sm font-medium leading-none text-gray-500">JD</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <main className="flex-1 pb-8">
              <div className="mt-6 px-4 sm:px-6 lg:px-8">
                {/* Status header */}
                <div className="bg-white shadow rounded-lg p-6 mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{request.car.name}</h2>
                        <div className="flex items-center mt-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                            Pending Review
                          </span>
                          <span className="text-sm text-gray-500">Requested on {request.createdAt}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="text-right mb-2">
                        <span className="text-sm text-gray-500">Your Commission</span>
                        <p className="text-2xl font-bold text-green-600">${request.commission}</p>
                      </div>
                      <div className="flex space-x-3 justify-end">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          Reject
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Request Details and Customer Information Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Car Details */}
                  <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-lg font-medium text-gray-900 mb-4">Car Details</h2>
                      <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
                        <div className="flex items-center justify-center h-48 text-gray-500">Car Image</div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Car Model</p>
                          <p className="font-medium">{request.car.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Category</p>
                          <p className="font-medium">{request.car.category}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Daily Rate</p>
                          <p className="font-medium">${request.car.price}/day</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-lg font-medium text-gray-900 mb-4">Booking Details</h2>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm text-gray-500">Pickup Date</p>
                          </div>
                          <p className="font-medium ml-7">{request.dates.pickup}</p>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm text-gray-500">Return Date</p>
                          </div>
                          <p className="font-medium ml-7">{request.dates.return}</p>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-sm text-gray-500">Location</p>
                          </div>
                          <p className="font-medium ml-7">{request.location}</p>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm text-gray-500">Duration</p>
                          </div>
                          <p className="font-medium ml-7">{request.dates.duration} days</p>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex justify-between mb-2">
                          <p className="text-sm text-gray-500">Daily Rate</p>
                          <p className="font-medium">${request.car.price}</p>
                        </div>
                        <div className="flex justify-between mb-2">
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-medium">x {request.dates.duration} days</p>
                        </div>
                        <div className="flex justify-between mb-2">
                          <p className="text-sm text-gray-500">Subtotal</p>
                          <p className="font-medium">${request.car.price * request.dates.duration}</p>
                        </div>
                        <div className="flex justify-between mb-2">
                          <p className="text-sm text-gray-500">Fees & Taxes</p>
                          <p className="font-medium">${request.totalPrice - (request.car.price * request.dates.duration)}</p>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-gray-200">
                          <p className="font-medium">Total Price</p>
                          <p className="font-bold">${request.totalPrice}</p>
                        </div>
                        <div className="flex justify-between pt-2 mt-2 border-t border-gray-200">
                          <p className="font-medium text-green-600">Your Commission</p>
                          <p className="font-bold text-green-600">${request.commission}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-lg font-medium text-gray-900 mb-4">Customer Information</h2>
                      <div className="flex items-center mb-6">
                        <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                          <span className="text-xl font-medium text-gray-600">
                            {request.customer.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">{request.customer.name}</h3>
                          <div className="flex items-center">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="ml-1 text-sm text-gray-600">{request.customer.rating}</span>
                            </span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-sm text-gray-600">{request.customer.bookingsCount} previous bookings</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7-7 7 7M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm text-gray-500">Email</p>
                          </div>
                          <p className="font-medium ml-7">{request.customer.email}</p>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <p className="text-sm text-gray-500">Phone</p>
                          </div>
                          <p className="font-medium ml-7">{request.customer.phone}</p>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0H9m-4 0H5m-4 0V5a2 2 0 012-2h14a2 2 0 012 2v1m-4 0a2 2 0 01-2 2h-2a2 2 0 01-2-2M9 13h6m-3 0V8m-3 0H5" />
                            </svg>
                            <p className="text-sm text-gray-500">ID Verification</p>
                          </div>
                          <p className="font-medium ml-7 flex items-center">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              request.customer.verificationStatus === "verified" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {request.customer.verificationStatus === "verified" ? "Verified" : "Pending"}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          View Customer History
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Document Review and Communication Log */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Document Review */}
                  <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-lg font-medium text-gray-900 mb-4">Document Review</h2>
                      
                      <div className="space-y-6">
                        {/* Driver's License */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-gray-900">Driver's License</h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Verified
                            </span>
                          </div>
                          <div className="border border-gray-200 rounded-lg p-2 flex items-center justify-between">
                            <div className="flex items-center">
                              <svg className="h-8 w-8 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <div>
                                <p className="text-sm font-medium text-gray-900">License_ID_123456.jpg</p>
                                <p className="text-xs text-gray-500">Uploaded Mar 16, 2025</p>
                              </div>
                            </div>
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              View
                            </button>
                          </div>
                        </div>
                        
                        {/* Additional Documents */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-gray-900">Additional Documents</h3>
                          </div>
                          <div className="border border-gray-200 rounded-lg p-2 flex items-center justify-between">
                            <div className="flex items-center">
                              <svg className="h-8 w-8 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <div>
                                <p className="text-sm font-medium text-gray-900">Insurance_Certificate.pdf</p>
                                <p className="text-xs text-gray-500">Uploaded Mar 16, 2025</p>
                              </div>
                            </div>
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              View
                            </button>
                          </div>
                        </div>
                        
                        {/* Notes from Customer */}
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 mb-2">Customer Notes</h3>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600">
                              I'll be in town for a business conference and need a reliable car for getting around. 
                              I've rented Tesla models before and am familiar with electric vehicles. 
                              Please let me know if there are any charging stations near the pickup location.
                            </p>
                          </div>
                        </div>
                        
                        {/* Decision Actions */}
                        <div className="pt-4 border-t border-gray-200">
                          <h3 className="text-sm font-medium text-gray-900 mb-3">Decision</h3>
                          <div className="flex flex-col space-y-3">
                            <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Approve Booking Request
                            </button>
                            <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              Reject Booking Request
                            </button>
                            <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              <svg className="mr-2 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Request More Information
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Communication Log */}
                  <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-lg font-medium text-gray-900 mb-4">Communication Log</h2>
                      
                      <div className="space-y-4 max-h-96 overflow-y-auto mb-4">
                        {/* System Message */}
                        <div className="flex">
                          <div className="flex-shrink-0 mr-3">
                            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                              <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3 flex-1">
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-medium text-gray-500">System</p>
                              <p className="text-xs text-gray-400">Mar 16, 2025, 10:05 PM</p>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              Booking request #123456 has been created and is pending your review.
                            </p>
                          </div>
                        </div>
                        
                        {/* Customer Message */}
                        <div className="flex">
                          <div className="flex-shrink-0 mr-3">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-xs font-medium text-blue-600">JD</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3 flex-1">
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-medium text-blue-600">John Doe</p>
                              <p className="text-xs text-gray-400">Mar 16, 2025, 10:10 PM</p>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              Hello, I've submitted all the required documents. Please let me know if you need anything else from me.
                            </p>
                          </div>
                        </div>
                        
                        {/* Empty State */}
                        {false && (
                          <div className="text-center py-8">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <p className="mt-2 text-sm text-gray-500">No messages yet</p>
                          </div>
                        )}
                      </div>
                      
                      {/* Message Input */}
                      <div className="mt-4">
                        <div className="relative">
                          <textarea
                            rows={3}
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Type a message to the customer..."
                          ></textarea>
                          <div className="absolute bottom-2 right-2 flex">
                            <button className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <p className="mt-2 text-xs text-gray-500">
                          Your message will be sent to the customer's email and will be visible in their portal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
