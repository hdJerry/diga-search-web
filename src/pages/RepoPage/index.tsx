import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Repositories from '../../components/Repo/Repositories';
import Users from '../../components/Repo/Users';
import { Container } from '../../GlobalStyles/index.styles';
import { abbreviateNumber } from '../globagFunction';
import { PaginationBtn, RepoContent, RepoWrapper } from './repo.style';

const RepoPage = () => {

    const [activeTab, setActiveTab] = React.useState(0);
    const [cardData, setCardData] = React.useState([])
    const [repos, setRepos] = React.useState([]);
    const [usersData, setUsersData] = React.useState([]);

    let { location: { state } } = useHistory();


    const [currentPage, setCurrentPage] = React.useState(0);
    const limit = 7;


    const tabs = [
        {
            name: 'Repositories',
            id: 0,
            count: repos.length
        },
        {
            name: 'Users',
            id: 1,
            count: usersData.length
        },
    ];



    let token = sessionStorage.getItem('atk');

    const FilterProducts = React.useCallback(() => {
        let start = (currentPage) * (limit);
        let end = start + limit

        return cardData.slice(start, end);
    }, [currentPage, limit, cardData]);

    React.useEffect(():any => {
        let mounted = true;

        if(mounted) {
            setCardData(state);
            setRepos(state);
            let users = state.map((res: any) => res.owner?.login);
            users = new Set(users);
            users = Array.from(users);
            setUsersData(users);

        };

        return () => mounted = false;
    }, [state]);

    if (!state) {
        return <Redirect to='/' />
    }

    if (!token) {
        return <Redirect to='/login' />
    }





    return (
        <RepoWrapper>
            <Container>
                <RepoContent>
                    <div className="left">
                        <ul>
                            {
                                tabs.map((tab) => (
                                    <li key={tab.id} onClick={() => {
                                        if (tab.id === 0) {
                                            setCardData(repos);
                                        } else {
                                            setCardData(usersData);
                                        }
                                        setActiveTab(tab.id);
                                        }} className={activeTab === tab.id ? 'active': ''}>
                                        <span className="name">{tab.name}</span>
                                        <span className="count">
                                            {abbreviateNumber(tab.count)}
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="right">
                        <h1 className='heading'>
                            {cardData.length} {activeTab === 0 ? ' repository ' : ' users '} {' results'}
                        </h1>
                        <div className="content">
                            {
                                activeTab === 0 ? (

                                    <Repositories data={FilterProducts()} />
                                )
                                : 
                                (
                                   <Users data={FilterProducts()} />
                                )
                            }
                                
                        </div>
                            <div className="pagination">
                                {/* Pagination */}
                                <PaginationBtn onClick={() => {
                                    setCurrentPage(prevState => prevState - 1);
                                }} className="prev" disabled={currentPage === 0}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="#B0B7C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                </PaginationBtn>

                                <span>Prev</span>
                                <span>Next</span>

                                <PaginationBtn onClick={() => {
                                    setCurrentPage(prevState => prevState + 1);
                                }} className="next" disabled={currentPage >= Math.ceil(repos.length / limit) - 1}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                </PaginationBtn>
                            </div>

                    </div>
                </RepoContent>
            </Container>
        </RepoWrapper>
    )
}

export default RepoPage;