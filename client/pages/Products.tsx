import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-nike-light-grey">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-nike-dark mb-4">
            Products Page
          </h1>
          <p className="text-xl text-nike-grey mb-8">
            Coming soon - full product catalog with filtering and search
          </p>
          <div className="w-16 h-16 bg-nike-orange rounded-full mx-auto animate-pulse"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
