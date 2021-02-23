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
import { Container, Row, Col } from "reactstrap";

// core components

function SectionSkills() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h2 className="title"><strong>Skills</strong></h2>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h5 className="title"><strong>Over the years I have accumulate skills and knowledge in several programming languages and frameworks</strong></h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionSkills;
