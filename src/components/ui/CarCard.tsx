import Image from "next/image";
import { FaGasPump, FaCog, FaUsers, FaStar } from "react-icons/fa";
import Link from "next/link";

export interface Car {
  id: string;
  brand: string;
  model: string;
  variant: string;
  year: number;
  price: number;
  image: string;
  status: string;
  availability: string;
  transmission: string;
  fuel: string;
  seats: number;
  type: string;
  rating: number;
  bookings?: number;
  revenue?: number;
}

interface CarCardProps {
  car: Car;
  userType: "customer" | "broker" | "admin";
}

export default function CarCard({ car, userType }: CarCardProps) {
  // Function to render the status badge
  const renderStatusBadge = () => {
    switch (car.availability) {
      case "available":
        return (
          <span className="absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded">
            Available
          </span>
        );
      case "booked":
        return (
          <span className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
            Booked
          </span>
        );
      case "maintenance":
        return (
          <span className="absolute top-3 right-3 px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded">
            Maintenance
          </span>
        );
      default:
        return null;
    }
  };

  // Function to render user-specific actions
  const renderActions = () => {
    switch (userType) {
      case "customer":
        return (
          <Link href={`/cars/${car.id}`} className="block w-full">
            <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Book Now
            </button>
          </Link>
        );
      case "broker":
        return (
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Edit
            </button>
            <button className="flex-1 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Manage
            </button>
          </div>
        );
      case "admin":
        return (
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Edit
            </button>
            <button className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
              Remove
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  // Function to render premium badge for high-end cars
  const renderPremiumBadge = () => {
    if (car.status === "premium") {
      return (
        <span className="absolute top-3 left-3 px-2 py-1 bg-gradient-to-r from-amber-500 to-yellow-300 text-black text-xs font-bold rounded">
          PREMIUM
        </span>
      );
    }
    return null;
  };

  // Function to format price with commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        {renderStatusBadge()}
        {renderPremiumBadge()}
        <Link href={`/cars/${car.id}`}>
          <div className="h-full w-full overflow-hidden">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
      </div>
      
      <div className="p-4">
        <Link href={`/cars/${car.id}`} className="block">
          <h3 className="text-lg font-bold text-white hover:text-blue-400 transition-colors">
            {car.brand} {car.model}
          </h3>
          <p className="text-gray-400 text-sm mb-2">{car.variant} • {car.year}</p>
        </Link>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span>{car.rating}/5</span>
          </div>
          <span className="text-gray-400">{car.type}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center">
            <FaGasPump className="text-gray-400 mb-1" />
            <span className="text-xs text-gray-400">{car.fuel}</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCog className="text-gray-400 mb-1" />
            <span className="text-xs text-gray-400">{car.transmission}</span>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-gray-400 mb-1" />
            <span className="text-xs text-gray-400">{car.seats} Seats</span>
          </div>
        </div>
        
        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold text-white">${formatPrice(car.price)}</span>
          <span className="text-gray-400 ml-1">/day</span>
        </div>
        
        {renderActions()}
      </div>
    </div>
  );
}
