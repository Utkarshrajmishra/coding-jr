"use client";
import { useState, useEffect } from "react";
import { Analyatics } from "@/components/analytics";
import DashboardHeader from "@/components/dashboardHeader";
import DashboardSidebar from "@/components/dashobardSidebar";
import { FavProblems } from "@/components/topfavQuestions";
import TotalWeeklyUser from "@/components/total-uses";
import { UserPerMonth } from "@/components/userspermonth";
import WeeklyMostSolved from "@/components/weeklymostsolved";
import { Toaster } from "react-hot-toast";

import CodingProblemForm from "@/components/addProblems";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen]=useState<boolean>(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };

    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section className="bg-white overflow-hidden flex h-screen w-screen">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`
        fixed md:relative z-30 h-full 
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <DashboardSidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col w-full">
        <DashboardHeader setOpen={setOpen} toggleSidebar={toggleSidebar} />
        <div className="p-4 h-[calc(100vh-55px)] gap-4 flex flex-col bg-white overflow-scroll w-full">
          {!open ? (
            <>
              <div className="flex flex-col lg:flex-row gap-4">
                <Analyatics />
                <TotalWeeklyUser />
              </div>
              <div className="flex flex-col md:flex-row flex-wrap gap-4">
                <UserPerMonth />
                <FavProblems />
                <WeeklyMostSolved />
              </div>
            </>
          ) : (
            <CodingProblemForm />
          )}
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Dashboard;
