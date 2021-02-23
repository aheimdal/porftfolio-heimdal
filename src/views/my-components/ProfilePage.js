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
import {
  Container,
  Row,
  Col,
} from "reactstrap";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <div className="section profile-content section-dark" id="about">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/profile.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Anton H. Heimdal<br />
              </h4>
              <h6 className="description">Developer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-left" md="8">
              <h5>
                <strong>Full Name:</strong> Anton H. Heimdal Sigrúnarsson
              </h5>
              <h5>
                <strong>Age:</strong> 35 years
              </h5>
              <h5>
                <strong>Nationality:</strong> Icelandic
              </h5>
              <h5>
                <strong>Education: </strong> Computer Science - BS  (University of Iceland)
              </h5>
              <h5>
                <strong>Current Occupation:</strong> Crane Operator / Window Cleaner (Self-Employed) / Developer
              </h5>
              <h5>
                <strong>Hobbies:</strong> Football, Hiking, Running, Traveling, Tabletop Board Games, Gaming, Whiskey, DIY and spending time with my son.
              </h5>
              <h5>
                <strong>Short Bio:</strong> I am an easy going person that has a good sense of humor, I work hard and I highly value teamwork, since I been playing team sport most of my life. My dream is to work in game development with a respected company in the future.
              </h5>
              <br />
            </Col>
          </Row>
        </Container>
        </div>
    </>
  );
}

export default ProfilePage;
