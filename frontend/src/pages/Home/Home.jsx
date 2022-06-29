import "./home.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Panel } from "../../components/Panel/Panel";
import { TodoPanel } from "../../components/TodoPanel/TodoPanel";
import { Footer } from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretRight, faHamburger } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="navBar">
          <FontAwesomeIcon className="sideMenu" icon={faBars} />
        </div>
        <Sidebar className="sideBar" />
        <div className="dashBoard">
          <div className="dashboard-left">
            <h1>Dashboard</h1>
            <div className="panels">
              <Panel className="panel-top" />
              <Panel className="panel-bottom" />
            </div>
          </div>
          <div className="dashboard-right">
            <h2>Todo</h2>
            <div className="todo-items">
              <TodoPanel />
              <TodoPanel />
              <TodoPanel />
              <TodoPanel />
              <TodoPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
