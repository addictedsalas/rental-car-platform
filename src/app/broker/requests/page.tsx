import { HydrateClient } from "~/trpc/server";
import Link from "next/link";

export default function BookingRequestsPage() {
  // Mock data for booking requests
  const bookingRequests = [
    {
      id: "BK112345",
      customer: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        rating: 4.8,
      },
      car: {
        id: "1",
        name: "Tesla Model 3",
        category: "Electric",
        price: 120,
      },
      dates: {
        pickup: "Mar 17, 2025, 10:00 AM",
        return: "Mar 20, 2025, 10:00 AM",
        duration: 3,
      },
      location: "New York City",
      status: "pending",
      commission: 85,
      createdAt: "Mar 16, 2025, 10:05 PM",
    },
    {
      id: "BK334567",
      customer: {
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        phone: "+1 (555) 789-0123",
        rating: 4.5,
      },
      car: {
        id: "3",
        name: "Audi Q5",
        category: "SUV",
        price: 150,
      },
      dates: {
        pickup: "Mar 22, 2025, 09:00 AM",
        return: "Mar 25, 2025, 09:00 AM",
        duration: 3,
      },
      location: "Boston",
      status: "pending",
      commission: 95,
      createdAt: "Mar 15, 2025, 02:30 PM",
    },
    {
      id: "BK556789",
      customer: {
        name: "Robert Brown",
        email: "robert.brown@example.com",
        phone: "+1 (555) 456-7890",
        rating: 4.2,
      },
      car: {
        id: "2",
        name: "Tesla Model S",
        category: "Electric",
        price: 180,
      },
      dates: {
        pickup: "Mar 25, 2025, 11:00 AM",
        return: "Mar 28, 2025, 11:00 AM",
        duration: 3,
      },
      location: "Chicago",
      status: "pending",
      commission: 120,
      createdAt: "Mar 14, 2025, 08:15 AM",
    },
    {
      id: "BK667890",
      customer: {
        name: "Sarah Wilson",
        email: "sarah.wilson@example.com",
        phone: "+1 (555) 234-5678",
        rating: 4.9,
      },
      car: {
        id: "4",
        name: "BMW X5",
        category: "SUV",
        price: 170,
      },
      dates: {
        pickup: "Mar 18, 2025, 10:00 AM",
        return: "Mar 23, 2025, 10:00 AM",
        duration: 5,
      },
      location: "San Francisco",
      status: "pending",
      commission: 140,
      createdAt: "Mar 13, 2025, 05:45 PM",
    },
    {
      id: "BK778901",
      customer: {
        name: "Jennifer Davis",
        email: "jennifer.davis@example.com",
        phone: "+1 (555) 345-6789",
        rating: 4.7,
      },
      car: {
        id: "5",
        name: "Mercedes-Benz E-Class",
        category: "Luxury",
        price: 190,
      },
      dates: {
        pickup: "Mar 20, 2025, 09:00 AM",
        return: "Mar 24, 2025, 09:00 AM",
        duration: 4,
      },
      location: "Los Angeles",
      status: "pending",
      commission: 150,
      createdAt: "Mar 12, 2025, 11:20 AM",
    },
  ];

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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
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
                  <h1 className="text-2xl font-semibold text-gray-900">Booking Requests</h1>
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
                {/* Filters and search */}
                <div className="flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 md:space-x-4 mb-6">
                  <div className="w-full md:w-1/3">
                    <label htmlFor="search" className="sr-only">Search</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Search by customer, car, or booking ID"
                        type="search"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <div>
                      <select
                        id="location"
                        name="location"
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option value="">All Locations</option>
                        <option value="new-york">New York</option>
                        <option value="los-angeles">Los Angeles</option>
                        <option value="chicago">Chicago</option>
                        <option value="boston">Boston</option>
                        <option value="san-francisco">San Francisco</option>
                      </select>
                    </div>
                    <div>
                      <select
                        id="sort"
                        name="sort"
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="highest-commission">Highest Commission</option>
                        <option value="lowest-commission">Lowest Commission</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Booking requests list */}
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {bookingRequests.map((request) => (
                      <li key={request.id}>
                        <div className="px-4 py-5 sm:px-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex-1">
                              <div className="flex items-center">
                                <h3 className="text-lg font-medium text-blue-600 truncate">
                                  {request.car.name}
                                </h3>
                                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                  Pending
                                </span>
                              </div>
                              <div className="mt-2 flex items-center text-sm text-gray-500">
                                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>{request.customer.name}</span>
                                <div className="ml-4 flex items-center">
                                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>{request.customer.email}</span>
                                </div>
                              </div>
                              <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                  <div className="flex items-center text-sm text-gray-500">
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                      <p className="font-medium">{request.dates.pickup}</p>
                                      <p>to {request.dates.return}</p>
                                    </div>
                                  </div>
                                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{request.location}</span>
                                  </div>
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span>Requested {request.createdAt}</span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                              <div className="text-right">
                                <p className="text-sm text-gray-500">Your Commission</p>
                                <p className="text-lg font-medium text-green-600">${request.commission}</p>
                              </div>
                              <div className="mt-4 flex space-x-3">
                                <Link 
                                  href={`/broker/requests/${request.id}`}
                                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                  Review
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pagination */}
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-4 rounded-md shadow">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">12</span> results
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          <span className="sr-only">Previous</span>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-gray-50">
                          1
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                          2
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                          3
                        </button>
                        <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          <span className="sr-only">Next</span>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </nav>
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
