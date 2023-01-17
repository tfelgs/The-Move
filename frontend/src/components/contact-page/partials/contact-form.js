import React, { useEffect, useState } from 'react'
import styles from '../contact-page.module.css'
import { Button, Form, Input, Message, Segment, TextArea } from 'semantic-ui-react'
import _ from 'lodash'
import { sendEmail } from './support'

const defaultForm = {
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    message: ''
}

const ContactForm = () => {
    const [form, setForm] = useState(defaultForm)
    const [errors, setErrors] = useState({})
    const [formSuccess, setFormSuccess] = useState(false)
    const [formError, setFormError] = useState(false)
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        return function cleanup() {
            setForm(defaultForm)
            setErrors({})
            setSubmit(false)
        }
    }, [submit])

    const handleChange = (name, value) => {
        let tempErrors = {...errors}
        delete tempErrors[name]
        delete tempErrors[form]

        setFormSuccess(false)
        setFormError(false)
        setForm({...form, [name]: value})
        setErrors({...tempErrors})
    }

    const handleValidation = () => {
        let tempErrors
        Object.entries(form).forEach(([key, value]) => {
            switch(key) {
                case 'firstName':
                    if (!value) {
                        tempErrors = { ...tempErrors, [key]: 'Please enter your first name' }
                    }
                    break
                case 'lastName':
                    if (!value) {
                        tempErrors = { ...tempErrors, [key]: 'Please enter your last name' }
                    }
                    break
                case 'email':
                    if (!value) {
                        tempErrors = { ...tempErrors, [key]: 'Please enter a valid email' }
                    }
                    break
                case 'message':
                    if (!value) {
                        tempErrors = { ...tempErrors, [key]: 'Message must not be blank' }
                    }
                    break
                case 'companyName':
                    //TODO: If validation for company name wanted
                default:
                    break
            }
        })
        setErrors({...tempErrors})
        return _.isEmpty(tempErrors)
    }

    const handleSubmit = async () => {
        const isValid = handleValidation()
        if (isValid) {
            const response = await sendEmail(form)
            if (response == 'OK') {
                setSubmit(true)
                setFormSuccess(isValid)
            } else {
                console.log(response)
                setFormError(true)
            }
        }
    }

    return (
        <Form className={styles.contactForm} onSubmit={handleSubmit} success={formSuccess} error={formError}>
            <Segment secondary>
                <Form.Group widths='equal'>
                    <Form.Field 
                        id='form-input-control-firstname' 
                        control={Input}
                        label='First Name'
                        placeholder='First Name'
                        value={form.firstName}
                        onChange={e => handleChange('firstName', e.target.value)}
                        error={errors.firstName}
                    />
                    <Form.Field 
                        id='form-input-control-lastname' 
                        control={Input}
                        label='Last Name'
                        placeholder='Last Name'
                        value={form.lastName}
                        onChange={e => handleChange('lastName', e.target.value)}
                        error={errors.lastName}
                    />
                </Form.Group>
                <Form.Field 
                    id='form-input-control-email' 
                    control={Input}
                    label='E-Mail Address'
                    placeholder='E-Mail Address'
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    error={errors.email}
                />
                <Form.Field
                    id='form-input-control-companyname'  
                    control={Input}
                    label='Company Name (Optional)'
                    placeholder='Company Name'
                    value={form.companyName}
                    onChange={e => handleChange('companyName', e.target.value)}
                    error={errors.companyName}            
                />
                <Form.Field
                    id='form-input-control-message' 
                    control={TextArea}
                    rows={10}
                    label='Message'
                    placeholder='Message'
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                    error={errors.message}
                />
                {formSuccess &&
                    <Message 
                        success={formSuccess}
                        header='Form Submitted!'
                        content='Your form has been submitted, we will respond to you soon.'
                    />
                }
                {formError &&
                    <Message 
                        error={formError}
                        header='Form unable to submit!'
                        content='Something went wrong, your form was not submitted. Please try again later.'
                    />
                }
                <Button>Submit</Button>
            </Segment>
        </Form>
    )
}

export default ContactForm;