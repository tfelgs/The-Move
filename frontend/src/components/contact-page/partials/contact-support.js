import React from 'react'
import styles from '../contact-page.module.css'
import { Form, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const CustText = styled.h1`
    color: rgb(45, 2, 91);
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 8px;
    font-weight: bolder;
`

const NumbText = styled.h2`
    color:#766175;
    margin-top: 4px;
    margin-bottom: 0px;
    font-weight: bold;
`

const ContactSupport = () => {
    return (
        <Form className={styles.contactSupport}>
            <Segment secondary>
                <CustText>
                    24/7 Customer Support Line
                </CustText>
                <NumbText>
                    +1(109)876-5432
                </NumbText>
            </Segment>
        </Form>
    )
}

export default ContactSupport