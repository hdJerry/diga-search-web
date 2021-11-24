import styled from 'styled-components';
import { flexBoxCenter } from '../../GlobalStyles/index.styles';

export const Nav = styled.div `
    width: 100%;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(196, 203, 214, 0.7);
`;

export const NavContent = styled.div `
    width: 100%;
    ${flexBoxCenter};
    justify-content: space-between;
    padding: 15px 10px;

    & a {
        text-decoration: none;
    }
    
    & .logo {
        ${flexBoxCenter};
        & > img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
        }

        & > span {
            font-style: normal;
            font-weight: 600;
            font-size: 25px;
            line-height: 37px;

            display: flex;
            align-items: center;

            color: var(--primary-color);
        }
    }

    @media (min-width: 1024px){
        padding: 15px 130px;
    }
`;
export const ProfileContainer = styled.div `
    display: flex;
    align-items: center;

    & > .dp {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        background: var(--secondary-color);
        border-radius: 100px;
        ${flexBoxCenter};

        & > span{
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
        }
    }

    & > .fn {
        ${flexBoxCenter};
        justify-content: unset;
        & > span {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            color: #1C1C1C;
        }

        & > img {
            margin-left: 10px;
        }
    }
`;