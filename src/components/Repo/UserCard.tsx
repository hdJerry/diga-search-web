import React from 'react';
import { RepoCard } from "../../pages/RepoPage/repo.style";
import { searchGithubUser } from './function';

// type Data = {
//     name: string,
//     description: string,
//     languages: object
// }
type Data = {
    name: string,
    bio: any,
    company: any
}
const UserCard = ({user}:any ) => {
    
    let token = sessionStorage.getItem('atk');

    const [userData, setUserData] = React.useState<Data>();

    React.useEffect(():any => {
        let mounted = true;

        async function search() {
            let resp: any = await searchGithubUser(user, token);
            
            let errors = resp.errors;
            if (!errors) {
                let user:Data = resp.data.user;
                setUserData(user)
            }
            // console.log(data);
            
        }
        if (mounted) {
            search()
        }
        return () => mounted = false;
    }, [user]);

    if (!userData) {
        return null;
    }

   return (
        <RepoCard>
            <h3 className="name">{userData.name} <span>{userData.bio}</span></h3>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </RepoCard>
    )
};

export default UserCard;