import styles from "./home-page.module.css";
import { Container, Button, Confirm } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Component } from "react";

import BlueOwlDemo from "./images/Blue-Owl-Demo.png";
import AJSDemo from "./images/AJS-Demo.png";
import Paddys from "./images/Paddy-Demo.png";
import WelchAve from "./images/Welch-Ave-Demo.png";

export default class Home extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <h1></h1>
        <Container fluid textAlign={"center"} className={styles.contentBox}>
          <Button
            color="purple"
            as={Link}
            to="/DealsPage"
            onClick={this.handleItemClick}
            className={styles.dealsButton}
          >
            Deals Near Me
          </Button>
        </Container>
        <Container>
          <div>
            <br></br>
            <h1 className={styles.headers1}>Featured Promotions</h1>
            <br></br>
            <a href="/AjsPage">
              <img
                className={styles.images}
                src={AJSDemo}
                alt="AJs Ultralounge Advertisement"
              />
            </a>
            <a href="/WelchAveStationPage">
              <img
                className={styles.images}
                src={WelchAve}
                alt="Welch Ave Station Advertisement"
              />
            </a>
          </div>
          <br></br>
          <br></br>
        </Container>
      </div>
    );
  }
}
