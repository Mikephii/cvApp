import "./App.css";
import Personal from "./components/personal";
import EducationsHandler from "./components/educationsHandler";
import ExperienceHandler from "./components/experienceHandler";
import Preview from "./components/preview";
import React, { Component } from "react";
import "./components/formStyles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      education: [],
      experience: [],
    };
    this.updatePerson = this.updatePerson.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
  }

  updatePerson(stateName, value) {
    this.setState((prevState) => ({
      [stateName]: value,
    }));
  }

  updateEducation(index, educationObj) {
    console.log("update education");
    let educationCopy = [...this.state.education];
    let newEducation = educationObj;
    educationCopy[index] = newEducation;
    this.setState((prevState) => ({
      education: educationCopy,
    }));
  }

  updateExperience(index, experienceObj) {
    console.log("update education");
    let experienceCopy = [...this.state.experience];
    let newExperience = experienceObj;
    experienceCopy[index] = newExperience;
    this.setState((prevState) => ({
      experience: experienceCopy,
    }));
  }

  render() {
    return (
      <div id="app">
        <Personal updateCV={this.updatePerson}></Personal>
        <EducationsHandler
          updateEducation={this.updateEducation}
          cvData={this.state}
        ></EducationsHandler>
        <ExperienceHandler
          updateEducation={this.updateExperience}
          cvData={this.state}
        ></ExperienceHandler>
        <Preview cvData={this.state}></Preview>
      </div>
    );
  }
}

export default App;
