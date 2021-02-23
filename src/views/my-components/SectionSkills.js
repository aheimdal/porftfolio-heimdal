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
            <Col className="ml-auto mr-auto text-center" md="8">
              <h5 className="title"><strong>Over the years I have accumulated skills and knowledge in several programming languages and frameworks. The languages I know the most are Javascript and C#. Frameworks I have gotten to know and have some skill in using are React and Angular, I like React a bit more since there are more documentations and tutorials online to learn something new. I have good grasp on PostgreSQL and MySQL and I do not prefer either one over the other. I have experience in using the Unity Engine in developing games there but nothing I have published yet. </strong></h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionSkills;
