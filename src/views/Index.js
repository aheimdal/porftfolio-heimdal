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

// core components
import IndexNavbar from "./my-components/IndexNavbar";
import IndexHeader from "./my-components/IndexHeader";
import MyFooter from "./my-components/MyFooter";

// index sections
import ProfilePage from "./my-components/ProfilePage";
import SectionSkills from "./my-components/SectionSkills";
import Projects from "./my-components/Projects";
import SectionAbout from "./my-components/SectionAbout";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      {/**/}
      <IndexNavbar/>
      <IndexHeader />
      <div className="main">
        <SectionAbout/>
        <ProfilePage/>
        <Projects/>
        <SectionSkills/>
        <MyFooter/>
      </div>
    </>
  );
}

export default Index;
