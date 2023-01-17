import React from "react";
import styles from "./paddys-page.module.css";
import { Grid, Button, Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { Divider, Image, Segment, List, Icon } from "semantic-ui-react";
import BlueHeader from "./images/header2.png";
import Snap from "./images/snapchat.png";
import Insta from "./images/insta.png";
import Twitter from "./images/twt2.png";
import Deal from "./images/deal2.png";

const PaddysPubPage = () => (
  <div className="routeContent">
    <h1></h1>
  <Container textAlign="center">
  <img src={BlueHeader} className={styles.images2}/>
  <Header></Header>
  </Container>
  <Container textAlign="left">
  <Header style={{ color: "#333366" }}>&nbsp;&nbsp;&nbsp;&nbsp; <a href="/AffiliatesPage" style={{ color: "#333366" }}>Affiliated Bars </a>  &gt; Paddy's Irish Pub</Header>
  </Container>
  <Segment basic>
      <Grid columns={3} relaxed="very">
        <Grid.Column color="white" textAlign='left'>
          <div>
          <img src={Snap} size='mini' className={styles.images1} verticalAlign='top'/> <span>paddysirish</span>
            <Divider hidden/>
            <img src={Insta} size='mini' className={styles.images1} verticalAlign='middle' />{' '}
            <span>@paddys_irish</span>
            <Divider hidden/>
            <Image src={Twitter} size='mini' className={styles.images1} verticalAlign='bottom' />{' '}
           <span>@paddys_ames</span>
        </div>
      
        </Grid.Column>
        <Grid.Column color = "white" textAlign='left'>
          <Header style={{ color: "#333366" }} size='huge'>Phone Number:</Header>
          <p style={{ color: "#333366"}} size='large'>
            <Header size='medium' style={{ color: "#333366"}} >(515)292-1400</Header>
            
          </p>
        </Grid.Column>

        <Grid.Column color = "white" textAlign='left'>
          <Header style={{ color: "#333366" }} size='huge'>
            Hours: </Header>
            <p style={{ color: "#333366" }} size='large'>
            <List  style={{ color: "#333366" }} size='huge'>
            <List.Item>Monday: CLOSED</List.Item>
            <List.Item>Tuesday: 8:00PM - 2:00AM</List.Item>
            <List.Item>Wednesday: 8:00PM - 2:00AM</List.Item>
            <List.Item>Thursday: 8:00PM - 2:00AM</List.Item>
            <List.Item>Friday: 8:00PM - 2:00AM</List.Item>
            <List.Item>Saturday: 8:00PM - 2:00AM</List.Item>
            <List.Item>Sunday: CLOSED</List.Item>
            </List>
            </p>

        </Grid.Column>
      
      </Grid>

      <Divider hidden/>
    </Segment>

    <Segment basic>
      <Header style={{ color: "#333366" }} size='large'>
        Location: 124 Welch Ave, Ames, IA
      </Header>
      <Header textAlign='center'> 
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.998406842367!2d-93.65207344923571!3d42.02176657910903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee70a7af63e425%3A0x8f3e3aebf8c17d24!2sPaddy&#39;s%20Irish%20Pub!5e0!3m2!1sen!2sus!4v1669940232904!5m2!1sen!2sus"
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
      <img src={Deal} className={styles.images2} centered/>
      <Header></Header>
      </Container>
      </Segment>
   

  </div>
);

export default PaddysPubPage;