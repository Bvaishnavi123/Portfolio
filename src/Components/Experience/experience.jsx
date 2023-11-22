import React from "react";
import {
  BoxDiv,
  ExperienceDiv,
  ExperienceInfo,
  ExperienceInfoP,
  Li,
  P,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  Span,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { AboutInfo, AboutInfoP } from "../About/Styles.jsx";

export const Experience = () => {
  return (
    <>
      <Container className="experience">
        <ExperienceDiv>
          <Common>
            <H1>Work Experience</H1>
          </Common>

          <BoxDiv>
            <ServiceBoxHeader>
              Syntizen - An M2P Company
              <P>Aug 2022 - Nov 2023 | Hyderabad</P>
            </ServiceBoxHeader>
          </BoxDiv>
          <ExperienceInfo>
            <Li>
              Developed and maintained front-end components and user interfaces
              for video KYC and digital KYC applications.
            </Li>
            <Li>
              Integrated facial verification technology, Digilocker, and other
              services into the KYC applications.
            </Li>
            <Li>
              Utilized streaming technologies such as AWS Chime, OpenVidu.
            </Li>
            <Li>
              Worked on a comprehensive dashboard that provided detailed reports
              on customer activities using various charts and graphs.
            </Li>
            <Li>
              Implemented Next.js and React.js frameworks to enhance the
              performance and scalability of web applications
            </Li>
            <Li>
              Ensured the responsiveness and scalability of web applications
              across different devices and platforms
            </Li>
            <Li>
              Conducted thorough testing and debugging to identify and fix
              software defects and improve overall performance
            </Li>
            <Li>
              Good exposure to <Span>HTML5, </Span>
              <Span>CSS3, </Span>
              <Span>JavaScript, </Span>
              <Span>React,</Span>
              <Span>Redux-Saga, </Span>
              <Span>Bootstrap, </Span>
              <Span>Tailwind, </Span>
              <Span>Next Js.</Span>
            </Li>
          </ExperienceInfo>
        </ExperienceDiv>
      </Container>
    </>
  );
};
