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
import {Button, Container, Row, Col } from "reactstrap";

// core components

function SectionSkills() {
  return (
    <>
      <div className="section section-dark" id="skills">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h2 className="title"><strong>Skills</strong></h2>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h5><strong>
              Over the years I have accumulated skills and knowledge in several programming languages and frameworks. My preferred Operating System is Windows but I have experience in using Linux as well. The languages I know the most are Javascript and C# and have some experience in using Java and Python. Frameworks I have gotten to know and have some skill in using are React and Angular, I like React a bit more since there are more documentations and tutorials online to learn something new. I have good grasp on PostgreSQL and MySQL and I do not prefer either one over the other. I have become quite comfortable using Visual Studio Code to do all my work and love all the neat extension that are available to make coding life easier.
              </strong></h5>
              <div className="mt-5"/>
              <h5><strong>
              I have also some knowledge in using Unity Game engine and I am interested in learning more on how to use the game engine to develop games.
              </strong></h5>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="ml-auto mr-auto text-center">
              <Button
                className="btn-outline-neutral btn-round mr-2"
                color="default"
                href={require("../../assets/cv/resume.pdf")}
                target="_blank"
                download
              >
              Resumé (PDF)
              </Button>
              <Button
                className="btn-outline-neutral btn-round ml-2"
                color="default"
                href={require("../../assets/cv/en-certificate.pdf")}
                target="_blank"
                download
              >
              BS-Certificate (PDF)
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionSkills;