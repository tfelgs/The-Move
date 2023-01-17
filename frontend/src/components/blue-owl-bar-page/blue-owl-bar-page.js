import React from "react";
import styles from "./blue-owl-bar-page.module.css";
import { Grid, Button, Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { Divider, Image, Segment, List, Icon } from "semantic-ui-react";
import BlueHeader from "./images/header2.png";
import Snap from "./images/snapchat.png";
import Insta from "./images/insta.png";
import Twitter from "./images/twt2.png";
import Deal from "./images/deal2.png";

const BlueOwlBarPage = () => (
  <div className="routeContent">
  <h1></h1>
  <Container textAlign="center">
  <img src={BlueHeader} className={styles.images} size='very large' centered/>
  <Header></Header>
  </Container>
  <Container textAlign="left">
  <Header style={{ color: "#333366" }}>&nbsp;&nbsp;&nbsp;&nbsp; <a href="/AffiliatesPage" style={{ color: "#333366" }}>Affiliated Bars </a>  &gt; Blue Owl Bar</Header>
  </Container>
  <Segment basic>
      <Grid columns={3} relaxed="very">
        <Grid.Column color="white" textAlign='left'>
          <div>
            <img src={Snap} size='mini' className={styles.images} verticalAlign='top'/> <span>theblueowlbar</span>
            <Divider hidden/>
            <img src={Insta} size='mini' className={styles.images} verticalAlign='middle' />{' '}
            <span>@blueowl_bar</span>
            <Divider hidden/>
            <Image src={Twitter} size='mini' className={styles.images} verticalAlign='bottom' />{' '}
           <span>@blueowlbar</span>
        </div>
      
        </Grid.Column>
        <Grid.Column color = "white" textAlign='left'>
          <Header style={{ color: "#333366" }} size='huge'>Phone Number:</Header>
          <p style={{ color: "#333366"}} size='large'>
            <Header size='medium' style={{ color: "#333366"}} >(515)292-4121</Header>
            
          </p>
        </Grid.Column>

        <Grid.Column color = "white" textAlign='left'>
          <Header style={{ color: "#333366" }} size='huge'>
            Hours: </Header>
            <p style={{ color: "#333366" }} size='large'>
            <List  style={{ color: "#333366" }} size='huge'>
            <List.Item>Monday: 5:00PM - 2:00AM</List.Item>
            <List.Item>Tuesday: 5:00PM - 2:00AM</List.Item>
            <List.Item>Wednesday: 5:00PM - 2:00AM</List.Item>
            <List.Item>Thursday: 5:00PM - 2:00AM</List.Item>
            <List.Item>Friday: 4:00PM - 2:00AM</List.Item>
            <List.Item>Saturday: 12:00PM - 2:00AM</List.Item>
            <List.Item>Sunday: 5:00PM - 12:00AM</List.Item>
            </List>
            </p>
         

        </Grid.Column>

      
      </Grid>

      <Divider hidden/>
    </Segment>

    <Segment basic>
      <Header style={{ color: "#333366" }} size='large'>
        Location: 223 Welch Ave, Ames, IA
      </Header>
      <Header textAlign='center'> 
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.0602733082815!2d-93.65265318455444!3d42.02043937921112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee70a7885c047b%3A0x7fb16370af4d6462!2sThe%20Blue%20Owl%20Bar!5e0!3m2!1sen!2sus!4v1669218591604!5m2!1sen!2sus" 
          width="90%" 
          height="200px" 
          style={{ border: 0 }}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </Header>

    </Segment>

    <Segment basic>
      <Header style={{ color: "#333366" }} size='large'>Current Promotion</Header>
      <Container textAlign="center">
      <img src={Deal} className={styles.images} size='very large' centered/>
      <Header></Header>
      </Container>
      </Segment>
   

  </div>
);

export default BlueOwlBarPage;