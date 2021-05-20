import React, { Component } from "react";
import "./formStyles.css";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
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
    this.save = this.save.bind(this);
  }

  handler(e) {
    this.updateInputState(e);
    this.props.updateCV(e.target.id, e.target.value);
  }

  updateInputState(e) {
    this.setState((prevState) => ({
      inputs: { ...prevState.inputs, [e.target.id]: e.target.value },
    }));
  }

  save(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  }

  createInputs(state, type) {
    let ids = ["firstName", "lastName", "email", "phone"];
    if (state) {
      return ids.map((id) => {
        return (
          <input
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
        <button className="formButton" onClick={this.save}>
          Add
        </button>
      );
    } else {
      return (
        <button className="formButton" onClick={this.save}>
          Edit
        </button>
      );
    }
  }

  render() {
    return (
      <div className="personalBox">
        <h2 className="formHeader">Personal Details</h2>
        <form className="form">
          <label className="label" htmlFor="firstName">
            First Name:
          </label>
          {this.createInputs(this.state.edit, "text")[0]}
          <label className="label" htmlFor="lastName">
            Last Name:
          </label>
          {this.createInputs(this.state.edit, "text")[1]}
          <label className="label" htmlFor="email">
            Email:
          </label>
          {this.createInputs(this.state.edit, "text")[2]}
          <label className="label" htmlFor="phone">
            Phone:
          </label>
          {this.createInputs(this.state.edit, "text")[3]}
          {this.createButton()}
        </form>
      </div>
    );
  }
}

export default Personal;
