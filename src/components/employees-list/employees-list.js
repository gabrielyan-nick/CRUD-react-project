import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

class EmployeesList extends Component {
  render() {
    const { data, deleteItem, toggleProp, changeSalary, setLocalStorage } = this.props;

    const employeesArr = data.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <EmployeesListItem
          key={id}
          {...itemProps}
          deleteItem={() => deleteItem(id)}
          toggleProp={(e) => toggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
          changeSalary={(e) => changeSalary(id, e)}
          setLocalStorage={setLocalStorage}
        />
      );
    });

    return <ul className="app-list list-group">{employeesArr}</ul>;
  }
}

export default EmployeesList;
