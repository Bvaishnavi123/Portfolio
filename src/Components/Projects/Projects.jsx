import React from 'react';
import { FaGithub, FaLink, FaNodeJs } from 'react-icons/fa';
import {
    ProjectDiv,
    Row,
    ServiceBox,
    ServiceBoxHeader,
    ServiceBoxP,
    A,
    BoxDiv,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { AiFillGithub } from 'react-icons/ai';
import { FaHtml5, FaJs, FaCss3 } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
// import { SiExpress, SiMaterialui } from 'react-icons/si/SiExpress';

import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
    const projects = [
   
        {
            id: 1,
            project_name: 'Forestessential India',
            image: 'https://i.ibb.co/jwgRYJx/american.jpg',
            project_desc:
                'An e-commerce website of American lifestyle, clothing and accessories.',
            deploy_link: 'https://rubyroy21.github.io/American-Eagle/',
            repo_link: 'https://github.com/rubyroy21/American-Eagle.git',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                
            ],
        },
        {
            id: 2,
            project_name: 'J.crew',
            image: 'https://i.ibb.co/6BD3NRk/jcrew.jpg',
            project_desc:
                'An e-commerce website with a catalog of modern lifestyles clothing for men, women and kids.',
            deploy_link: 'https://jcrew-clone.netlify.app',
            repo_link: 'https://github.com/rubyroy21/J.Crew-Clone.git',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
            ],
        },
        {
            id: 3,
            project_name: 'Koovs',
            image: 'https://i.ibb.co/xHqqVCZ/koovs.jpg',
            project_desc:
                "KOOVS is the one-stop online fashion destination for all your fashion needs.",
            deploy_link: 'https://koovsclone.netlify.app',
            repo_link: 'https://github.com/chandan8809/koovs-2.0.git',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                <SiMongodb />,
                <SiExpress />,
                <AiFillGithub />,
                <FaNodeJs />,
            ],
        },
        {
            id: 4,
            project_name: 'Mini Weather App',
            image: 'https://i.ibb.co/3rphzkm/weather.jpg',
            project_desc:
                'A mini weather app that can show weather of many cities.',
            deploy_link: 'https://mini-weather-application.netlify.app/',
            repo_link: 'https://github.com/rubyroy21/weather-application.git',
            tech_stack: [
                <FaJs />,
                <FaHtml5 />,
                <FaCss3 />,
            ]
        }
    ];

    return (
        <Container className='projects'>
            <ProjectDiv>
                <Common>
                    <H1>Projects</H1>
                </Common>
                <Row>
                    {projects.map((item) => (
                        <BoxDiv key={uuidv4()}>
                            <ServiceBox>
                                <img
                                    src={item.image}
                                    alt='icon'
                                    style={{ width: '100%' }}
                                />
                                <div style={{ margin: '25px' }}>
                                    <ServiceBoxHeader
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.project_name}
                                    </ServiceBoxHeader>
                                    <ServiceBoxP>
                                        {item.project_desc}
                                    </ServiceBoxP>
                                    {/* <a href="">Read more</a> */}
                                    <div
                                        style={{
                                            margin: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.tech_stack.map((item) => (
                                            <div
                                                key={uuidv4()}
                                                className='iconsTechStack'
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <A
                                        href={item.repo_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaGithub /> Code
                                    </A>
                                    <A
                                        href={item.deploy_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaLink /> Demo
                                    </A>
                                </div>
                            </ServiceBox>
                        </BoxDiv>
                    ))}
                </Row>
            </ProjectDiv>
        </Container>
    );
};

export default Projects;
