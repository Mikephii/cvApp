import React, { Component } from "react";
import Experience from "./experience";

class ExperienceHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educations: 1,
    };
    this.createForms = this.createForms.bind(this);
    this.addForm = this.addForm.bind(this);

    this.deleteForm = this.deleteForm.bind(this);
  }

  createForms() {
    let formsArray = [];
    var i;
    for (i = 1; i < this.state.educations; i++) {
      formsArray = [
        ...formsArray,
        <Experience
          key={i - 1}
          addForm={this.addForm}
          deleteForm={this.deleteForm}
          fieldData={this.props.cvData.experience[i - 1]}
          cvData={this.props.cvData}
          updateEducation={this.props.updateEducation}
          edit={false}
          educationID={i - 1}
        ></Experience>,
      ];
    }
    formsArray = [
      ...formsArray,
      <Experience
        key={this.state.educations - 1}
        addForm={this.addForm}
        deleteForm={this.deleteForm}
        fieldData={this.props.cvData.experience[this.state.educations - 1]}
        cvData={this.props.cvData}
        updateEducation={this.props.updateEducation}
        edit="true"
        educationID={this.state.educations - 1}
      ></Experience>,
    ];
    return formsArray;
  }

  addForm() {
    this.setState((prevState) => ({
      educations: prevState.educations + 1,
    }));
  }

  deleteForm() {
    this.setState((prevState) => ({
      educations: prevState.educations - 1,
    }));
  }

  render() {
    return (
      <div className="experienceBox">
        <h2 className="formHeader">Experience</h2>
        {this.createForms()}
      </div>
    );
  }
}

export default ExperienceHandler;
