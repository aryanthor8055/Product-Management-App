export const generateMockProducts = (count) => {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Beauty', 'Toys', 'Automotive'];
  const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'LG', 'HP', 'Dell', 'Canon', 'Nikon'];
  const adjectives = ['Premium', 'Essential', 'Pro', 'Deluxe', 'Classic', 'Modern', 'Advanced', 'Basic'];
  const products = [];

  for (let i = 1; i <= count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const price = Math.floor(Math.random() * 500) + 10;
    const stock = Math.floor(Math.random() * 100);
    
    products.push({
      id: i,
      image: `https://picsum.photos/60/60?random=${i}`,
      name: `${adjective} ${brand} ${category === 'Electronics' ? 'Device' : category.slice(0, -1)}`,
      category,
      price,
      stock,
      status: stock > 20 ? 'In Stock' : stock > 0 ? 'Low Stock' : 'Out of Stock'
    });
  }
  return products;
};