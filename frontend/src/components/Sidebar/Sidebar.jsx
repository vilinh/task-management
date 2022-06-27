import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faComment,
  faGear,
  faInbox,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="profile">
        <img
          src="https://cdn.photographycourse.net/wp-content/uploads/2022/04/how-to-take-professional-headshots.jpg"
          alt="headshot"
          className="headshot"
        />
        <h3 className="name">Anne Cathy</h3>
        <h4 className="title">Sr Designer</h4>
      </div>
      <div className="menu">
        <span className="menu-item">
          <FontAwesomeIcon className="icon" icon={faInbox} />
          Dashboard
        </span>
        <span className="menu-item">
          <FontAwesomeIcon className="icon" icon={faComment} />
          Inbox
        </span>
        <span className="menu-item">
          <FontAwesomeIcon className="icon" icon={faLayerGroup} /> Projects
        </span>
        <span className="menu-item">
          <FontAwesomeIcon className="icon" icon={faGear} /> Settings
        </span>
        <span className="menu-item">
          <FontAwesomeIcon className="icon" icon={faArrowRightFromBracket} />
          Logout
        </span>
      </div>
    </div>
  );
};
