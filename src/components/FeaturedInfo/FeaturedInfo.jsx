import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./FeaturedInfo.css";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revenue</span>
        <div className="featured-money-container">
          <span className="featured-money">$2,454</span>
          <span className="featured-money-rate">
            -11.4 <ArrowDownward className="arrow-down" />
          </span>
        </div>
        <span className="featured-subtitle">Compared to last month</span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$4,454</span>
          <span className="featured-money-rate">
            -1.4 <ArrowDownward />
          </span>
        </div>
        <span className="featured-subtitle">Compared to last month</span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$2,024</span>
          <span className="featured-money-rate">
            +2.1 <ArrowUpward />
          </span>
        </div>
        <span className="featured-subtitle">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
