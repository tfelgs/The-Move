import React from 'react'
import styles from '../contact-page.module.css'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

const MainText = styled.h1`
    text-align: center;
    color: rgb(45, 2, 91);
    font-size: 40px;
    font-weight: bolder;
`

const SecondText = styled.h2`
    color: rgb(45, 2, 91);
    font-weight: bold;
`

const TertiaryText = styled.p`

`

const ContactText = () => {
    return (
        <Container className={styles.contactText}>
            <MainText>
                How Can We Help Your Bar?
            </MainText>
            <SecondText>
                Become "The Move"
            </SecondText>
            <TertiaryText>
                We make it easier than ever for bar hoppers to find the best locations so your bar becomes "The Move".
            </TertiaryText>
            <SecondText>
                Clean, Easy Advertising
            </SecondText>
            <TertiaryText>
                Provide us your specials, images, or other information, and we'll design an 
                attractive promotion to inform customers that your bar is where they want to be.
            </TertiaryText>
            <SecondText>
                Accessible to Everyone Anywhere
            </SecondText>
            <TertiaryText>
                Users all over town and beyond can see your bar and promotions in one navigable place with ease.
                Save them the trouble of scouring social media sites!
            </TertiaryText>
            <SecondText>
                24/7 Customer Support
            </SecondText>
            <TertiaryText>
                We'll always be available to assist and respond to your changing needs, no matter the problem or the time.
            </TertiaryText>
        </Container>
    )
}

export default ContactText;