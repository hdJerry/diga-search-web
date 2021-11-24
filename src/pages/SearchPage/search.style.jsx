import styled from 'styled-components';
import { flexBoxCenter, rotate } from '../../GlobalStyles/index.styles';


export const SearchWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    padding: 10px;
`;

export const SearchBox = styled.div `
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid var(--border-color);
    box-sizing: border-box;
    border-radius: 100px;

    
    & > .search_btn {
        width: 200px;
        height: 50px;
        margin-right: 5px;
        background: var(--primary-color);
        border-radius: 30px;
        ${flexBoxCenter};
        & > span {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;
        }

        & > .spinner {
            ${flexBoxCenter};
            & > svg {
                animation: ${rotate} 0.5s infinite;
            }
        }
    }

    & > .search_input {
        height: 50px;
        margin-left: 30px;
        border: none;
        outline: none;
        flex-grow: 1;

        &::placeholder {
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 30px;
            color: #000;
        }
    }

    @media (min-width: 1024px) {
        width: 580px;
    }
`;