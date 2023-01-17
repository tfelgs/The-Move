// React
import React, { Component } from "react";
// Components
import { Menu, Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
// Style Sheets
import styles from "./navbar.module.css";
import SearchBar from "../searchbar/searchbar";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <div className={styles.navbar}>
          <Menu secondary>
            <Menu.Item>
              <Button as={Link} to="/" onClick={this.handleItemClick}>
                Home
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button as={Link} to="/DealsPage" onClick={this.handleItemClick}>
                Current Deals
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button as={Link} to="/MapPage" onClick={this.handleItemClick}>
                Map
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                as={Link}
                to="/AffiliatesPage"
                onClick={this.handleItemClick}
              >
                Affiliates Page
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                as={Link}
                to="/ContactPage"
                onClick={this.handleItemClick}
              >
                Contact Page
              </Button>
            </Menu.Item>
          </Menu>
        </div>
        <div className={styles.searchbar}>
          <SearchBar />
        </div>
      </div>
    );
  }
}
