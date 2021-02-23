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
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Projects() {
  return (
    <>
      <div className="section" id="projects">
        <Container>
        <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title"><strong>Projects</strong></h2>
              <h6 className="description">
                Here are some projects I have been a part of and other projects I am working on.
              </h6>
            </Col>
          </Row>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="examples/landing.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/rungunrenegade.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-default btn-round"
                color="default"
                href="https://notendur.hi.is/~ahh30/Megaman/"
                target="_blank"
              >
                Play Game
              </Button>
              <Button
                className="btn-outline-default btn-round ml-3"
                color="default"
                href="https://github.com/aheimdal/Megaman"
                target="_blank"
              >
                Source Code
              </Button>
              <h6 class="mt-3">This Javascript Game was created by 4 students at the University of Iceland. Working together as 
                                a team to complete the assignment for "Computer Game Programming" - (TÖL308G - Fall 2018)</h6>
            </Col>
            <Col className="text-center" md="6">
              <a href="examples/profile.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/rvk.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-default btn-round"
                color="default"
                href="/profile-page"
                target="_blank"
                disabled = "disabled"
              >
                Visit Page Unavailabe
              </Button>
              <Button
                className="btn-outline-default btn-round ml-3"
                color="default"
                href="https://github.com/unarunars/hugbo"
                target="_blank"
              >
                Source Code
              </Button>
              <h6 class="mt-3">This app was created by 4 students at the University of Iceland. Working together as a team to 
                  complete the assignment for "Software Project 1" - (HBV501G – Fall 2019)</h6>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Projects;
