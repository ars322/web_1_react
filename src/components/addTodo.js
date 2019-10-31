import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
    duration: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(
      this.state.title,
      ", Срок выполнения: " + this.state.duration
    );
    this.setState({ title: "", duration: "" });
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            placeholder="Добавить дело"
            style={{ flex: "2", color: "blue", fontSize: "24px" }}
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="date"
            name="duration"
            placeholder="Срок выполнения"
            style={{ flex: "1", color: "blue", fontSize: "24px" }}
            value={this.state.duration}
            onChange={this.onChange}
          />
        </form>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="submit"
            value="Добавить"
            class="btn btn-success"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
