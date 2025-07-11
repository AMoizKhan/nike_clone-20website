import { Star, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Women() {
  const products = [
    {
      id: 1,
      name: "Air Max 97",
      category: "Women's Shoes",
      price: 170,
      originalPrice: 200,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 156,
      isNew: true,
      colors: ["Pink", "White", "Black"],
    },
    {
      id: 2,
      name: "React Infinity Run",
      category: "Women's Running",
      price: 160,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 203,
      isNew: false,
      colors: ["Purple", "White"],
    },
    {
      id: 3,
      name: "Air Force 1 Shadow",
      category: "Women's Lifestyle",
      price: 100,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 134,
      isNew: false,
      colors: ["White", "Pink", "Purple"],
    },
    {
      id: 4,
      name: "Yoga Luxe Leggings",
      category: "Women's Yoga",
      price: 85,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 89,
      isNew: true,
      colors: ["Black", "Navy", "Purple"],
    },
    {
      id: 5,
      name: "Dri-FIT One Tank",
      category: "Women's Training",
      price: 30,
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 76,
      isNew: false,
      colors: ["Pink", "White", "Black"],
    },
    {
      id: 6,
      name: "Pro Shorts",
      category: "Women's Training",
      price: 40,
      image: "/placeholder.svg",
      rating: 4.4,
      reviews: 112,
      isNew: false,
      colors: ["Black", "Pink", "Grey"],
    },
  ];

  const categories = [
    "All",
    "Shoes",
    "Clothing",
    "Accessories",
    "Running",
    "Training",
    "Yoga",
    "Lifestyle",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-pink-400 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">WOMEN'S</h1>
            <p className="text-xl md:text-2xl mb-6">
              Designed for unstoppable women
            </p>
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 font-semibold rounded-full"
            >
              Shop Now
            </Button>
          </div>
        </div>
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
                    ? "bg-pink-600 text-white hover:bg-pink-700"
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
                              : color.toLowerCase() === "pink"
                                ? "#ec4899"
                                : color.toLowerCase() === "purple"
                                  ? "#9333ea"
                                  : color.toLowerCase() === "navy"
                                    ? "#1a365d"
                                    : color.toLowerCase() === "grey"
                                      ? "#757575"
                                      : "#6b7280",
                      }}
                    />
                  ))}
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
                    <Star className="w-4 h-4 fill-pink-500 text-pink-500" />
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
            className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-3 font-semibold rounded-full"
          >
            Load More Products
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-nike-dark text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Running",
                image: "/placeholder.svg",
                href: "/women/running",
              },
              {
                name: "Training",
                image: "/placeholder.svg",
                href: "/women/training",
              },
              {
                name: "Yoga",
                image: "/placeholder.svg",
                href: "/women/yoga",
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
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <Button
                    size="sm"
                    className="bg-white text-pink-600 hover:bg-pink-50 rounded-full"
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
