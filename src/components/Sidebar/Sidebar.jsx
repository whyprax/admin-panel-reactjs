import {
  AnalyticsSharp,
  Feedback,
  LineStyle,
  Mail,
  ManageAccounts,
  Message,
  Money,
  Person,
  Report,
  Shop,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-menu-heading">Dashboard</h3>
          <ul className="sidebar-menu-list">
            <Link to="/">
              <li className="sidebar-menu-list-item">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebar-menu-list-item">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebar-menu-list-item">
              <TrendingUp className="sidebarIcon" />
              Scale
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-menu-heading">Quick Menu</h3>
          <ul className="sidebar-menu-list">
            <Link to="user">
              <li className="sidebar-menu-list-item">
                <Person className="sidebarIcon" />
                Users
              </li>
            </Link>
            <li className="sidebar-menu-list-item">
              <Shop className="sidebarIcon" />
              Products
            </li>
            <li className="sidebar-menu-list-item">
              <Money className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebar-menu-list-item">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-menu-heading">Notifications</h3>
          <ul className="sidebar-menu-list">
            <li className="sidebar-menu-list-item">
              <Mail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebar-menu-list-item">
              <Feedback className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebar-menu-list-item">
              <Message className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-menu-heading">Staff</h3>
          <ul className="sidebar-menu-list">
            <li className="sidebar-menu-list-item">
              <ManageAccounts className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebar-menu-list-item">
              <AnalyticsSharp className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebar-menu-list-item">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
