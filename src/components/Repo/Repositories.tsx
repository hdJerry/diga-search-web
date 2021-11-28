import React from 'react';
import RepositoriesCard from './RepositoriesCard';



interface RepoProps {
    data: object[]
}

const Repositories = ({ data }: RepoProps) => {

    return (
        <>
            {
                data.map((res:any, index:number) => (
                    <RepositoriesCard key={index} data={res}/>
                ))
            }

        </>
    )

};

export default Repositories;