import { AlertTriangle, DollarSign, Grid3X3, Package } from "lucide-react";
import { useMemo } from "react";

const StatsCards = ({ products }) => {
  const stats = useMemo(() => {
    const totalProducts = products.length;
    const totalRevenue = products.reduce((sum, p) => sum + (p.price * (100 - p.stock)), 0);
    const lowStockItems = products.filter(p => p.stock <= 20 && p.stock > 0).length;
    const categories = new Set(products.map(p => p.category)).size;

    return { totalProducts, totalRevenue, lowStockItems, categories };
  }, [products]);

  const cards = [
    {
      title: 'Total Products',
      value: stats.totalProducts.toLocaleString(),
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Low Stock Items',
      value: stats.lowStockItems,
      icon: AlertTriangle,
      color: 'bg-orange-500'
    },
    {
      title: 'Categories',
      value: stats.categories,
      icon: Grid3X3,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{card.title}</p>
              <p className="text-2xl font-semibold text-gray-900">{card.value}</p>
            </div>
            <div className={`${card.color} p-3 rounded-lg`}>
              <card.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;