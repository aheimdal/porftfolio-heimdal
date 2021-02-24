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
          <hr/>
           <Row>
            <Col className="ml-auto mr-auto text-left" md="6">
              <h6>
                <div className="description ">Full Name:</div> Anton H. Heimdal Sigrúnarsson
              </h6>
              <h6>
                <div className="description ">Age:</div> 35 years
              </h6>
              <h6>
                <div className="description ">Nationality:</div> Icelandic
              </h6>
              <h6>
                <div className="description ">Education:</div>  Computer Science - BS  (University of Iceland)
              </h6>
              <h6>
                <div className="description ">Current Occupation:</div> Crane Operator / Window Cleaner (Self-Employed) / Developer
              </h6>
              <h6>
                <div className="description ">Hobbies:</div> Football, Hiking, Running, Traveling, Tabletop Board Games, Gaming, Whiskey, DIY and spending time with my son.
              </h6>
              <h6>
                <div className="description ">Short Bio:</div> I am an easy going and honest person that has a good sense of humor, I work hard and I highly value teamwork since I have been playing team sports most of my life.</h6> 
                <h6>The main reason I got into the development and programming field was because of games. I have always been interested in how games are made from conception to a finished product. The more I learned the more I realized it does not only apply to building complex games but also complex softwares and other digital infrastructures.
              </h6>
              <h6>
                My dream is to get in to game development and be a part of the entertainment industry.
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
