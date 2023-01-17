// React
import React, { Component } from "react";
// Components
import { Menu, Grid, Divider, Segment, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
// Style Sheets
import styles from "./footer.module.css";

export default class Footer extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div className={styles.footer}>
        <br />
        <Menu secondary inverted widths={10}>
          <Menu.Item
            name="Home"
            as={Link}
            to="/"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Current Deals"
            as={Link}
            to="/DealsPage"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Map"
            as={Link}
            to="/MapPage"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Affiliated Bars"
            as={Link}
            to="/AffiliatesPage"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Contact Us"
            as={Link}
            to="/ContactPage"
            onClick={this.handleItemClick}
          />
        </Menu>
        <Divider inverted />
        <br />

        <Container basic className={styles.copyright}>
          © 2022 TheMove.com is a The Move company. All rights reserved.
          TheMove.com and the TheMove.com logo are trademarks or registered
          trademarks of TheMove.com, LP in the United States and/or other
          countries. All other trademarks are the property of their respective
          owners.
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
      </div>
    );
  }
}
