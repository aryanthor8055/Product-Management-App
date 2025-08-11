import { useMemo, useState } from "react";
import Header from "./Header";
import ProductTable from "./ProductTable";
import StatsCards from "./StatsCard";
import { generateMockProducts } from "../utils/mockData";
import { useDebounce } from "../hooks/customHook";
import { useCart } from "../contexts/CartContext"; // Import useCart

const Dashboard = () => {
  const { 
    cart, 
    cartCount, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen, 
    addToCart, 
    removeFromCart, 
    updateQuantity 
  } = useCart();

  const [products] = useState(() => generateMockProducts(1000));
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredProducts = useMemo(() => {
    if (!debouncedSearchTerm) return products;
    return products.filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
    );
  }, [products, debouncedSearchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartCount}
        setIsCartOpen={setIsCartOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <main className="p-6">
        <StatsCards products={products} />
        <ProductTable 
          products={filteredProducts} 
          addToCart={addToCart} 
        />
      </main>
      
    </div>
  );
};

export default Dashboard;