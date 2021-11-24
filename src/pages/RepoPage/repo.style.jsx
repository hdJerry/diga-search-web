import styled from 'styled-components';
import { flexBoxCenter } from '../../GlobalStyles/index.styles';

export const RepoWrapper = styled.div`
    ${flexBoxCenter};
    width: 100%;
    padding: 10px;
`;

export const RepoContent = styled.div `
    ${flexBoxCenter};
    align-items: flex-start;
    margin-top: 30px;
    width: 100%;
    flex-flow: row wrap;

    & > .left {
        width: 100%;
        ${flexBoxCenter};
        justify-content: unset;
        padding: 15px;
        background: #FFFFFF;
        box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
        border-radius: 3px;

        & > ul {
            width: 100%;
            & > li {
                ${flexBoxCenter};
                justify-content: space-between;
                padding: 11px 10px;
                font-family: var(--DMSans);
                font-style: normal;
                cursor: pointer;

                & > .name {
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 18px;
                    color: var(--primary-color);
                }

                & > .count {
                    ${flexBoxCenter};
                    height: 20px;
                    padding: 2px 4px;
                    font-weight: bold;
                    font-size: 11px;
                    line-height: 14px;
                    color: #FFFFFF;
                    background: var(--secondary-color);
                    border-radius: 10px;

                }

                &.active {
                    background: #F7F7F8;
                }
            }
        }
    }

    & > .right {
        width: 100%;

        & > .heading {
            font-family: var(--DMSans);
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 30px;
            margin-bottom: 25px;
            color: var(--primary-color);
        }

        & > .content {
            
        }
    }

    @media (min-width: 1024px) {
        & > .left {
            width: 280px;
            flex-flow: column;
            height: 140px;
            padding: 30px;
        }

        & > .right {
            width: 680px;
            margin-left: 20px;
            height: 300px;
        }
    }
`;

export const RepoCard = styled.div `
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
    border-radius: 3px;
    margin-bottom: 20px;
    font-family: var(--DMSans);

    & > .name {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 21px;
        color: #000000;

        & > span {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;

            color: #91929E;
        }
    }

    & > .desc {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: #91929E;
        margin-top: 5px;
    }

    & > .others {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #91929E;
        margin-top: 15px;
    }

`;