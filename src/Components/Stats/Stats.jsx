import React from 'react';
import {
    StatsContCont,
    StatsCont,
    StatsContDiv,
    StatsContH1,
    StatsContH3,
    LastStat,
} from './Styles';
import { Container } from '../../SharedStyles/SharedStyles';
const Stats = () => {
    return (
        <Container>
            <StatsContCont>
                <StatsCont>
                    <StatsContDiv className='dom-attribute-demo'>
                        <StatsContH1>1200+</StatsContH1>
                        <StatsContH3>Hours of coding</StatsContH3>
                    </StatsContDiv>
                    <StatsContDiv>
                        <StatsContH1>500+</StatsContH1>
                        <StatsContH3>Git Commits</StatsContH3>
                    </StatsContDiv>
                    <StatsContDiv>
                        <StatsContH1>7</StatsContH1>
                        <StatsContH3>Projects</StatsContH3>
                    </StatsContDiv>
                    <LastStat>
                        <StatsContH1>100+</StatsContH1>
                        <StatsContH3>Hours of Soft Skill</StatsContH3>
                    </LastStat>
                </StatsCont>
            </StatsContCont>
            <img
                src='https://ghchart.rshah.org/021F34/Bvaishnavi123'
                alt='fdsdf'
                style={{ width: '80%', display: 'block', margin: 'auto' }}
            />
        </Container>
    );
};
export default Stats;
