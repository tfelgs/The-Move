import React from "react";
import PropTypes from "prop-types";
import styles from "./affiliates-page.module.css";
import { Grid, Button, Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { Divider, Image, Segment } from "semantic-ui-react";
import PaddyPic from "./images/paddy2.png";
import BlueOwl from "./images/bo.png";
import Ajs from "./images/ajs2.png";
import Welch from "./images/welch.png";
import Coming from "./images/soon.png";
const AffiliatesPage = () => (
  <div className="routeContent">
    <h1></h1>
    <Container textAlign="left">
      <Header as="h1" size="large" style={{ color: "#333366" }}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Affiliated Bars
      </Header>
    </Container>
    <Segment basic>
      <Grid columns={2} relaxed="very">
        <Grid.Column color="white" textAlign='center'>
          <p>
          <a href="/BlueOwlBarPage" textAlign='centered'>
              <img src={BlueOwl} className={styles.images} size='large' centered/>
          </a>
          </p>
          
        </Grid.Column>

        <Grid.Column color="white" textAlign="center">
          <p>
          <a href="/AjsPage">
              <img src={Ajs} className={styles.images} size='large' centered />
          </a>
          </p>
        </Grid.Column>
      </Grid>

      <Divider hidden/>
    </Segment>

    <Segment basic>
      <Grid columns={2} relaxed="very">
        <Grid.Column color="white" textAlign="center">
          <p>
          <a href="/PaddysPage">
              <img src={PaddyPic} className={styles.images} size='large' centered />
          </a>
          </p>
        </Grid.Column>

        

        <Grid.Column color="white" textAlign="center" >
          <p>
          <a href="/WelchAveStationPage">
              <img src={Welch} className={styles.images} size='large' centered/>
          </a>
          </p>
        </Grid.Column>
      </Grid>

      <Divider hidden/>
    </Segment>

    <Segment basic>
      <Grid columns={1} relaxed="very">
        <Grid.Column textAlign="center">
          <p>
            <img className={styles.images2} src={Coming} centered/>
          </p>
        </Grid.Column>
      </Grid>
    </Segment>
  </div>
);

AffiliatesPage.propTypes = {};

AffiliatesPage.defaultProps = {};

export default AffiliatesPage;
