import Header from './Header';
import StatsCards from './StatsCard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <main className="p-6">
        <StatsCards/>
      </main>
    </div>
  );
};

export default Dashboard;