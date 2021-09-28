import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
                Add Machines
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Select Machines
              </li>
            </Link>

              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Contact Us
              </li>
           
          </ul>
        </div>
        
      </div>
    </div>
  );
}
