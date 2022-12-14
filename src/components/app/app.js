import { Component } from "react";
import AppHeaderInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("data")) || [
        {
          name: "Петр Пяточкин",
          salary: 5000,
          increase: false,
          promo: false,
          id: 1,
        },
        {
          name: "Анжелика Добродушина",
          salary: 1100,
          increase: true,
          promo: false,
          id: 3,
        },
        {
          name: "Дмитрий Зубик",
          salary: 950,
          increase: false,
          promo: false,
          id: 2,
        },
        {
          name: "Сергей Простоквашин",
          salary: 700,
          increase: false,
          promo: true,
          id: 4,
        },
        {
          name: "Ольга Чирик",
          salary: 900,
          increase: false,
          promo: true,
          id: 5,
        },
      ],
      term: "",
      filter: "all",
    };
  }

  toggleProp = (id, prop) => {
    const dataArr = this.state.data.map((item) => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] };
      }
      return item;
    });
    localStorage.setItem("data", JSON.stringify(dataArr));
    this.setState(() => ({
      data: dataArr,
    }));
  };

  changeSalary = (id, e) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, salary: e.target.value.replace(/\D/g, "") };
        }
        return item;
      }),
    }));
    localStorage.setItem("data", JSON.stringify(this.state.data));
  };

  randomId = () => {
    const id = Math.floor(Math.random() * (10000 - 6 + 1)) + 6;

    if (this.state.data.every((item) => item.id !== id)) {
      return id;
    } else {
      this.randomId();
    }
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      promo: false,
      id: this.randomId(),
    };

    this.setState(({ data }) => {
      const arr = [...data, newItem];
      localStorage.setItem("data", JSON.stringify(arr));
      return {
        data: arr,
      };
    });
  };

  deleteItem = (id) => {
    const dataArr = this.state.data.filter((item) => item.id !== id);
    localStorage.setItem("data", JSON.stringify(dataArr));
    this.setState(() => {
      return {
        data: dataArr,
      };
    });
  };

  searchEmployees = (dataArr, term) => {
    if (term.length === 0) return dataArr;
    let arr = dataArr.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
    if (arr.length === 0) return dataArr;
    return arr;
  };

  searchUpdate = (term) => {
    this.setState({ term });
  };

  filterEmployees = (dataArr, filter) => {
    switch (filter) {
      case "promo":
        return dataArr.filter((item) => item.promo);
      case ">1000":
        return dataArr.filter((item) => item.salary > 1000);
      default:
        return dataArr;
    }
  };

  filterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterEmployees(
      this.searchEmployees(data, term),
      filter
    );
    const totalEmployees = this.state.data.length;
    const amountOfIncrease = this.state.data.filter(
      (item) => item.increase
    ).length;

    return (
      <div className="app">
        <AppHeaderInfo
          totalEmployees={totalEmployees}
          amountOfIncrease={amountOfIncrease}
        />
        <div className="search-panel">
          <SearchPanel searchUpdate={this.searchUpdate} />
          <AppFilter filter={filter} filterSelect={this.filterSelect} />
        </div>
        <EmployeesList
          data={visibleData}
          deleteItem={this.deleteItem}
          toggleProp={this.toggleProp}
          changeSalary={this.changeSalary}
          setLocalStorage={this.setLocalStorage}
        />
        <EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
