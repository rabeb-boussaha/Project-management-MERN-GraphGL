import React from "react";
import logo from "../components/assets/logo1.svg";

export default function Hedaer() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div className="">ProjectMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
