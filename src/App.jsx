import Dashboard from "./components/Dashboard";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Dashboard />
      </CartProvider>
    </div>
  );
};

export default App;
