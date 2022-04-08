import React from 'react';
import { FaGithub, FaLinkedin ,FaMedium} from 'react-icons/fa';
import {
    AboutDiv,
    Column,
    Img,
    AboutInfo,
    AboutInfoP,
    HeaderUl,
    HeaderLi,
    JelloHori,
} from './Styles';

import { Container, H1 } from '../../SharedStyles/SharedStyles';
const socialMediaLinks = [
    {
        id: 0,
        link: 'https://www.linkedin.com/in/vaishnavi-bajaj',
        icon: <FaLinkedin />,
    },
    {
        id: 1,
        link: 'https://github.com/Bvaishnavi23',
        icon: <FaGithub />,
    },
    {
        id: 2,
        link: 'https://medium.com/@vpbajaj1999',
        icon: <FaMedium />,
    },
    /* {
        id: 3,
        link: 'https://leetcode.com/aadityaneve',
        icon: <SiLeetcode />,
    }, */
];
const About = () => {
    return (
        <Container className='about'>
            <AboutDiv>
                <Column>
                    <Img src='https://avatars.githubusercontent.com/u/97448974?v=4' alt='my image' />
                </Column>
                <Column>
                    <H1>About Me</H1>
                    <AboutInfo>
                        <AboutInfoP>
                            I am Observant and detail-oriented aspiring Full-Stack
                            Developer. Self-motivated and curious, with a
                            keen interest in building user-centric products.
                            Looking forward to honing my skills in a
                            challenging work environment.
                        </AboutInfoP>
                        <AboutInfoP>
                            You can take a look at my work here -
                        </AboutInfoP>
                    </AboutInfo>
                    <HeaderUl>

                        {socialMediaLinks.map((item) => (
                            <JelloHori key={item.id}>
                                <a
                                    href={item.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <HeaderLi>{item.icon}</HeaderLi>
                                </a>
                            </JelloHori>
                        ))}
                    </HeaderUl>
                </Column>
            </AboutDiv>
        </Container>
    );
};

export default About;
