/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import {Container, Row, Col } from "reactstrap";

function MyFooter() {
  return (
    <footer className="footer footer-black" id="contact">
      <Container>
      <Row>
      <Col>
        <h2 className="text-center"> <strong>Contact me</strong></h2>
      </Col>
      </Row>
        <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <nav className="footer-nav" md="6">
            <ul>
              <li>
                <a
                  href="mailto:heimdal1909@gmail.com"
                  target="_blank"
                >
                  <i className="fa fa-google" />
                </a>
                <h6>Gmail</h6>
              </li>
              <li>
                <a
                  href="https://github.com/aheimdal"
                  target="_blank"
                > 
                  <i className="fa fa-github" />
                </a>
                <h6>Github</h6>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anton-heimdal-a1b362162/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <h6>LinkedIn</h6>
              </li>
            </ul>
          </nav>
          </Col>
          <Col className="ml-auto mr-auto text-center" md="8">
          <h6>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, built on a template from
              {" "}
              <ae
            href="https://www.creative-tim.com?ref=pkr-index-page"
          ><strong>
            Creative Tim
            </strong>
          </a> {" "} 
          by Anton H. Heimdal
            </span>
          </div>
          </h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
