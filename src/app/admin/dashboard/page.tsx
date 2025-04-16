"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import Link from "next/link";

export default function AdminDashboard() {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("admin");
  const activePage = "Dashboard";
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const handleUserTypeChange = (newUserType: "customer" | "broker" | "admin") => {
    setUserType(newUserType);
  };

  // Mock data for car status
  const carStatus = [
    { id: "01", carNo: "6465", driver: "Alex Noman", status: "completed", earning: 35.44 },
    { id: "02", carNo: "5665", driver: "Razib Rahman", status: "pending", earning: 0.00 },
    { id: "03", carNo: "1755", driver: "Luke Norton", status: "in-route", earning: 23.50 },
    { id: "04", carNo: "8921", driver: "Sarah Johnson", status: "completed", earning: 42.75 },
    { id: "05", carNo: "3344", driver: "Michael Chen", status: "pending", earning: 0.00 },
  ];

  // Function to render status indicator
  const renderStatusIndicator = (status: string) => {
    switch (status) {
      case "completed":
        return <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>;
      case "pending":
        return <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>;
      case "in-route":
        return <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>;
      default:
        return null;
    }
  };

  // Function to render status text
  const renderStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "pending":
        return "Pending";
      case "in-route":
        return "In route";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      <div className="flex">
        <Sidebar userType={userType} activePage={activePage} onUserTypeChange={handleUserTypeChange} />
        <main className="flex-1 p-6">
          {/* Header with date and search */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Today's Statistics</h1>
              <p className="text-gray-400">{formattedDate}</p>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search here" 
                className="bg-gray-800 text-white px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column with statistics cards */}
            <div className="space-y-6">
              {/* Income Card */}
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-medium text-gray-400">Income</h2>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">Today</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$ 9460.00</span>
                  <span className="ml-2 text-red-500 flex items-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    1.5%
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-2">Compared to $9940 yesterday</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Last week Income</span>
                    <span className="text-sm font-medium">$25658.00</span>
                  </div>
                </div>
              </div>

              {/* Expenses Card */}
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-medium text-gray-400">Expenses</h2>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">Today</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$ 5660.00</span>
                  <span className="ml-2 text-green-500 flex items-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    2.5%
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-2">Compared to $5240 yesterday</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Last week expenses</span>
                    <span className="text-sm font-medium">$22658.00</span>
                  </div>
                </div>
              </div>

              {/* Hire vs Cancel Card */}
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-gray-400">Hire vs Cancel</h2>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">Today</span>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-40">
                    {/* Donut chart - this is a simplified version */}
                    <div className="absolute inset-0 rounded-full border-8 border-blue-500"></div>
                    <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-green-500 border-r-green-500" style={{ transform: 'rotate(115deg)' }}></div>
                    <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-red-500" style={{ transform: 'rotate(280deg)' }}></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-sm">Total Hired</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium">54%</span>
                      <svg className="w-4 h-4 text-green-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-sm">Total Canceled</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium">20%</span>
                      <svg className="w-4 h-4 text-green-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-sm">Total Pending</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium">26%</span>
                      <svg className="w-4 h-4 text-red-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column with car availability and status */}
            <div className="lg:col-span-2 space-y-6">
              {/* Car Availability Card */}
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-bold mb-4">Car Availability</h2>
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <div className="relative">
                      <select className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Car number</option>
                        <option>6465</option>
                        <option>5665</option>
                        <option>1755</option>
                        <option>8921</option>
                        <option>3344</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="2025-03-20"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <div className="relative">
                      <select className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>10 AM</option>
                        <option>11 AM</option>
                        <option>12 PM</option>
                        <option>1 PM</option>
                        <option>2 PM</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
                    Check
                  </button>
                </div>
              </div>

              {/* Live Car Status Card */}
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Live Car Status</h2>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-3 font-medium">No.</th>
                        <th className="pb-3 font-medium">Car no.</th>
                        <th className="pb-3 font-medium">Driver</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Earning</th>
                        <th className="pb-3 font-medium text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {carStatus.map((car) => (
                        <tr key={car.id} className="hover:bg-gray-750">
                          <td className="py-4">{car.id}</td>
                          <td className="py-4">{car.carNo}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-sm font-medium mr-2">
                                {car.driver.split(' ').map(n => n[0]).join('')}
                              </div>
                              {car.driver}
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center">
                              {renderStatusIndicator(car.status)}
                              {renderStatusText(car.status)}
                            </div>
                          </td>
                          <td className="py-4">$ {car.earning.toFixed(2)}</td>
                          <td className="py-4 text-right">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg transition-colors">
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Earning Summary Card */}
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Earning Summary</h2>
                  <div className="flex items-center">
                    <button className="bg-gray-700 text-white px-3 py-1 rounded-lg flex items-center">
                      <span>Mar 2025 - Oct 2025</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-6">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-sm">Last 6 months</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                    <span className="text-sm">Same period last year</span>
                  </div>
                </div>
                <div className="h-64 relative">
                  {/* This is a simplified chart representation */}
                  <div className="absolute left-0 bottom-0 w-full h-full flex items-end">
                    <div className="flex-1 flex flex-col justify-end items-center">
                      <div className="w-full h-[60%] bg-blue-500 opacity-20 rounded-t-lg"></div>
                      <span className="text-xs mt-2">May</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-end items-center">
                      <div className="w-full h-[80%] bg-blue-500 opacity-20 rounded-t-lg"></div>
                      <span className="text-xs mt-2">Jun</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-end items-center">
                      <div className="w-full h-[65%] bg-blue-500 opacity-20 rounded-t-lg"></div>
                      <span className="text-xs mt-2">Jul</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-end items-center">
                      <div className="w-full h-[75%] bg-blue-500 opacity-20 rounded-t-lg"></div>
                      <span className="text-xs mt-2">Aug</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-end items-center">
                      <div className="w-full h-[85%] bg-blue-500 opacity-20 rounded-t-lg"></div>
                      <span className="text-xs mt-2">Sep</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-end items-center">
                      <div className="w-full h-[70%] bg-blue-500 opacity-20 rounded-t-lg"></div>
                      <span className="text-xs mt-2">Oct</span>
                    </div>
                  </div>
                  {/* Chart labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 py-2">
                    <div>$300k</div>
                    <div>$200k</div>
                    <div>$100k</div>
                    <div>$0.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
