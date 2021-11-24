import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import RepositoriesCard from '../../components/Repo/RepositoriesCard';
import UserCard from '../../components/Repo/UserCard';
import { Container } from '../../GlobalStyles/index.styles';
import { PaginationBtn, RepoContent, RepoWrapper } from './repo.style';

const RepoPage = () => {

    const [activeTab, setActiveTab] = React.useState(0);

    let { location: { state } } = useHistory();

    const repos = [...Array(10).keys()];


    const [currentPage, setCurrentPage] = React.useState(0);
    const limit = 5;


    const tabs = [
        {
            name: 'Repositories',
            id: 0,
            count: 423400
        },
        {
            name: 'Users',
            id: 1,
            count: 120
        },
    ]

    let token = sessionStorage.getItem('atk');

    const FilterProducts = React.useCallback(() => {
        let start = (currentPage) * (limit);
        let end = start + limit

        return repos.slice(start, end);
    }, [currentPage, limit, repos]);

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
                                    <li key={tab.id} onClick={() => setActiveTab(tab.id)} className={activeTab === tab.id ? 'active': ''}>
                                        <span className="name">{tab.name}</span>
                                        <span className="count">
                                            {String(tab.count).length >= 6 ? String(tab.count).slice(0,3)+'k' : String(tab.count)}
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="right">
                        <h1 className='heading'>
                            2,985 repository results
                        </h1>
                        <div className="content">
                            {
                                activeTab === 0 ? (
                                    <>
                                        {
                                            FilterProducts().map((repo, index) => (
                                                <RepositoriesCard key={index} />
                                            ))
                                        }
                                    </>
                                )
                                : 
                                (
                                    <>
                                        {
                                        FilterProducts().map((repo, index) => (
                                            <UserCard key={index} />
                                        ))
                                        }
                                    </>
                                )
                            }
                                
                        </div>
                            <div className="pagination">
                                {/* Pagination */}
                                <PaginationBtn onClick={() => {
                                    setCurrentPage(prevState => prevState - 1);
                                }} className="prev" disabled={currentPage === 0}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="#B0B7C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                </PaginationBtn>

                                <span>Prev</span>
                                <span>Next</span>

                                <PaginationBtn onClick={() => {
                                    setCurrentPage(prevState => prevState + 1);
                                }} className="next" disabled={currentPage >= Math.ceil(repos.length / limit) - 1}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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