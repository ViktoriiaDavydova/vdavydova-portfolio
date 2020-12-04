import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="tabcontent">
          <h3>About Me</h3>
          <br />
          <img class="aboutMeImg"
            src={require("../images/aboutMeImg.jpg")}
            alt="Some nature"
          />
          <p>My name is Viktoriia and I am looking for a Front End Web Developer role.</p>

          <p>I love to create new things and bring my ideas to life, being inspired by the people and the world around me.</p>

          <p>I am constantly developing my skills and knowledge.</p>

          <p>I love challenges and finding non-standard ways to solve them.</p>

        </div>
      </div>
    );
  }
}

export default AboutMe;
