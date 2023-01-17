import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'


export function sendEmail(data) {

    return new Promise(resolve => {
        emailjs.send('service_yzzo5rn', 'template_dtybacb', data, 'Ny5sWN-jqjobXPMq6')
        .then((result) => {
            resolve(result.text)
        }, (error) => {
            resolve(error.text)
        }) 
    })
}