import React from 'react';
import { searchGithubUser } from './function';
import UserCard from './UserCard';



interface RepoProps {
    data: string[]
}

const Users = ({ data }: RepoProps) => {

    // const [users, setUsers] = React.useState([]);

    // let token = sessionStorage.getItem('atk');

    // React.useEffect((): any => {
    //     let mounted = true;

    //     async function search() {
    //         for (let x of data) {
    //             let resp: any = await searchGithubUser(x, token);
    //             console.log(resp);
                
    //         }

    //     }
    //     if (mounted) {
    //         search()
    //     }
    //     return () => mounted = false;
    // }, []);

    return (
        <>
            {
                data.map((res:any, index:number) => (
                    <UserCard key={index} user={res}/>
                ))
            }

        </>
    )

};

export default Users;