import styled, {css, keyframes} from 'styled-components';

export const flexBoxCenter = css `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const rotate = keyframes `
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
    }

    50% {
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
    }
`;

export const Container = styled.div `
    max-width: 1440px;
    @media (min-width: 1024px){
        margin-right: auto;
        margin-left: auto;
     }
`;