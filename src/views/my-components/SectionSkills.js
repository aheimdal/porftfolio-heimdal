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
          <hr />
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h5><strong>
                <ul>
                  <li><strong>Operating Systems</strong>
                    <ul>
                      <li>Windows ★★★★★</li>
                      <li>Unix ★★★☆☆</li>
                    </ul>
                  </li>
                  <li><strong>Languages</strong>
                    <ul>
                      <li>Javascript ★★★★☆</li>
                      <li>C# ★★★★☆</li>
                      <li>Java ★★☆☆☆</li>
                      <li>Python&nbsp;★★☆☆☆</li>
                      <li>SQL ★★☆☆☆</li>
                    </ul>
                  </li>
                  <li><strong>Frameworks</strong>
                    <ul>
                      <li>React ★★★★☆</li>
                      <li>Angular ★★★☆☆</li>
                    </ul>
                  </li>
                  <li><strong>Game Engines</strong>
                    <ul>
                      <li>Unity ★★★☆☆</li>
                    </ul>
                  </li>
                  <li><strong>Database Management Systems</strong>
                    <ul>
                      <li>PostgreSQL ★★★★☆</li>
                      <li>MySQL ★★★★☆</li>
                    </ul>
                  </li>
                  <li><strong>Tooling</strong>
                    <ul>
                      <li>Visual Studio Code ★★★★☆</li>
                    </ul>
                  </li>
                </ul>
              </strong></h5>
              <div className="mt-5" />

            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="ml-auto mr-auto text-center">
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href={require("../../assets/cv/Resumé.pdf")}
                target="_blank"
                download
              >
                Resumé (PDF)
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionSkills;
