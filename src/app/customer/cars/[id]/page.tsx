import { HydrateClient } from "~/trpc/server";
import Link from "next/link";

export default function CarDetail({ params }: { params: { id: string } }) {
  // Mock car data
  const car = {
    id: params.id,
    name: `Tesla Model ${params.id === "1" ? "3" : params.id === "2" ? "S" : "X"}`,
    category: "Electric",
    price: 110 + (parseInt(params.id) * 10),
    features: ["Electric", "Automatic", "5 Seats", "4 Doors", "Autopilot", "Supercharging"],
    location: "New York City",
    rating: 4.8,
    description: "Experience the future of driving with our Tesla Model. This all-electric vehicle combines luxury, performance, and cutting-edge technology for an unforgettable driving experience. With Autopilot features and instant torque, you'll enjoy both safety and exhilaration on the road.",
    specifications: {
      engine: "Electric Motor",
      power: "283 hp",
      acceleration: "5.3 seconds (0-60 mph)",
      range: "358 miles",
      charging: "Supercharger compatible",
      transmission: "Single-speed fixed gear",
    },
    amenities: [
      "Touchscreen Display",
      "Bluetooth",
      "USB Ports",
      "Navigation System",
      "Backup Camera",
      "Climate Control",
      "Heated Seats",
      "Premium Sound System",
    ],
    reviews: [
      {
        id: 1,
        name: "John D.",
        rating: 5,
        date: "February 15, 2025",
        comment: "Amazing car! Clean, fast, and the autopilot feature made my trip so much easier. Would definitely rent again.",
      },
      {
        id: 2,
        name: "Sarah M.",
        rating: 4,
        date: "January 28, 2025",
        comment: "Great experience overall. The car was in excellent condition and performed well. Only issue was finding a charging station in some areas.",
      },
      {
        id: 3,
        name: "Michael T.",
        rating: 5,
        date: "December 10, 2024",
        comment: "First time driving a Tesla and I'm blown away! The broker was very helpful in explaining all the features. Highly recommend!",
      },
    ],
  };

  return (
    <HydrateClient>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            href="/customer/search" 
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Search Results
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2 h-64 md:h-auto bg-gray-200">
              {/* Car Image Placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Car Image
              </div>
            </div>
            <div className="p-6 md:w-1/2">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold">{car.name}</h1>
                  <p className="text-gray-600">{car.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">${car.price}/day</p>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span>{car.rating} ({car.reviews.length} reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-2">Description</h2>
                <p className="text-gray-700">{car.description}</p>
              </div>
              
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-2">Features</h2>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Link 
                  href={`/customer/booking/${car.id}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Specifications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Specifications</h2>
            <div className="space-y-3">
              {Object.entries(car.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="font-medium capitalize">{key}</span>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Amenities */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 gap-2">
              {car.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Availability Calendar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Availability</h2>
          <div className="h-64 border rounded-lg flex items-center justify-center text-gray-500">
            Calendar Component Placeholder
          </div>
        </div>
        
        {/* Reviews */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-6">
            {car.reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span>{review.rating}.0</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
