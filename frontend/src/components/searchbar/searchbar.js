// React
import React, { Component } from "react";
// Components
import _ from "lodash";
import { Menu, Button, Search } from "semantic-ui-react";
import { Link } from "react-router-dom";

// Style Sheets
import styles from "./searchbar.module.css";
import bars from "./bars.json";

const initialState = {
  isLoading: false,
  results: [],
  value: "",
  result: [],
};

export default class SearchBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleResultSelect = (e, { name }) =>
    this.setState({ activeItem: bars.name });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(bars, isMatch),
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results, result } = this.state;

    return (
      <Search
        placeholder="Search for a bar..."
        fluid
        loading={isLoading}
        onResultSelect={this.handleItemClick}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        as={Link}
        to="/"
        value={value}
      />
    );
  }
}
