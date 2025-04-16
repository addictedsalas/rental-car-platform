"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

// Small components to keep code blocks manageable
const StatCard = ({ title, value, change, icon }: { title: string; value: string; change?: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-5 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-gray-400 text-sm">{title}</h3>
          <p className="text-2xl font-bold mt-1 text-white">{value}</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg text-blue-500">
          {icon}
        </div>
      </div>
      {change && (
        <div className="flex items-center">
          <span className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
          <span className="text-gray-400 text-sm ml-1">vs last month</span>
        </div>
      )}
    </div>
  );
};

const EarningsChart = () => {
  // This would be replaced with a real chart library in production
  return (
    <div className="bg-gray-800 rounded-xl p-5 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-white">Monthly Earnings</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg">Year</button>
          <button className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-lg">Month</button>
          <button className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-lg">Week</button>
        </div>
      </div>
      
      <div className="h-64 flex items-end space-x-6 pb-5 px-5 border-b border-gray-700">
        <div className="flex flex-col items-center">
          <div className="w-10 bg-blue-900 rounded-t-lg" style={{ height: '30%' }}></div>
          <span className="text-xs mt-2 text-gray-400">Jan</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 bg-blue-900 rounded-t-lg" style={{ height: '45%' }}></div>
          <span className="text-xs mt-2 text-gray-400">Feb</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 bg-blue-900 rounded-t-lg" style={{ height: '60%' }}></div>
          <span className="text-xs mt-2 text-gray-400">Mar</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 bg-blue-900 rounded-t-lg" style={{ height: '75%' }}></div>
          <span className="text-xs mt-2 text-gray-400">Apr</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 bg-blue-900 rounded-t-lg" style={{ height: '50%' }}></div>
          <span className="text-xs mt-2 text-gray-400">May</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 bg-blue-900 rounded-t-lg" style={{ height: '65%' }}></div>
          <span className="text-xs mt-2 text-gray-400">Jun</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 bg-blue-600 rounded-t-lg" style={{ height: '90%' }}></div>
          <span className="text-xs mt-2 text-gray-400">Jul</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 bg-blue-900 rounded-t-lg" style={{ height: '70%' }}></div>
          <span className="text-xs mt-2 text-gray-400">Aug</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 bg-blue-900 rounded-t-lg" style={{ height: '55%' }}></div>
          <span className="text-xs mt-2 text-gray-400">Sep</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 bg-blue-900 rounded-t-lg" style={{ height: '40%' }}></div>
          <span className="text-xs mt-2 text-gray-400">Oct</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 bg-blue-900 rounded-t-lg" style={{ height: '35%' }}></div>
          <span className="text-xs mt-2 text-gray-400">Nov</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 bg-blue-900 rounded-t-lg" style={{ height: '25%' }}></div>
          <span className="text-xs mt-2 text-gray-400">Dec</span>
        </div>
      </div>
      
      <div className="flex justify-between mt-4 text-sm">
        <div>
          <span className="text-gray-400">Total Earnings</span>
          <p className="font-medium text-white">$24,560</p>
        </div>
        <div>
          <span className="text-gray-400">Average</span>
          <p className="font-medium text-white">$2,046/mo</p>
        </div>
        <div>
          <span className="text-gray-400">Best Month</span>
          <p className="font-medium text-white">Jul ($4,350)</p>
        </div>
      </div>
    </div>
  );
};

