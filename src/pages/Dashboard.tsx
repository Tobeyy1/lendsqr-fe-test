import React from "react";
import DashboardTopBar from "../components/DashboardTopBar";
import NavBar from "../components/NavBar";
import Users from "../components/Users";
import classes from "./Dashboard.module.css";
// import UserDetails from "./UserDetails";
import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
  const dashboardContent = () => {
    return (
      <div className={classes.dashboard__text}>
        This page is under construction
      </div>
    );
  };
  return (
    <div className={classes.container}>
      <NavBar />
      <section>
        <DashboardTopBar />
        <Routes>
          <Route path="/" element={dashboardContent()} />
          <Route path="users/*" element={<Users />} />
          <Route path="*" element={dashboardContent()} />
        </Routes>
      </section>
    </div>
  );
};

export default Dashboard;
