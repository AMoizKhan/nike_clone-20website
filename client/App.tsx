import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Shoes from "./pages/Shoes";
import Accessories from "./pages/Accessories";
import NewFeatured from "./pages/NewFeatured";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout component for pages that need header and footer
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

// Homepage layout without header/footer (has its own full-screen design)
const HomeLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <Header />
    {children}
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayout>
                <Index />
              </HomeLayout>
            }
          />
          <Route
            path="/new"
            element={
              <Layout>
                <NewFeatured />
              </Layout>
            }
          />
          <Route
            path="/men"
            element={
              <Layout>
                <Men />
              </Layout>
            }
          />
          <Route
            path="/women"
            element={
              <Layout>
                <Women />
              </Layout>
            }
          />
          <Route
            path="/kids"
            element={
              <Layout>
                <Kids />
              </Layout>
            }
          />
          <Route
            path="/shoes"
            element={
              <Layout>
                <Shoes />
              </Layout>
            }
          />
          <Route
            path="/accessories"
            element={
              <Layout>
                <Accessories />
              </Layout>
            }
          />
          <Route
            path="/stores"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />
          <Route
            path="/help"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />
          <Route
            path="/join"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
