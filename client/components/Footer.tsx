import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, MapPin } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "New & Featured", href: "/new" },
        { name: "Men", href: "/men" },
        { name: "Women", href: "/women" },
        { name: "Kids", href: "/kids" },
        { name: "Shoes", href: "/shoes" },
        { name: "Accessories", href: "/accessories" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Get Help", href: "/help" },
        { name: "Order Status", href: "/order-status" },
        { name: "Shipping & Delivery", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "Size Charts", href: "/size-charts" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About STRIDE", href: "/about" },
        { name: "News", href: "/news" },
        { name: "Careers", href: "/careers" },
        { name: "Investors", href: "/investors" },
        { name: "Sustainability", href: "/sustainability" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Find a Store", href: "/stores" },
        { name: "STRIDE App", href: "/app" },
        { name: "Membership", href: "/membership" },
        { name: "Student Discount", href: "/student" },
        { name: "Gift Cards", href: "/gift-cards" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-nike-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-nike-grey hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter and social */}
        <div className="border-t border-nike-grey/20 pt-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-xl mb-4">Be the first to know</h3>
              <p className="text-nike-grey mb-6">
                Sign up for updates from STRIDE with the latest products,
                athlete stories and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-nike-grey/30 rounded text-white placeholder-nike-grey focus:outline-none focus:ring-2 focus:ring-nike-orange focus:border-transparent"
                />
                <button className="px-6 py-3 bg-nike-orange hover:bg-nike-orange/90 text-white font-semibold rounded transition-colors duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social and location */}
            <div>
              <h3 className="font-bold text-xl mb-4">Connect with us</h3>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-nike-orange transition-colors duration-200 group"
                    >
                      <Icon className="w-5 h-5 text-nike-grey group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-nike-grey mt-1" />
                <div>
                  <p className="font-semibold">United States</p>
                  <p className="text-nike-grey text-sm">
                    Change location to see relevant pricing and availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-nike-grey/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Logo and copyright */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-nike-dark">
                  <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.456 0-2.525-.616-2.525-1.848 0-.462.154-.924.462-1.232L16.5 7.8H24z" />
                </svg>
              </div>
              <span className="text-nike-grey text-sm">
                © 2024 STRIDE, Inc. All rights reserved.
              </span>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm text-nike-grey">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="hover:text-white transition-colors duration-200"
              >
                Cookie Settings
              </Link>
              <Link
                to="/accessibility"
                className="hover:text-white transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
