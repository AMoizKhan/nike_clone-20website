import { Star, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Kids() {
  const products = [
    {
      id: 1,
      name: "Air Max SC",
      category: "Kids' Shoes",
      price: 55,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 89,
      isNew: true,
      colors: ["Blue", "Pink", "White"],
      sizes: ["10C", "11C", "12C", "13C"],
    },
    {
      id: 2,
      name: "Revolution 6",
      category: "Kids' Running",
      price: 60,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 67,
      isNew: false,
      colors: ["Black", "Blue"],
      sizes: ["1Y", "2Y", "3Y", "4Y"],
    },
    {
      id: 3,
      name: "Court Legacy",
      category: "Kids' Lifestyle",
      price: 50,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 124,
      isNew: false,
      colors: ["White", "Pink", "Green"],
      sizes: ["10C", "11C", "12C"],
    },
    {
      id: 4,
      name: "Dri-FIT Tee",
      category: "Kids' T-Shirt",
      price: 20,
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 45,
      isNew: true,
      colors: ["Blue", "Red", "Green"],
      sizes: ["XS", "S", "M", "L"],
    },
    {
      id: 5,
      name: "Flex Shorts",
      category: "Kids' Shorts",
      price: 25,
      image: "/placeholder.svg",
      rating: 4.4,
      reviews: 56,
      isNew: false,
      colors: ["Navy", "Black", "Blue"],
      sizes: ["XS", "S", "M"],
    },
    {
      id: 6,
      name: "Sport Backpack",
      category: "Kids' Backpack",
      price: 35,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 78,
      isNew: false,
      colors: ["Blue", "Pink", "Black"],
      sizes: ["One Size"],
    },
  ];

  const categories = [
    "All",
    "Shoes",
    "Clothing",
    "Accessories",
    "Little Kids (4-7)",
    "Big Kids (8-12)",
    "Boys",
    "Girls",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">KIDS</h1>
            <p className="text-xl md:text-2xl mb-6">Fun gear for active kids</p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold rounded-full"
            >
              Shop Now
            </Button>
          </div>
        </div>
        {/* Fun shapes */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-60 animate-bounce" />
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-pink-300 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-20 right-20 w-8 h-8 bg-green-300 rounded-full opacity-60" />
      </section>

      {/* Filters and Products */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={
                  category === "All"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-nike-grey text-nike-grey hover:bg-nike-light-grey"
                }
              >
                {category}
              </Button>
            ))}
          </div>
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
              <span>Sort</span>
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative bg-nike-light-grey rounded-lg overflow-hidden mb-4">
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded-full z-10">
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
                <h3 className="font-bold text-lg text-nike-dark group-hover:text-nike-grey transition-colors">
                  {product.name}
                </h3>
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
                              : color.toLowerCase() === "blue"
                                ? "#2563eb"
                                : color.toLowerCase() === "pink"
                                  ? "#ec4899"
                                  : color.toLowerCase() === "green"
                                    ? "#16a34a"
                                    : color.toLowerCase() === "red"
                                      ? "#dc2626"
                                      : color.toLowerCase() === "navy"
                                        ? "#1a365d"
                                        : "#6b7280",
                      }}
                    />
                  ))}
                </div>

                {/* Sizes */}
                <div className="flex flex-wrap gap-1">
                  {product.sizes.slice(0, 3).map((size, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-nike-light-grey text-nike-grey rounded"
                    >
                      {size}
                    </span>
                  ))}
                  {product.sizes.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-nike-light-grey text-nike-grey rounded">
                      +{product.sizes.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-nike-dark">
                    ${product.price}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 font-semibold rounded-full"
          >
            Load More Products
          </Button>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-nike-dark text-center mb-12">
            Shop by Age
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Little Kids",
                subtitle: "Ages 4-7",
                image: "/placeholder.svg",
                href: "/kids/little",
                color: "bg-blue-500",
              },
              {
                name: "Big Kids",
                subtitle: "Ages 8-12",
                image: "/placeholder.svg",
                href: "/kids/big",
                color: "bg-green-500",
              },
              {
                name: "Baby & Toddler",
                subtitle: "Ages 0-3",
                image: "/placeholder.svg",
                href: "/kids/baby",
                color: "bg-yellow-500",
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
                  <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
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
