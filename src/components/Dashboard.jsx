import Header from './Header';
import ProductTable from './ProductTable';
import StatsCards from './StatsCard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <main className="p-6">
        <StatsCards/>
        <ProductTable/>
      </main>
    </div>
  );
};

export default Dashboard;