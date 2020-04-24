import React, { Component } from "react";
//stateless functional components
const Navbar = ({ totalCounters }) => {
  //above we have used oject destructuring i.e we've picked out totalCounters
  //property from the props object and stored it into the varaible
  //totalCounters
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
          {/* no need to add this as its a fucn..and it will add this in the run time
          but the thing you have topass props in the arguments */}
        </span>{" "}
      </a>
    </nav>
  );
};

export default Navbar;
