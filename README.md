# STRIDE - Modern E-Commerce Platform

A modern, responsive e-commerce website inspired by Nike, built with React and Express. Features a clean minimalistic UI, product catalog, shopping cart, user authentication, and secure checkout flow.

## 🚀 Features

### Current Features (Phase 1)

- ✅ **Modern UI/UX**: Clean, minimalistic design inspired by Nike
- ✅ **Responsive Design**: Mobile-first approach, works on all screen sizes
- ✅ **Homepage**: Hero section with featured products and collections
- ✅ **Navigation**: Sticky header with search, cart, and mobile menu
- ✅ **Product Display**: Featured products with ratings and pricing
- ✅ **Brand Identity**: Custom Nike-inspired color scheme and typography
- ✅ **Footer**: Comprehensive footer with newsletter signup and social links

### Planned Features (Phase 2 & Beyond)

- 🔲 **Product Catalog**: Full product listing with filtering and search
- 🔲 **Product Details**: Individual product pages with image galleries
- 🔲 **Shopping Cart**: Add to cart, quantity management, and checkout
- 🔲 **User Authentication**: Sign up, login, and profile management with JWT
- 🔲 **Payment Integration**: Stripe/PayPal integration for secure payments
- 🔲 **Order Management**: Order history and tracking
- 🔲 **Admin Dashboard**: Product management and analytics
- 🔲 **Reviews & Ratings**: Customer reviews and product ratings
- 🔲 **Wishlist**: Save products for later
- 🔲 **Inventory Management**: Stock tracking and notifications

## 🛠 Tech Stack

### Frontend

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **React Router 6** - Client-side routing with SPA mode
- **TailwindCSS 3** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **Zod** - Schema validation

### Planned Backend Additions

- **MongoDB** - NoSQL database for product and user data
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Stripe API** - Payment processing
- **Cloudinary** - Image hosting and optimization

### Development Tools

- **Vitest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Hot Reload** - Instant development feedback

## 📁 Project Structure

```
├── client/                          # React frontend
│   ├── components/                  # Reusable UI components
│   │   ├── ui/                     # Shadcn/UI component library
│   │   ├── Header.tsx              # Navigation header
│   │   └── Footer.tsx              # Site footer
│   ├── pages/                      # Route components
│   │   ├── Index.tsx               # Homepage
│   │   ├── Products.tsx            # Product listing (placeholder)
│   │   └── NotFound.tsx            # 404 page
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utilities and helpers
│   ├── App.tsx                     # Main app component and routing
│   └── global.css                  # Global styles and CSS variables
├── server/                         # Express backend
│   ├── routes/                     # API route handlers
│   └── index.ts                    # Server setup and configuration
├── shared/                         # Shared types and interfaces
│   └── api.ts                      # API response types
├── public/                         # Static assets
└── README.md                       # This file
```

## 🏁 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd stride-ecommerce
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

```bash
# Development
npm run dev          # Start dev server (client + server)
npm run typecheck    # Run TypeScript validation

# Production
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm test            # Run test suite
npm run test:watch  # Run tests in watch mode

# Code Quality
npm run format.fix  # Format code with Prettier
```

## 🎨 Design System

### Color Palette

The application uses a Nike-inspired color scheme:

- **Primary**: `#000000` (Nike Black)
- **Orange Accent**: `#FF6600` (Nike Orange)
- **Grey**: `#757575` (Nike Grey)
- **Light Grey**: `#F5F5F5` (Background)
- **White**: `#FFFFFF` (Clean background)

### Typography

- **Font**: System font stack for optimal performance
- **Headings**: Bold, large typography for impact
- **Body**: Clean, readable text with proper hierarchy

### Component Library

Built on Radix UI primitives with custom styling:

- Buttons with multiple variants
- Form inputs and controls
- Navigation menus
- Cards and layouts
- Icons from Lucide React

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```bash
# Server Configuration
PORT=8080
NODE_ENV=development

# Database (for future MongoDB integration)
MONGODB_URI=mongodb://localhost:27017/stride

# Authentication (for future JWT implementation)
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

# Payment Integration (for future Stripe integration)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### Tailwind Configuration

Custom theme configuration in `tailwind.config.ts`:

- Nike brand colors
- Custom spacing and sizing
- Component-specific styling
- Dark mode support

## 🚀 Deployment

### Standard Deployment

```bash
npm run build
npm start
```

### Docker Deployment

```bash
docker build -t stride-ecommerce .
docker run -p 8080:8080 stride-ecommerce
```

### Vercel Deployment

1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

## 📱 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Use TypeScript for all new code
- Follow the existing component structure
- Write tests for new features
- Ensure responsive design on all screen sizes
- Follow the established design system

## 🔮 Future Improvements

### Phase 2: Core E-Commerce Features

- **Product Management**: Full CRUD operations for products
- **User Accounts**: Registration, login, profile management
- **Shopping Cart**: Persistent cart with local storage
- **Checkout Flow**: Multi-step checkout with validation

### Phase 3: Advanced Features

- **Payment Integration**: Stripe and PayPal support
- **Order Management**: Order tracking and history
- **Reviews System**: Customer reviews and ratings
- **Search & Filters**: Advanced product search and filtering

### Phase 4: Platform Features

- **Admin Dashboard**: Product and order management
- **Analytics**: Sales and user behavior analytics
- **Inventory**: Stock management and notifications
- **Recommendations**: AI-powered product recommendations

### Phase 5: Mobile & Performance

- **Progressive Web App**: PWA capabilities
- **Performance Optimization**: Code splitting and lazy loading
- **Mobile App**: React Native mobile application
- **SEO Optimization**: Server-side rendering with Next.js

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**STRIDE** - _Just Do It_ 🏃‍♂️💨
