import React from 'react';
import UserCard from './UserCard';



interface RepoProps {
    data: string[]
}

const Users = ({ data }: RepoProps) => {

    return (
        <>
            {
                data.map((res:any, index:number) => (
                    <UserCard key={index} data={res}/>
                ))
            }

        </>
    )

};

export default Users;