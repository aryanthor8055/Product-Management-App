import { Eye, Edit, Trash2, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

const products = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/71v9XWzqQ6L._AC_UF1000,1000_QL80_.jpg",
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 89.99,
    stock: 45,
    status: "In Stock"
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61L5QgPvgxL._AC_UF1000,1000_QL80_.jpg",
    name: "Smartphone Pro Max",
    category: "Electronics",
    price: 999.00,
    stock: 8,
    status: "Low Stock"
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/71X8N9n2UIL._AC_UF1000,1000_QL80_.jpg",
    name: "Organic Cotton T-Shirt",
    category: "Clothing",
    price: 24.99,
    stock: 0,
    status: "Out of Stock"
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg",
    name: "Stainless Steel Water Bottle",
    category: "Home",
    price: 19.95,
    stock: 32,
    status: "In Stock"
  }
];

const ProductTable = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'image', label: 'Image' },
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price' },
    { key: 'stock', label: 'Stock' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' }
  ];

  const categories = [...new Set(products.map(p => p.category))];
  const statuses = [...new Set(products.map(p => p.status))];

  const renderCell = (product, columnKey) => {
    switch (columnKey) {
      case 'image':
        return (
          <img
            src={product.image}
            alt={product.name}
            className="w-12 h-12 object-cover rounded"
          />
        );
      case 'price':
        return <span className="text-green-600 font-semibold">${product.price}</span>;
      case 'status':
        const statusColors = {
          'In Stock': 'bg-green-100 text-green-800',
          'Low Stock': 'bg-orange-100 text-orange-800',
          'Out of Stock': 'bg-red-100 text-red-800'
        };
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[product.status]}`}>
            {product.status}
          </span>
        );
      case 'actions':
        return (
          <div className="flex space-x-2">
            <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-1 text-green-600 hover:bg-green-50 rounded">
              <Edit className="w-4 h-4" />
            </button>
            <button className="p-1 text-red-600 hover:bg-red-50 rounded">
              <Trash2 className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        );
      default:
        return product[columnKey];
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <h2 className="text-lg font-semibold text-gray-900">Products</h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Statuses</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.label}</span>
                    <Menu className="w-3 h-3 text-gray-400" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {renderCell(product, column.key)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing 1 to 4 of 4 results
        </div>
        <div className="flex items-center space-x-2">
          <button
            disabled
            className="p-2 border border-gray-300 rounded hover:bg-gray-50 opacity-50 cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-4 py-2 text-sm text-gray-700">
            Page 1 of 1
          </span>
          <button
            disabled
            className="p-2 border border-gray-300 rounded hover:bg-gray-50 opacity-50 cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;