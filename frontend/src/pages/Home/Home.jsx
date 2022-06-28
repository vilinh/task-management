import "./home.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Home = () => {
  return (
    <div className="homeContainer">
      <Sidebar className="sideBar" />
      <div className="dashBoard">
        <div className="dashboard-left">
          <h1>Dashboard</h1>
          <div className="panels">
            <div className="panel-top">
              <h2>Brief Look</h2>
              <div className="tabs">
                <button className="tab-btn">Weekly</button>
                <button className="tab-btn">Monthly</button>
                <button className="tab-btn">Last year</button>
              </div>
              <div className="activity">hello</div>
            </div>

            <div className="panel-bottom">
              <h2>Most Popular Projects</h2>
              <div className="tabs">
                <button className="tab-btn">Last 30 Days</button>
                <button className="tab-btn">Last 90 Days</button>
                <button className="tab-btn">Last year</button>
                <button className="tab-btn">All Time</button>
              </div>
              <div className="activity">hello</div>
            </div>
          </div>
        </div>
        <div className="dashboard-right">
          <h2>Todo</h2>
          <div className="todo-items">
            <div className="todo-panel">todo</div>
            <div className="todo-panel">todo</div>
          </div>
        </div>
      </div>
    </div>
  );
};
