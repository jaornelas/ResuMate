import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return(
        <footer>
            <Container>
                {/*Column 1*/}
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>ResuMate</h4>
                        <ul className="list-unstyled">
                            <li>Contact Us</li>
                            <li>Email</li>
                        </ul>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        ResuMate - All Rights Reserved
                    </p>
                </div>
            </Container>
        </footer>
    )

}

export default Footer;