import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar() {
  const currentPage = useLocation().pathname;

  return (
    <Nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
    <a className="navbar-brand">ResuMate</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Build your Resume
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/pages/resumeInput.tsx">Resume</a></li>
            <li><a className="dropdown-item" href="#">Cover Letter</a></li>
            <li><a className="dropdown-item" href="/pages/saved.tsx">Saved Resumes</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</Nav>
  
  );
}

export default CustomNavbar;

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