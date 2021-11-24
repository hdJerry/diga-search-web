import styled, {css} from 'styled-components';

export const flexBoxCenter = css `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div `
    max-width: 1440px;
    @media (min-width: 1024px){
        margin-right: auto;
        margin-left: auto;
     }
`;