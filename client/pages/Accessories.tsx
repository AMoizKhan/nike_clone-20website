import { Star, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Accessories() {
  const products = [
    {
      id: 1,
      name: "Brasilia JDI Backpack",
      category: "Backpacks",
      price: 25,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 89,
      isNew: false,
      colors: ["Black", "Navy", "Red"],
      type: "Unisex",
    },
    {
      id: 2,
      name: "Dri-FIT Head Tie",
      category: "Headwear",
      price: 16,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 124,
      isNew: true,
      colors: ["Black", "White", "Pink"],
      type: "Women's",
    },
    {
      id: 3,
      name: "Academy Duffel Bag",
      category: "Bags",
      price: 35,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 67,
      isNew: false,
      colors: ["Black", "Navy", "Grey"],
      type: "Unisex",
    },
    {
      id: 4,
      name: "Elite Basketball Shorts",
      category: "Shorts",
      price: 50,
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 156,
      isNew: true,
      colors: ["Black", "Red", "Blue"],
      type: "Men's",
    },
    {
      id: 5,
      name: "Everyday Cushion Socks",
      category: "Socks",
      price: 14,
      image: "/placeholder.svg",
      rating: 4.4,
      reviews: 203,
      isNew: false,
      colors: ["White", "Black", "Grey"],
      type: "Unisex",
    },
    {
      id: 6,
      name: "Pro Cap",
      category: "Hats",
      price: 22,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 78,
      isNew: false,
      colors: ["Black", "White", "Navy"],
      type: "Unisex",
    },
    {
      id: 7,
      name: "Fundamental Gloves",
      category: "Gloves",
      price: 20,
      image: "/placeholder.svg",
      rating: 4.3,
      reviews: 45,
      isNew: false,
      colors: ["Black", "Grey"],
      type: "Unisex",
    },
    {
      id: 8,
      name: "Water Bottle",
      category: "Equipment",
      price: 18,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 92,
      isNew: true,
      colors: ["Clear", "Black", "Blue"],
      type: "Unisex",
    },
  ];

  const categories = [
    "All Accessories",
    "Bags & Backpacks",
    "Hats & Headwear",
    "Socks",
    "Equipment",
    "Gloves",
    "Belts",
    "Sunglasses",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              ACCESSORIES
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Complete your look with style
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 font-semibold rounded-full"
            >
              Shop All
            </Button>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-20 h-20 border-4 border-white/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-white/20 rounded-full" />
        <div className="absolute top-32 right-32 w-12 h-12 bg-white/10 rounded-full" />
      </section>

      {/* Filters and Products */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter Bar */}
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="xl:w-1/4 space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`block w-full text-left py-2 px-3 rounded transition-colors ${
                      category === "All Accessories"
                        ? "bg-purple-600 text-white"
                        : "text-nike-grey hover:bg-nike-light-grey"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Price Range</h3>
              <div className="space-y-2">
                {[
                  "Under $20",
                  "$20 - $40",
                  "$40 - $60",
                  "$60 - $100",
                  "Over $100",
                ].map((range) => (
                  <label key={range} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="rounded border-nike-grey"
                    />
                    <span className="text-nike-grey">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Type</h3>
              <div className="space-y-2">
                {["Men's", "Women's", "Unisex", "Kids'"].map((type) => (
                  <label key={type} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="rounded border-nike-grey"
                    />
                    <span className="text-nike-grey">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Sport</h3>
              <div className="space-y-2">
                {[
                  "Running",
                  "Basketball",
                  "Training",
                  "Football",
                  "Tennis",
                  "Golf",
                ].map((sport) => (
                  <label key={sport} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="rounded border-nike-grey"
                    />
                    <span className="text-nike-grey">{sport}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="xl:w-3/4">
            {/* Sort Controls */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Accessories (64)</h2>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Sort: Featured</span>
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative bg-nike-light-grey rounded-lg overflow-hidden mb-4">
                    {product.isNew && (
                      <span className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 text-sm font-semibold rounded-full z-10">
                        New
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                    {/* Quick Actions */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        className="w-full bg-white text-nike-dark hover:bg-nike-light-grey"
                      >
                        Quick Add
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg text-nike-dark group-hover:text-nike-grey transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-xs text-nike-grey bg-nike-light-grey px-2 py-1 rounded">
                        {product.type}
                      </span>
                    </div>
                    <p className="text-nike-grey text-sm">{product.category}</p>

                    {/* Colors */}
                    <div className="flex space-x-1">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-nike-grey"
                          style={{
                            backgroundColor:
                              color.toLowerCase() === "white"
                                ? "#fff"
                                : color.toLowerCase() === "black"
                                  ? "#000"
                                  : color.toLowerCase() === "red"
                                    ? "#dc2626"
                                    : color.toLowerCase() === "blue"
                                      ? "#2563eb"
                                      : color.toLowerCase() === "pink"
                                        ? "#ec4899"
                                        : color.toLowerCase() === "navy"
                                          ? "#1a365d"
                                          : color.toLowerCase() === "grey"
                                            ? "#757575"
                                            : color.toLowerCase() === "clear"
                                              ? "transparent"
                                              : "#6b7280",
                          }}
                        />
                      ))}
                      <span className="text-xs text-nike-grey ml-2">
                        +{Math.floor(Math.random() * 3) + 1} colors
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-nike-dark">
                        ${product.price}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-purple-500 text-purple-500" />
                        <span className="text-sm text-nike-grey">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 font-semibold rounded-full"
              >
                Load More Accessories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-nike-dark text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Bags",
                subtitle: "Carry your essentials",
                image: "/placeholder.svg",
                href: "/accessories/bags",
                color: "bg-purple-600",
              },
              {
                name: "Hats",
                subtitle: "Top off your look",
                image: "/placeholder.svg",
                href: "/accessories/hats",
                color: "bg-pink-600",
              },
              {
                name: "Socks",
                subtitle: "Comfort from the ground up",
                image: "/placeholder.svg",
                href: "/accessories/socks",
                color: "bg-red-600",
              },
              {
                name: "Equipment",
                subtitle: "Gear for performance",
                image: "/placeholder.svg",
                href: "/accessories/equipment",
                color: "bg-orange-600",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="group relative h-64 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90 mb-3">{category.subtitle}</p>
                  <Button
                    size="sm"
                    className={`${category.color} hover:opacity-90 text-white rounded-full`}
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
