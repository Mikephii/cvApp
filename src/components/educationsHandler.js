import React, { Component } from "react";
import Education from "./education";

class EducationsHandler extends Component {
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
        <Education
          key={i - 1}
          addForm={this.addForm}
          deleteForm={this.deleteForm}
          cvData={this.props.cvData}
          fieldData={this.props.cvData.education[i - 1]}
          updateEducation={this.props.updateEducation}
          edit={false}
          educationID={i - 1}
        ></Education>,
      ];
    }
    formsArray = [
      ...formsArray,
      <Education
        key={this.state.educations - 1}
        addForm={this.addForm}
        deleteForm={this.deleteForm}
        cvData={this.props.cvData}
        fieldData={this.props.cvData.education[this.state.educations - 1]}
        updateEducation={this.props.updateEducation}
        edit="true"
        educationID={this.state.educations - 1}
      ></Education>,
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
      <div className="educationBox">
        <h2 className="formHeader">Education</h2>
        {this.createForms()}
      </div>
    );
  }
}

export default EducationsHandler;
