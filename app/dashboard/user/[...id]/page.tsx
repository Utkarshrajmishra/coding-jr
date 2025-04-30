import DashboardHeader from "@/components/dashboardHeader";
import DashboardSidebar from "@/components/dashobardSidebar";
import TotalWeeklyUser from "@/components/total-uses";
import { UserPerMonth } from "@/components/userspermonth";
import WeeklyMostSolved from "@/components/weeklymostsolved";

const Dashboard = () => {
  return (
    <section className="bg-white overflow-hidden flex h-screen w-screen">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <div className="p-4 h-[calc(100vh-55px)] gap-4 flex bg-zinc-50 overflow-scroll w-full">
          <TotalWeeklyUser />
          <UserPerMonth/>
          <WeeklyMostSolved/>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
