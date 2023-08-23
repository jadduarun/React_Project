import React from "react";
import { Link, Outlet } from "react-router-dom";

function HomeNav() {
  return (
    <div className="homenav">
      <div className="homenav-link">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeNav;
