import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav justify-content-end mb-2">
      <li className="nav-item">
        <Link
          to="/"
          className={
            currentPage === "/"
              ? "nav-link link-success fs-2"
              : "nav-link link-light fs-2"
          }
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={
            currentPage === "/about"
              ? "nav-link link-success fs-2"
              : "nav-link link-light fs-2"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resumeInput"
          className={
            currentPage === "/resumeInput"
              ? "nav-link link-success fs-2"
              : "nav-link link-light fs-2"
          }
        >
          Resume Input
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/coverLetter"
          className={
            currentPage === "/coverLetter"
              ? "nav-link link-success fs-2"
              : "nav-link link-light fs-2"
          }
        >
          Cover Lettter
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
