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
            project_name: 'Meanbuy',
            image: 'https://miro.medium.com/max/1400/0*IwFXx0-8jrzqQ3k5.png',
            project_desc:
                'Meanbuy is the future of online shopping they have products ranging from womens accessories to consumer electronics.',
            deploy_link: 'https://bvaishnavi123.github.io/mean.github.io/',
            repo_link: ' https://github.com/Bvaishnavi123/meanbuy.github.io',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                
                
            ],
        },
        {
            id: 2,
            project_name: 'SkinStore',
            image: 'https://miro.medium.com/max/700/0*aVJ2OQHcDNuGhr8i.png',
            project_desc:
                'SkinStore.com is among the leading online beauty retailers worldwide. Millions of women and men have discovered the value, selection, and expertise Skinstore offers. With more than 200 premium brands typically found only in luxury spas.',
            deploy_link: 'https://guileless-custard-2b667a.netlify.app/',
            repo_link: 'https://github.com/shoaib-ahmed16/ProjectSkinStore.git , https://github.com/shoaib-ahmed16/SkinStore-front_end',
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
            id: 3,
            project_name: 'Mini YouTube',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIioeQvJa-B4kJDQPEdqhsghPnIfzANwlHA&usqp=CAU',
            project_desc:
                "A simple YouTube clone completed in two days , where user can find all the videos similar as YouTube app . where user can search for the video & download the videos .",
            deploy_link: 'https://hungry-benz-acd4a5.netlify.app',
            repo_link: 'https://github.com/Bvaishnavi123/YouTubeClone',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
               
            ],
        },
        {
            id: 4,
            project_name: 'Mini Food App',
            image: 'https://blossomthemes-wbtneb0y4p.netdna-ssl.com/wp-content/uploads/2020/08/Tasty-Food.jpg',
            project_desc:
                'A mini food  app that can show receipe of various food.',
            deploy_link: 'https://sharp-visvesvaraya-f7818e.netlify.app',
            repo_link: 'https://github.com/Bvaishnavi123/Mini_Food_App',
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
