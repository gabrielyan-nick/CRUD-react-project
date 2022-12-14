import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      term: e.target.value,
    });
    this.props.searchUpdate(e.target.value);
  };

  render() {
    return (
      <input
        onChange={this.onValueChange}
        value={this.state.term}
        className="form-control search-input"
        type="text"
        placeholder="Найти сотрудника"
      />
    );
  }
}

export default SearchPanel;
