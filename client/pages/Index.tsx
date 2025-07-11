import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function Index() {
  const featuredProducts = [
    {
      id: 1,
      name: "Air Max 270",
      category: "Men's Shoes",
      price: 150,
      image: "/placeholder.svg",
      isNew: true,
    },
    {
      id: 2,
      name: "React Infinity Run",
      category: "Women's Running Shoe",
      price: 160,
      image: "/placeholder.svg",
      isNew: false,
    },
    {
      id: 3,
      name: "Air Force 1",
      category: "Lifestyle Shoes",
      price: 90,
      image: "/placeholder.svg",
      isNew: false,
    },
    {
      id: 4,
      name: "Zoom Pegasus 40",
      category: "Men's Running Shoe",
      price: 130,
      image: "/placeholder.svg",
      isNew: true,
    },
  ];

  const collections = [
    {
      title: "Men's Collection",
      subtitle: "Performance meets style",
      image: "/placeholder.svg",
      href: "/men",
    },
    {
      title: "Women's Collection",
      subtitle: "Designed for greatness",
      image: "/placeholder.svg",
      href: "/women",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-nike-light-grey to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black text-nike-dark mb-6 leading-tight">
            JUST DO IT
          </h1>
          <p className="text-xl md:text-2xl text-nike-grey mb-8 max-w-2xl mx-auto">
            Discover the latest in athletic footwear and apparel. Push your
            limits with gear designed for champions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-nike-dark hover:bg-nike-grey text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-nike-dark text-nike-dark hover:bg-nike-dark hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Explore Collections
            </Button>
          </div>
        </div>
        {/* Abstract design elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-nike-orange rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-nike-dark rounded-full opacity-10" />
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-nike-dark mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-nike-grey max-w-2xl mx-auto">
              Discover our most popular shoes, carefully selected for their
              performance, style, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
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
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-nike-dark group-hover:text-nike-grey transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-nike-grey">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-nike-dark">
                      ${product.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-nike-orange text-nike-orange" />
                      <span className="text-sm text-nike-grey">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-nike-dark text-nike-dark hover:bg-nike-dark hover:text-white px-8 py-3 font-semibold rounded-full"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 bg-nike-light-grey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-nike-dark mb-4">
              Shop by Collection
            </h2>
            <p className="text-xl text-nike-grey">
              Curated collections for every athlete and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <Link
                key={index}
                to={collection.href}
                className="group relative h-96 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-4">
                    {collection.subtitle}
                  </p>
                  <Button
                    size="sm"
                    className="bg-white text-nike-dark hover:bg-nike-light-grey rounded-full"
                  >
                    Shop Now
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-nike-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be the first to know about new products, exclusive offers, and
            athlete stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-nike-dark placeholder-nike-grey focus:outline-none focus:ring-2 focus:ring-nike-orange"
            />
            <Button
              size="lg"
              className="bg-nike-orange hover:bg-nike-orange/90 text-white px-8 py-4 font-semibold rounded-full whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
