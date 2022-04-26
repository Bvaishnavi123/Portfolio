import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


import {
    ContactContainer,
    ContactForm,
    InputInput1,
    InputInput2,
    A,
    Column,
    P,
    LinksCont,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    FaPhone,
    FaGithub,
    FaLinkedin,
    FaLocationArrow,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';

const footerData = [
    {
        id: 0,
        title: 'Location',
        display: 'Latur, India',
        icon: (
            <FaLocationArrow style={{ color: 'grey' }} className='commonIconsFooter' />
        ),
    },
    {
        id: 1,
        title: 'Mobile',
        display: '+91 8668770993',
        link: 'tel:+91 8668770993',
        icon: (
            <FaPhone style={{ color: 'grey' }} className='commonIconsFooter' />
        ),
    },
    {
        id: 2,
        title: 'Email',
        display: 'bajajvaishnavi1999@gmail.com',
        link: 'mailto:bajajvaishnavi1999@gmail.com',
        icon: (
            <SiGmail style={{ color: 'grey' }} className='commonIconsFooter' />
        ),
    },
    {
        id: 3,
        title: 'Github',
        display: 'Github',
        link: 'https://github.com/Bvaishnavi123',
        icon: (
            <FaGithub style={{ color: 'grey' }} className='commonIconsFooter' />
        ),
    },
    {
        id: 4,
        title: 'LinkedIn',
        display: 'LinkedIn',
        link: 'https://www.linkedin.com/in/vaishnavi-bajaj/',
        icon: (
            <FaLinkedin
                style={{ color: 'grey' }}
                className='commonIconsFooter'
            />
        ),
    },
 
    
];

const Contact = () => {
    const [emailSent, setEmailSent] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();

        const { name, subject, email, message } = e.target;
        console.log("hi")
        emailjs
            .send(
                'service_chxzhbh',
                'template_2lo54t3',
                {
                    name: name.value,
                    email: email.value,
                    subject: subject.value,
                    message: message.value,
                },
                'BOwshvd0DJWAkgKIC'
                
            )
            .then(
                function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    setEmailSent(true);

                    if (!emailSent) {
                        setInterval(() => {
                            setEmailSent(false);
                        }, 5000);
                    }
                },
                function (err) {
                    console.log('FAILED...', err);
                }
            );

        e.target.reset();
    };
    return (
        <Container className='contact'>
            <Common>
                <H1>Contact</H1>
            </Common>
            <ContactContainer>
                <Column>
                    <ContactForm onSubmit={handleSend}>
                        <InputInput1
                            required
                            name='name'
                            type='text'
                            placeholder='Name'
                        />
                        <InputInput1
                            required
                            name='email'
                            type='email'
                            placeholder='Email'
                        />
                        <InputInput1
                            required
                            name='subject'
                            type='text'
                            placeholder='Subject'
                        />
                        <InputInput2
                            required
                            name='message'
                            placeholder='Message'
                        ></InputInput2>
                        <A
                            value='Send'
                            style={{ color: emailSent ? '#FFD479' : 'white' }}
                        >
                            {emailSent ? 'E-MAIL SENT' : 'SEND E-MAIL'}
                        </A>
                        <ToastContainer />
                    </ContactForm>
                </Column>
                <Column>
                    <LinksCont>
                        {footerData.map((item) => (
                            <div
                                key={uuidv4()}
                                title={item.title}
                                style={{ display: 'flex' }}
                            >
                                <div>
                                    {/* <a target="_blank" rel="noreferrer" href={item.link}  style={{textDecoration:"none"}}> */}
                                    {item.icon}
                                    {/* </a> */}
                                </div>
                                <div style={{ marginTop: '-5px' }}>
                                    <a
                                        target='_blank'
                                        rel='noreferrer'
                                        href={item.link}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <P>{item.display}</P>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </LinksCont>
                </Column>
            </ContactContainer>
        </Container>
    );
};

export default Contact;
