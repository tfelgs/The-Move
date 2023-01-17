import React from 'react'
import PropTypes from 'prop-types'
import styles from './contact-page.module.css'
import { Container, Grid, Header } from 'semantic-ui-react'
import ContactForm from './partials/contact-form'
import ContactText from './partials/contact-text'
import ContactSupport from './partials/contact-support'



const ContactPage = () => (
  <>
    <Container className={styles.pagewrap}>
      <Container className={styles.images}>
        <Container className={styles.contactUs}>Contact Us</Container>
      </Container>
      <Grid>
        <Grid.Row columns='equal'>
          <Grid.Column>
            <ContactForm />
          </Grid.Column>
          <Grid.Column>
            <ContactText />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <ContactSupport />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className={styles.topFoot} columns='equal'>
          <Grid.Column>
            Call Us
          </Grid.Column>
          <Grid.Column>
            Location
          </Grid.Column>
          <Grid.Column>
            Business Hours   
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className={styles.bottomFoot} columns='equal'>
          <Grid.Column>
            +1(234)567-8910
          </Grid.Column>
          <Grid.Column>
            123 Lincoln Way, <br></br><br></br>Ames, IA 50012
          </Grid.Column>
          <Grid.Column>
            Mon-Fri <br></br><br></br> 9am - 6pm  
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </>
);

ContactPage.propTypes = {};

ContactPage.defaultProps = {};

export default ContactPage;
