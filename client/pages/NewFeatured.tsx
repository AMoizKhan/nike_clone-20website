import { Star, Zap, TrendingUp, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewFeatured() {
  const featuredProducts = [
    {
      id: 1,
      name: "Air Max 270 Premium",
      category: "Men's Shoes",
      price: 160,
      originalPrice: 190,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 89,
      isNew: true,
      isFeatured: true,
      colors: ["Black", "Gold", "White"],
      badge: "Limited Edition",
    },
    {
      id: 2,
      name: "React Vision Premium",
      category: "Women's Running",
      price: 140,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 156,
      isNew: true,
      isFeatured: false,
      colors: ["Pink", "White", "Purple"],
      badge: "Just Dropped",
    },
    {
      id: 3,
      name: "Air Force 1 Shadow SE",
      category: "Women's Lifestyle",
      price: 110,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 234,
      isNew: false,
      isFeatured: true,
      colors: ["Multi", "Pink", "Blue"],
      badge: "Trending",
    },
    {
      id: 4,
      name: "Dunk Low Retro Premium",
      category: "Unisex Lifestyle",
      price: 120,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 567,
      isNew: true,
      isFeatured: true,
      colors: ["White", "Green", "Black"],
      badge: "Most Popular",
    },
  ];

  const newReleases = [
    {
      id: 5,
      name: "Zoom Freak 4",
      category: "Basketball",
      price: 130,
      image: "/placeholder.svg",
      releaseDate: "Dec 15, 2024",
    },
    {
      id: 6,
      name: "Pegasus Trail 4 GORE-TEX",
      category: "Trail Running",
      price: 140,
      image: "/placeholder.svg",
      releaseDate: "Dec 20, 2024",
    },
    {
      id: 7,
      name: "Air Jordan 1 Low SE",
      category: "Lifestyle",
      price: 100,
      image: "/placeholder.svg",
      releaseDate: "Dec 22, 2024",
    },
  ];

  const collections = [
    {
      title: "Holiday Collection",
      subtitle: "Festive styles for the season",
      image: "/placeholder.svg",
      href: "/collections/holiday",
      items: 24,
    },
    {
      title: "Winter Performance",
      subtitle: "Built for cold weather",
      image: "/placeholder.svg",
      href: "/collections/winter",
      items: 18,
    },
    {
      title: "Limited Edition",
      subtitle: "Exclusive releases",
      image: "/placeholder.svg",
      href: "/collections/limited",
      items: 12,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-nike-dark via-nike-orange to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 mr-3" />
              <span className="text-xl font-semibold">NEW & FEATURED</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              LATEST
              <br />
              DROPS
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Discover the newest releases and featured products from your
              favorite collections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-nike-dark hover:bg-nike-light-grey px-8 py-4 text-lg font-semibold rounded-full"
              >
                Shop New Releases
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-nike-dark px-8 py-4 text-lg font-semibold rounded-full"
              >
                View Featured
              </Button>
            </div>
          </div>
        </div>
        {/* Animated elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-nike-orange/30 rounded-full animate-bounce" />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/20 rounded-full" />
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-6 h-6 text-nike-orange mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-nike-dark">
              Featured Products
            </h2>
          </div>
          <p className="text-xl text-nike-grey text-center mb-16 max-w-2xl mx-auto">
            Hand-picked favorites that are making waves right now
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative bg-nike-light-grey rounded-lg overflow-hidden mb-4">
                  <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
                    {product.isNew && (
                      <span className="bg-nike-orange text-white px-3 py-1 text-sm font-semibold rounded-full">
                        New
                      </span>
                    )}
                    {product.isFeatured && (
                      <span className="bg-nike-dark text-white px-3 py-1 text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white/90 text-nike-dark px-2 py-1 text-xs font-semibold rounded">
                      {product.badge}
                    </span>
                  </div>
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
                                : color.toLowerCase() === "gold"
                                  ? "#fbbf24"
                                  : color.toLowerCase() === "pink"
                                    ? "#ec4899"
                                    : color.toLowerCase() === "purple"
                                      ? "#9333ea"
                                      : color.toLowerCase() === "blue"
                                        ? "#2563eb"
                                        : color.toLowerCase() === "green"
                                          ? "#16a34a"
                                          : color.toLowerCase() === "multi"
                                            ? "linear-gradient(45deg, #f59e0b, #ec4899, #8b5cf6)"
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
        </div>
      </section>

      {/* New Releases */}
      <section className="py-20 bg-nike-light-grey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-nike-orange mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-nike-dark">
              Coming Soon
            </h2>
          </div>
          <p className="text-xl text-nike-grey text-center mb-16">
            Mark your calendar for these upcoming releases
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newReleases.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-nike-orange text-white px-3 py-1 text-sm font-semibold rounded-full">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-nike-dark mb-2">
                    {product.name}
                  </h3>
                  <p className="text-nike-grey mb-4">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-nike-dark">
                      ${product.price}
                    </span>
                    <span className="text-sm text-nike-grey">
                      {product.releaseDate}
                    </span>
                  </div>
                  <Button className="w-full mt-4 bg-nike-dark hover:bg-nike-grey text-white rounded-full">
                    Notify Me
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-nike-dark text-center mb-16">
            Featured Collections
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="group relative h-96 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-2">
                    {collection.subtitle}
                  </p>
                  <p className="text-sm opacity-75 mb-4">
                    {collection.items} items
                  </p>
                  <Button
                    size="sm"
                    className="bg-white text-nike-dark hover:bg-nike-light-grey rounded-full"
                  >
                    Explore Collection
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter for Drops */}
      <section className="py-20 bg-gradient-to-r from-nike-dark to-nike-orange text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Zap className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Never Miss a Drop
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be the first to know about new releases, restocks, and exclusive
            drops
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-nike-dark placeholder-nike-grey focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              size="lg"
              className="bg-white hover:bg-nike-light-grey text-nike-dark px-8 py-4 font-semibold rounded-full whitespace-nowrap"
            >
              Get Notified
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
