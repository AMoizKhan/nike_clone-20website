import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, User, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "New & Featured", href: "/new" },
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Kids", href: "/kids" },
    { name: "Shoes", href: "/shoes" },
    { name: "Accessories", href: "/accessories" },
  ];

    return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="w-8 h-8 bg-nike-dark flex items-center justify-center rounded">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.456 0-2.525-.616-2.525-1.848 0-.462.154-.924.462-1.232L16.5 7.8H24z" />
                  </svg>
                </div>
                <span className="ml-2 text-xl font-bold text-nike-dark">
                  STRIDE
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-nike-dark hover:text-nike-grey transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-nike-grey w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 w-44 bg-nike-light-grey border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-nike-dark"
                  />
                </div>
              </div>

              {/* Mobile search toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="sm" className="hidden md:flex p-2">
                <Heart className="w-5 h-5" />
              </Button>

                            {/* Help */}
              <Link
                to="/help"
                className="hidden md:flex text-sm text-nike-grey hover:text-nike-dark transition-colors"
              >
                Help
              </Link>

              {/* Sign In */}
              <Link
                to="/login"
                className="hidden md:flex text-sm text-nike-grey hover:text-nike-dark transition-colors"
              >
                Sign In
              </Link>

              {/* Shopping bag */}
              <Button variant="ghost" size="sm" className="relative p-2">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-nike-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>

              {/* Mobile menu toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      {isSearchOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-nike-grey w-4 h-4" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-3 w-full bg-nike-light-grey border-none rounded-full"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-6 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-lg font-medium text-nike-dark hover:text-nike-grey transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-border space-y-4">
              <Link
                to="/account"
                className="flex items-center space-x-3 text-nike-dark hover:text-nike-grey transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="w-5 h-5" />
                <span>Account</span>
              </Link>
              <Link
                to="/wishlist"
                className="flex items-center space-x-3 text-nike-dark hover:text-nike-grey transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}