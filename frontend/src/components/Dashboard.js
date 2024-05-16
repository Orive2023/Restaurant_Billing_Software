import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const { state } = useLocation();
  console.log(state);
  return <div>Dashboard</div>;
};

export default Dashboard;
