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
              <h6 className="description">Freelance Developer</h6>
            </div>
          </div>
          <hr />
          <Row>
            <Col className="ml-auto mr-auto text-left" md="6">
              <h6>
                <div className="description ">Education:</div>  Computer Science - BS  (University of Iceland)
              </h6>
              <h6>
                <div className="description ">Who am I?</div> I am an honest and easy-going individual. A born and bred team player, having practiced team sports since I was a child. Also a focused hard worker.</h6>
              <h6>
                I got into development because of my passion for video games. I've always been interested in how games are made -- from concept to completion. As my knowledge in the field has increased I've come to realize that my passion isn't solely building complex games, but also software and other digital systems.
              </h6>
              <h6>
                I am fiercely concentrated on improving my game development skills by actively participating in the video game industry.
              </h6>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;
