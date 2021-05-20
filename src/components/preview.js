import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);

    this.previewEducations = this.previewEducations.bind(this);
    this.previewExperience = this.previewExperience.bind(this);
  }

  previewEducations() {
    let jsxArray = [];

    this.props.cvData.education.forEach((educationObj) => {
      let newJsx = (
        <div className="cvCardEdu">
          <h2 className="cvTextBold">{educationObj.university}</h2>
          <p className="cvText">{educationObj.degree}</p>
          <p className="cvStart">{educationObj.startDate} -</p>
          <p className="cvEnd">{educationObj.endDate}</p>
        </div>
      );

      jsxArray = [...jsxArray, newJsx];
    });
    return jsxArray;
  }

  previewExperience() {
    let jsxArray = [];

    this.props.cvData.experience.forEach((educationObj) => {
      let newJsx = (
        <div className="cvCardExp">
          <h2 className="cvTextBold">{educationObj.company}</h2>
          <p className="cvTextRole"> - {educationObj.role}</p>
          <p className="cvText">{educationObj.detail}</p>
          <p className="cvStart">{educationObj.startDate} -</p>
          <p className="cvEnd">{educationObj.endDate}</p>
        </div>
      );

      jsxArray = [...jsxArray, newJsx];
    });
    return jsxArray;
  }

  render() {
    const { cvData } = this.props;
    return (
      <div className="target">
        <div className="previewContainer">
          <div className="cvContent">
            <h1 className="cvHeading">
              {cvData.firstName} {cvData.lastName}
            </h1>
            <div className="cvContact">
              <div>Email: {cvData.email}</div>
              <div>Phone: {cvData.phone}</div>
            </div>
            <div className="cvEducation">
              <h2 className="cvSubheading">Education</h2>
              {this.previewEducations()}
            </div>
            <div className="cvExperience">
              <h2 className="cvSubheading">Experience</h2>
              {this.previewExperience()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
