import { Star, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Shoes() {
  const products = [
    {
      id: 1,
      name: "Air Max 270",
      category: "Lifestyle",
      price: 150,
      originalPrice: 180,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 324,
      isNew: true,
      colors: ["Black", "White", "Red"],
      gender: "Unisex",
    },
    {
      id: 2,
      name: "React Infinity Run Flyknit 3",
      category: "Running",
      price: 160,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 189,
      isNew: false,
      colors: ["Blue", "Black", "White"],
      gender: "Men's",
    },
    {
      id: 3,
      name: "Air Force 1 '07",
      category: "Lifestyle",
      price: 90,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 567,
      isNew: false,
      colors: ["White", "Black", "Navy"],
      gender: "Unisex",
    },
    {
      id: 4,
      name: "Air Zoom Pegasus 40",
      category: "Running",
      price: 130,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 234,
      isNew: true,
      colors: ["Black", "Grey", "Blue"],
      gender: "Women's",
    },
    {
      id: 5,
      name: "Dunk Low",
      category: "Lifestyle",
      price: 100,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 445,
      isNew: false,
      colors: ["White", "Black", "Green"],
      gender: "Unisex",
    },
    {
      id: 6,
      name: "Air Jordan 1 Low",
      category: "Basketball",
      price: 90,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 378,
      isNew: false,
      colors: ["Black", "Red", "White"],
      gender: "Unisex",
    },
    {
      id: 7,
      name: "Blazer Mid '77",
      category: "Lifestyle",
      price: 100,
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 156,
      isNew: false,
      colors: ["White", "Black", "Navy"],
      gender: "Unisex",
    },
    {
      id: 8,
      name: "Metcon 8",
      category: "Training",
      price: 130,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 89,
      isNew: true,
      colors: ["Black", "White", "Red"],
      gender: "Unisex",
    },
  ];

  const categories = [
    "All Shoes",
    "Lifestyle",
    "Running",
    "Basketball",
    "Training",
    "Skateboarding",
    "Football",
    "Golf",
  ];

  const priceRanges = [
    "Under $60",
    "$60 - $100",
    "$100 - $150",
    "$150 - $200",
    "Over $200",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-nike-dark via-nike-grey to-nike-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">SHOES</h1>
            <p className="text-xl md:text-2xl mb-6">
              Step into greatness with every stride
            </p>
            <Button
              size="lg"
              className="bg-nike-orange hover:bg-nike-orange/90 text-white px-8 py-3 font-semibold rounded-full"
            >
              Shop All Shoes
            </Button>
          </div>
        </div>
        {/* Shoe sole graphics */}
        <div className="absolute top-10 left-10 w-32 h-16 opacity-20">
          <svg
            viewBox="0 0 100 50"
            className="w-full h-full fill-white transform rotate-12"
          >
            <ellipse cx="50" cy="25" rx="45" ry="20" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 w-24 h-12 opacity-10">
          <svg
            viewBox="0 0 100 50"
            className="w-full h-full fill-white transform -rotate-12"
          >
            <ellipse cx="50" cy="25" rx="40" ry="18" />
          </svg>
        </div>
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
                      category === "All Shoes"
                        ? "bg-nike-dark text-white"
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
                {priceRanges.map((range) => (
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
              <h3 className="font-bold text-lg mb-4">Gender</h3>
              <div className="space-y-2">
                {["Men's", "Women's", "Unisex", "Kids'"].map((gender) => (
                  <label key={gender} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="rounded border-nike-grey"
                    />
                    <span className="text-nike-grey">{gender}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="xl:w-3/4">
            {/* Sort Controls */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">All Shoes (128)</h2>
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
                      <span className="absolute top-4 left-4 bg-nike-orange text-white px-3 py-1 text-sm font-semibold rounded-full z-10">
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
                        {product.gender}
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
                                      : color.toLowerCase() === "green"
                                        ? "#16a34a"
                                        : color.toLowerCase() === "navy"
                                          ? "#1a365d"
                                          : color.toLowerCase() === "grey"
                                            ? "#757575"
                                            : "#6b7280",
                          }}
                        />
                      ))}
                      <span className="text-xs text-nike-grey ml-2">
                        +{Math.floor(Math.random() * 5) + 1} colors
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-nike-dark">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-nike-grey line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-nike-orange text-nike-orange" />
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
                className="border-2 border-nike-dark text-nike-dark hover:bg-nike-dark hover:text-white px-8 py-3 font-semibold rounded-full"
              >
                Load More Shoes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-nike-light-grey py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-nike-dark text-center mb-12">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Air Max",
                subtitle: "Visible Air",
                image: "/placeholder.svg",
                href: "/shoes/air-max",
              },
              {
                name: "Air Force 1",
                subtitle: "Since 1982",
                image: "/placeholder.svg",
                href: "/shoes/air-force-1",
              },
              {
                name: "Jordan",
                subtitle: "Greatest of All Time",
                image: "/placeholder.svg",
                href: "/shoes/jordan",
              },
              {
                name: "Dunk",
                subtitle: "Be True To Your School",
                image: "/placeholder.svg",
                href: "/shoes/dunk",
              },
            ].map((collection, index) => (
              <div
                key={index}
                className="group relative h-64 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{collection.name}</h3>
                  <p className="text-sm opacity-90 mb-3">
                    {collection.subtitle}
                  </p>
                  <Button
                    size="sm"
                    className="bg-white text-nike-dark hover:bg-nike-light-grey rounded-full"
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
