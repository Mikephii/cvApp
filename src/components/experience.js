import React, { Component } from "react";

class Experience extends Component {
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
    this.createTextArea = this.createTextArea.bind(this);
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
    let ids = ["company", "role", "detail", "startDate", "endDate"];
    if (state) {
      return ids.map((id) => {
        return (
          <input
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

  createTextArea(state, type) {
    let ids = ["company", "role", "detail", "startDate", "endDate"];
    if (state) {
      return ids.map((id) => {
        return (
          <textarea
            className="textArea"
            id={id}
            onChange={this.handler}
            value={this.state.inputs[id]}
          ></textarea>
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
          <label className="label" htmlFor="company">
            Company:
          </label>
          {this.createInputs(this.state.edit, "text")[0]}
          <label className="label" htmlFor="role">
            Role:
          </label>
          {this.createInputs(this.state.edit, "text")[1]}
          <label className="label" htmlFor="detail">
            Responsibilities:
          </label>
          {this.createTextArea(this.state.edit, "text")[2]}

          <div className="datesDiv">
            <label className="label" htmlFor="startDate">
              Start Date:
            </label>
            {this.createInputs(this.state.edit, "date")[3]}
            <label className="label" htmlFor="endDate">
              End Date:
            </label>
            {this.createInputs(this.state.edit, "date")[4]}
          </div>
          {this.createButton()}
        </form>
      </div>
    );
  }
}

export default Experience;
