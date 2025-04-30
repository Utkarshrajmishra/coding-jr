import DashboardHeader from "@/components/dashboardHeader";
import DashboardSidebar from "@/components/dashobardSidebar";
import TotalWeeklyUser from "@/components/total-uses";

const Dashboard = () => {
  return (
    <section className="bg-white flex h-screen w-screen">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <div className="p-4 bg-zinc-50 h-full w-full">
          <TotalWeeklyUser />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
