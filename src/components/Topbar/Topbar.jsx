import React from "react";
import "./Topbar.css";
import { Language, Notifications, Settings } from "@mui/icons-material";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <span className="logo">lamaadmin</span>
        </div>
        
        <div className="topbar-right">
          <div className="topbar-icon">
            <Notifications />
            <span className="topbar-tooltip">2</span>
          </div>
          <div className="topbar-icon">
            <Language />
            <span className="topbar-tooltip">1</span>
          </div>
          <div className="topbar-icon">
            <Settings />
          </div>
          <div className="topbar-user">
            <img
              src="https://media.istockphoto.com/photos/portrait-of-a-young-handsome-man-picture-id119094519?k=20&m=119094519&s=612x612&w=0&h=PC8c23Syb6p5wlDZmQ4dGZMDviY6NUKQ6i6F1hyICYM="
              alt="user"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
