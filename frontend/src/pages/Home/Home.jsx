import "./home.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Home = () => {
  return (
    <div className="homeContainer">
      <Sidebar className="sideBar" />
      <div className="dashBoard">
        <div className="dashboard-left">
          <h1>Dashboard</h1>
          <h2>Brief Look</h2>
          <div className="tabs">
            <button className="tab-btn">Weekly</button>
            <button className="tab-btn">Monthly</button>
            <button className="tab-btn">Last year</button>
          </div>
        </div>
        <div className="dashboard-right">
          <h2>Todo</h2>
        </div>
      </div>
    </div>
  );
};
