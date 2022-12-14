import { Component } from "react";
import "./employees-add-form.scss";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  validate = () => {
    if (this.state.name.length < 3) {
      document.querySelector('[name="name"]').style.border = `2px solid red`;
    }
    if (!this.state.salary) {
      document.querySelector('[name="salary"]').style.border = `2px solid red`;
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.validate();
    if (this.state.name.length < 3 || !this.state.salary) return;
    this.props.addItem(this.state.name, this.state.salary);
    this.setState({ name: "", salary: "" });
  };

  onValueChange = (e) => {
    e.target.style.border = "none";
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={(e) => this.onSubmit(e)}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            onChange={this.onValueChange}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            onChange={this.onValueChange}
            name="salary"
            value={salary}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
