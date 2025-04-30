import DashboardHeader from "@/components/dashboardHeader";
import DashboardSidebar from "@/components/dashobardSidebar";

const Dashboard = () => {
  return (
    <section className="bg-white flex h-screen w-screen">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardHeader />
      </div>
    </section>
  );
};

export default Dashboard;
