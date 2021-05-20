import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: this.props.edit,

      inputs: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    };
    this.handler = this.handler.bind(this);
    this.updateInputState = this.updateInputState.bind(this);
    this.createInputs = this.createInputs.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  handler(e) {
    this.updateInputState(e);
  }

  updateInputState(e) {
    this.setState(
      (prevState) => ({
        inputs: { ...prevState.inputs, [e.target.id]: e.target.value },
      }),
      () => {
        this.props.updateEducation(this.props.educationID, this.state.inputs);
      }
    );
  }
  componentDidMount() {
    if (typeof this.props.fieldData != "undefined") {
      this.setState({
        inputs: this.props.fieldData,
      });
    }
  }

  buttonHandler(e) {
    e.preventDefault();
    this.updateInputState(e);

    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));

    if (this.state.edit) {
      this.setState({
        edit: false,
      });
      this.props.addForm();
    } else {
      this.setState({
        edit: true,
      });
      this.props.deleteForm();
    }
  }

  createInputs(state, type) {
    let ids = ["university", "degree", "startDate", "endDate"];
    if (state) {
      return ids.map((id) => {
        return (
          <input
            required={true}
            type={type}
            className={type}
            id={id}
            onChange={this.handler}
            value={this.state.inputs[id]}
          ></input>
        );
      });
    } else {
      return ids.map((id) => {
        return <p className="savedText">{this.state.inputs[id]}</p>;
      });
    }
  }

  createButton() {
    if (this.state.edit) {
      return (
        <button className="formButton" onClick={this.buttonHandler}>
          Add
        </button>
      );
    } else {
      return (
        <button className="formButton" onClick={this.buttonHandler}>
          Edit
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <form className="form">
          <label className="label" htmlFor="university">
            University:
          </label>
          {this.createInputs(this.state.edit, "text")[0]}
          <label className="label" htmlFor="degree">
            Degree:
          </label>
          {this.createInputs(this.state.edit, "text")[1]}
          <div className="datesDiv">
            <label className="label" htmlFor="startDate">
              Start Date:
            </label>
            {this.createInputs(this.state.edit, "date")[2]}
            <label className="label" htmlFor="endDate">
              End Date:
            </label>
            {this.createInputs(this.state.edit, "date")[3]}
          </div>
          {this.createButton()}
        </form>
      </div>
    );
  }
}

export default Education;
