import styled from 'styled-components';

export const A = styled.a`
    outline: none;
    border: none;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    background-color: ${(props) => props.theme.fontColorPrimary};
    color: ${(props) => props.theme.cardColor};
    border-radius: 5px;
    padding: 6px;
    margin: 5px;
    &:hover {
        color: #fff;
        background-color: #0556f3;
        border: 1px solid rgb(211, 220, 230);
    }
`;

export const BoxDiv = styled.div`
    text-align: center;
    
    width: 100%;
    
    
    @media (max-width: 1025px) {
        width: 50%;
    }
    @media (max-width: 650px) {
        width: 100%;
    }
`;

export const ServiceBox = styled.div`
    padding-bottom: 5px;
    width:70%;
    
    margin:auto;
    background: ${(props) => props.theme.cardColor};
    color: ${(props) => props.theme.fontColorSecondary};
    box-shadow:rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;;
  
    border:1px solid red;
    /* transition: all 0.5s linear; */
    &:hover {
        box-shadow: 0px 12px 24px ${(props) => props.theme.cardColor};
        /* color: #fff; */
    }
`;

export const ExperienceDiv = styled.div`
    width: 78%;
    margin: 0 auto;
    padding:10px;
    @media (max-width: 1125px) {
        width: 95%;
    }
`;
export const ServiceBoxHeader = styled.div`
    font-size: 26px;
    font-weight: 300;
    line-height: 40px;
    margin-bottom: 50px;
    margin-bottom: 5px;
    color: ${(props) => props.theme.fontColorHeader};
`;




export const P = styled.p`
    font-size: 20px;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 40px;
    color: ${(props) => props.theme.fontColorSecondary};
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
`;
export const ServiceBoxP = styled.div`
    font-size: 18px;
    /* text-align: left; */
    color: ${(props) => props.theme.fontColorSecondary};
`;

export const ExperienceInfo = styled.div`
    color: ${(props) => props.theme.fontColorPrimary};
    line-height: 1.2;
`;
export const Li = styled.li`
    font-size: 20px;
    margin-bottom: 15px;
    color: ${(props) => props.theme.fontColorSecondary};
`;

export const Span = styled.span`
  
    color: ${(props) => props.theme.fontColorHeader};
`;