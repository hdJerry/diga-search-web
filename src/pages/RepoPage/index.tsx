import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import RepositoriesCard from '../../components/Repo/RepositoriesCard';
import UserCard from '../../components/Repo/UserCard';
import { Container } from '../../GlobalStyles/index.styles';
import { RepoContent, RepoWrapper } from './repo.style';

const RepoPage = () => {

    const [activeTab, setActiveTab] = React.useState(0);

    let { location: { state } } = useHistory();

    const repos = [...Array(10).keys()];


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
                                            repos.map((repo, index) => (
                                                <RepositoriesCard />
                                            ))
                                        }
                                    </>
                                )
                                : 
                                (
                                    <>
                                        {
                                        repos.map((repo, index) => (
                                            <UserCard />
                                        ))
                                        }
                                    </>
                                )
                            }
                                
                        </div>
                    </div>
                </RepoContent>
            </Container>
        </RepoWrapper>
    )
}

export default RepoPage;