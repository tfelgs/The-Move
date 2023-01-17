import React from "react";
import styles from "./ajs-page.module.css";
import { Grid, Button, Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { Divider, Image, Segment, List, Icon } from "semantic-ui-react";
import BlueHeader from "./images/header2.png";
import Web from "./images/website.png";
import Insta from "./images/insta.png";
import Twitter from "./images/twt2.png";
import Deal from "./images/deal2.png";

const AJsPage = () => (
  <div className="routeContent">
    <h1></h1>
  <Container textAlign="center">
  <img src={BlueHeader} className={styles.images2} size='very large' centered/>
  <Header></Header>
  </Container>
  <Container textAlign="left">
  <Header style={{ color: "#333366" }}>&nbsp;&nbsp;&nbsp;&nbsp; <a href="/AffiliatesPage" style={{ color: "#333366" }}>Affiliated Bars </a>  &gt; AJ's Ultralounge</Header>
  </Container>
  <Segment basic>
      <Grid columns={3} relaxed="very">
        <Grid.Column color="white" textAlign='left'>
          <div>
            <img src={Insta} size='mini' className={styles.images1} verticalAlign='middle' />{' '}
            <span>@ajs_ultralounge</span>
            <Divider hidden/>
            <Image src={Twitter} size='mini' className={styles.images1} verticalAlign='bottom' />{' '}
           <span>@ajsbarnightclub</span>
           <Divider hidden/>
            <Image src={Web} size='mini' className={styles.images1} verticalAlign='bottom' />{' '}
           <span>ajsultralounge.com</span>
        </div>
      
        </Grid.Column>
        <Grid.Column color = "white" textAlign='left'>
          <Header style={{ color: "#333366" }} size='huge'>Phone Number:</Header>
          <p style={{ color: "#333366"}} size='large'>
            <Header size='medium' style={{ color: "#333366"}} >(515)290-4657</Header>
            
          </p>
        </Grid.Column>

        <Grid.Column color = "white" textAlign='left'>
          <Header style={{ color: "#333366" }} size='huge'>
            Hours: </Header>
            <p style={{ color: "#333366" }} size='large'>
            <List  style={{ color: "#333366" }} size='huge'>
            <List.Item>Monday: CLOSED</List.Item>
            <List.Item>Tuesday: CLOSED</List.Item>
            <List.Item>Wednesday: 8:00PM - 1:45AM</List.Item>
            <List.Item>Thursday: 8:00PM - 1:45AM</List.Item>
            <List.Item>Friday: 5:00PM - 1:45AM</List.Item>
            <List.Item>Saturday: 8:00PM - 1:45AM</List.Item>
            <List.Item>Sunday: CLOSED</List.Item>
            </List>
            </p>
         

        </Grid.Column>
      
      </Grid>

      <Divider hidden/>
    </Segment>

    <Segment basic>
      <Header style={{ color: "#333366" }} size='large'>
        Location: 2401 Chamberlain Street, Ames, IA
      </Header>
      <Header textAlign='center'> 
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.008373077857!2d-93.65086398455439!3d42.02155277921109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee70a700000001%3A0xadfd207b676eea5d!2sAJ&#39;s%20Ultra%20Lounge%20%E2%80%94%20Ames!5e0!3m2!1sen!2sus!4v1669947356825!5m2!1sen!2sus"
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
      <img src={Deal} className={styles.images2} size='very large' centered/>
      <Header></Header>
      </Container>
      </Segment>

  </div>
);

export default AJsPage;