import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">ResuMate</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

   <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Resume Input</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cover Letter</a>
      </li>
    </ul>
    
  </div>


    {/* <ul className="nav justify-content-end mb-2">
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
    </ul> */}
    </Navbar>
  
  );
}

export default CustomNavbar;
