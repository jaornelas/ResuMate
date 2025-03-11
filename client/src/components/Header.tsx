import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar"

function Header() {
    return(
        <div>
            <Container>
            <h1>ResuMate</h1>
            <Navbar/>
            </Container>
        </div>
    )

}

export default Header;