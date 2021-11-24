import styled from 'styled-components';

export const Nav = styled.div `
    width: 100%;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(196, 203, 214, 0.7);
`;

export const NavContent = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;