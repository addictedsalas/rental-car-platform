import { useState } from "react";

interface CarFiltersProps {
  userType: "customer" | "broker" | "admin";
  onFilterChange: (filters: any) => void;
  horizontal?: boolean;
}

export default function CarFilters({ userType, onFilterChange, horizontal = false }: CarFiltersProps) {
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    priceMin: "",
    priceMax: "",
    type: "",
    color: "",
    insurance: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    
    const updatedFilters = {
      ...filters,
      [name]: newValue,
    };
    
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const renderFilters = () => {
    return (
      <>
        {/* Brand filter */}
        <div className={horizontal ? "w-full" : ""}>
          <label className="block text-sm font-medium text-gray-300 mb-1">Brand</label>
          <select 
            name="brand"
            value={filters.brand}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Brands</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Audi">Audi</option>
            <option value="Tesla">Tesla</option>
            <option value="FERRARI">Ferrari</option>
            <option value="ROLLS ROYCE">Rolls Royce</option>
            <option value="LAMBORGHINI">Lamborghini</option>
          </select>
        </div>
        
        {/* Model filter */}
        <div className={horizontal ? "w-full" : ""}>
          <label className="block text-sm font-medium text-gray-300 mb-1">Model</label>
          <select 
            name="model"
            value={filters.model}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Models</option>
            <option value="Camry">Camry</option>
            <option value="Corolla">Corolla</option>
            <option value="Civic">Civic</option>
            <option value="Accord">Accord</option>
            <option value="3 Series">3 Series</option>
            <option value="C-Class">C-Class</option>
            <option value="A4">A4</option>
            <option value="Model 3">Model 3</option>
            <option value="F8 TRIBUTO">F8 Tributo</option>
            <option value="Cullinan">Cullinan</option>
            <option value="Huracan EVO Spyder">Huracan EVO Spyder</option>
            <option value="Huracan Spyder">Huracan Spyder</option>
          </select>
        </div>
        
        {/* Price Range */}
        <div className={horizontal ? "w-full" : ""}>
          <label className="block text-sm font-medium text-gray-300 mb-1">Price Range ($/day)</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="priceMin"
              placeholder="Min"
              value={filters.priceMin}
              onChange={handleChange}
              className="w-1/2 p-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="number"
              name="priceMax"
              placeholder="Max"
              value={filters.priceMax}
              onChange={handleChange}
              className="w-1/2 p-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        {/* Car Type */}
        <div className={horizontal ? "w-full" : ""}>
          <label className="block text-sm font-medium text-gray-300 mb-1">Car Type</label>
          <select 
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Types</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Coupe">Coupe</option>
            <option value="Convertible">Convertible</option>
            <option value="Truck">Truck</option>
            <option value="Sports Car">Sports Car</option>
            <option value="Luxury SUV">Luxury SUV</option>
          </select>
        </div>
        
        {/* Color */}
        <div className={horizontal ? "w-full" : ""}>
          <label className="block text-sm font-medium text-gray-300 mb-1">Color</label>
          <select 
            name="color"
            value={filters.color}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Colors</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Silver">Silver</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Gray">Gray</option>
            <option value="Green">Green</option>
          </select>
        </div>
        
        {/* Insurance */}
        <div className={`flex items-center ${horizontal ? "w-full" : ""}`}>
          <input
            type="checkbox"
            id="insurance"
            name="insurance"
            checked={filters.insurance}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="insurance" className="ml-2 text-sm text-gray-300">
            With Insurance
          </label>
        </div>
        
        {/* Broker/Admin specific filters */}
        {(userType === "broker" || userType === "admin") && (
          <div className={horizontal ? "w-full" : ""}>
            <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
            <select 
              name="status"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Status</option>
              <option value="available">Available</option>
              <option value="booked">Booked</option>
              <option value="maintenance">In Maintenance</option>
              <option value="premium">Premium</option>
            </select>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-6 shadow-lg">
      <h3 className="font-medium text-sm mb-4 text-blue-400 uppercase tracking-wider">Filters</h3>
      
      <div className={horizontal ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" : "space-y-4"}>
        {renderFilters()}
      </div>
      
      {/* Reset filters button */}
      <button 
        className={`${horizontal ? "mt-4 px-4" : "w-full mt-4"} py-2 text-sm text-blue-400 hover:bg-gray-700 rounded-lg transition-colors duration-200`}
        onClick={() => {
          const resetFilters = {
            brand: "",
            model: "",
            priceMin: "",
            priceMax: "",
            type: "",
            color: "",
            insurance: false,
          };
          setFilters(resetFilters);
          onFilterChange(resetFilters);
        }}
      >
        Reset Filters
      </button>
    </div>
  );
}
