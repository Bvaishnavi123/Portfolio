import styled from 'styled-components';

export const AboutDiv = styled.div`
    width: 80%;
    // margin: 200px auto auto auto;
    margin: auto;
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 250px;
    }
`;

export const Column = styled.div`
    width: 50%;

    @media (max-width: 870px) {
        width: 100%;
        text-align: center;
    }
`;

export const Img = styled.img`
    padding: 10px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    /* border: 1px solid black; */
    box-shadow: rgba(20, 20, 21, 0.3) 0px 0px 0px 3px;
    @media (max-width: 465px) {
        /* margin-left: -35px; */
        /* width: 80%; */
        width: 350px;
        height: 350px;
        /* justify-self: center; */
        /* justify-items: center; */
        /* justify-content: center/; */
        /* padding : 0px; */
    }
`;

export const AboutInfo = styled.div`
    color: ${(props) => props.theme.fontColorPrimary};
    line-height: 1.5;
`;

export const AboutInfoP = styled.div`
    font-size: 22px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.fontColorSecondary};
`;

export const HeaderUl = styled.ul`
    list-style-type: none;
    display: flex;
    margin-bottom: 20px;
    color: #fff;
    @media (max-width: 650px) {
        justify-content: center;
    }
`;
export const HeaderLi = styled.li`
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.theme.fontColorPrimary};
    color: ${(props) => props.theme.cardColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    transition: all 0.5s linear;
    cursor: pointer;
    &:first-child {
        margin-left: 0;
    }
    &:hover {
        background: ${(props) => props.theme.commonBorder};
        border: 2px solid transparent;
    }
`;
export const JelloHori = styled.div`
    /* -webkit-animation: jello-horizontal 0.9s both; */
    /* animation: jello-horizontal 0.9s both; */
    /* color: ${(props) => props.theme.socialIconColor}; */
`;