const RecentTransaction = ({ transaction }: { transaction: any }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-700">
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-lg mr-3 flex items-center justify-center ${
          transaction.type === 'earning' ? 'bg-green-900 text-green-500' : 'bg-blue-900 text-blue-500'
        }`}>
          {transaction.type === 'earning' ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          )}
        </div>
        <div>
          <p className="font-medium text-white">{transaction.description}</p>
          <p className="text-sm text-gray-400">{transaction.date}</p>
        </div>
      </div>
      <div className={`font-medium ${transaction.type === 'earning' ? 'text-green-500' : 'text-blue-500'}`}>
        {transaction.type === 'earning' ? '+' : ''}{transaction.amount}
      </div>
    </div>
  );
};

// Mock data for transactions
const mockTransactions = [
  {
    id: "T-1001",
    description: "Booking #BK-1234 - Toyota Camry",
    date: "Jul 15, 2025",
    amount: "$120.50",
    type: "earning",
  },
  {
    id: "T-1002",
    description: "Commission Payout",
    date: "Jul 10, 2025",
    amount: "$350.75",
    type: "commission",
  },
  {
    id: "T-1003",
    description: "Booking #BK-1236 - BMW 3 Series",
    date: "Jul 8, 2025",
    amount: "$225.00",
    type: "earning",
  },
  {
    id: "T-1004",
    description: "Booking #BK-1238 - Mercedes C-Class",
    date: "Jul 5, 2025",
    amount: "$180.25",
    type: "earning",
  },
  {
    id: "T-1005",
    description: "Commission Payout",
    date: "Jul 1, 2025",
    amount: "$420.50",
    type: "commission",
  },
];

// Mock data for top performing cars
const mockTopCars = [
  {
    id: "1",
    name: "BMW 3 Series",
    bookings: 15,
    revenue: "$2,250",
    commission: "$675",
  },
  {
    id: "4",
    name: "Tesla Model 3",
    bookings: 10,
    revenue: "$1,800",
    commission: "$540",
  },
  {
    id: "5",
    name: "Mercedes C-Class",
    bookings: 6,
    revenue: "$1,200",
    commission: "$360",
  },
];

export default function BrokerEarningsPage() {
  const [dateRange, setDateRange] = useState("this-month");
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("broker");
  const activePage = "Earnings";
  
  const handleUserTypeChange = (newUserType: "customer" | "broker" | "admin") => {
    setUserType(newUserType);
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      
      <div className="flex">
        <Sidebar userType={userType} activePage={activePage} onUserTypeChange={handleUserTypeChange} />
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Earnings & Commission</h2>
            
            <div className="flex space-x-3">
              <div className="relative">
                <select 
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pr-8 appearance-none text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <option value="today">Today</option>
                  <option value="this-week">This Week</option>
                  <option value="this-month">This Month</option>
                  <option value="last-month">Last Month</option>
                  <option value="last-3-months">Last 3 Months</option>
                  <option value="this-year">This Year</option>
                  <option value="all-time">All Time</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              
              <button className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 flex items-center hover:bg-gray-700 transition-colors">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Export
              </button>
            </div>
          </div>
          
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard 
              title="Total Earnings" 
              value="$4,350" 
              change="+12.5%" 
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              } 
            />
            <StatCard 
              title="Commission" 
              value="$1,305" 
              change="+8.3%" 
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              } 
            />
            <StatCard 
              title="Total Bookings" 
              value="28" 
              change="+15.2%" 
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              } 
            />
            <StatCard 
              title="Active Cars" 
              value="5" 
              change="+1" 
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              } 
            />
          </div>
          
          {/* Earnings chart and transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <EarningsChart />
            </div>
            
            <div className="bg-gray-800 rounded-xl p-5 shadow-lg">
              <h3 className="font-medium mb-4 text-white">Recent Transactions</h3>
              
              <div className="space-y-0">
                {mockTransactions.map((transaction) => (
                  <RecentTransaction key={transaction.id} transaction={transaction} />
                ))}
              </div>
              
              <button className="w-full mt-4 py-2 text-sm text-blue-500 hover:bg-gray-700 rounded-lg transition-colors">
                View All Transactions
              </button>
            </div>
          </div>
          
          {/* Top performing cars */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="p-5 border-b border-gray-700">
              <h3 className="font-medium text-white">Top Performing Cars</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-750">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Car
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Bookings
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Revenue
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Commission
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Performance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {mockTopCars.map((car) => (
                    <tr key={car.id} className="hover:bg-gray-750">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-white">{car.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {car.bookings}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {car.revenue}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {car.commission}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(parseInt(car.bookings.toString()) / 15) * 100}%` }}></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
