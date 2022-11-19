import React from "react";
import Card from "./Card";
import styles from "../../styles/Admin/Dashboard.module.css";
import Graph from "./Graph";
import RecentUsers from "./RecentUsers";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {[1, 3, 2, 2].map((item) => (
          <Card />
        ))}
      </div>
      <div className={styles.flex}>
        <Graph />
        <LineChart />
      </div>
      <div className={styles.flex} style={{ alignItems: "flex-start" }}>
        <BarChart />
        <RecentUsers />
      </div>
    </div>
  );
};

export default Dashboard;
