import styled from 'styled-components';


export const AuthWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const AuthCard = styled.div `
    width: 100%;
    height: 220px;
    background-color: #FFF;
    box-shadow: 0px 0px 48px 16px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 1024px) {
        width: 540px;
    }

    & > .logo {
        display: flex;
        justify-content: center;
        align-items: center;

        & > img {
            margin-right: 10px;
        }

        & > span {
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 25px;
            line-height: 37px;
            display: flex;
            align-items: center;
            color: #1A0C88;
        }
    }

    & > .auth_btn {
        width: 70%;
        padding: 13px;
        border-radius: 30px;
        background-color: var(--primary-color);
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #FFF;
        margin-top: 20px;
    }
`;