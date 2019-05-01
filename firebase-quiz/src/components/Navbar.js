import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-light" style={{"background-color: #e3f2fd"}}>
      
      <a class="navbar-brand" href="#">
    <img src="../images/qblogo-100x100.png" width="30" height="30" alt=""></img>
  </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
          </button>
          <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Sign-In</h5>
      <h5 class="text-white h4">Sign-Up</h5>
      <h5 class="text-white h4">Account</h5>
      <h5 class="text-white h4">My Quizzes</h5>
      <h5 class="text-white h4">My Scores</h5>
    </div>
  </div>

        <div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Placeholder
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button class="dropdown-item" type="button">
                <NavLink to="/">Home</NavLink>
              </button>
              <button class="dropdown-item" type="button">
                Quizzes
              </button>
              <button class="dropdown-item" type="button">
                High Scores
              </button>
            </div>
          </div>
        </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
