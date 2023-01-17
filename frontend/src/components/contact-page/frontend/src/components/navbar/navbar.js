// React
import React, { Component } from "react";
// Components
import { Menu, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
// Style Sheets
import styles from "./navbar.module.css";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Grid stackable columns={3} className={styles.grid}>
        <Grid.Row className="row1" textAlign="centered">
          <Grid.Column className={styles.navbar}>
            <div>
              <Menu secondary>
                <Menu.Item
                  name="Home"
                  as={Link}
                  to="/"
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Current Deals"
                  as={Link}
                  to="/CurrentDeals"
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Map"
                  as={Link}
                  to="/Map"
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Affiliated Bars"
                  as={Link}
                  to="/AffiliatedBars"
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Contact Us"
                  as={Link}
                  to="/ContactUs"
                  onClick={this.handleItemClick}
                />
              </Menu>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
