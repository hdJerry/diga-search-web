import { RepoCard } from "../../pages/RepoPage/repo.style";

const UserCard = () => {

    return (
        <RepoCard>
            <h3 className="name">John Doe <span>Lorem ipsum dolor</span></h3>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </RepoCard>
    )
};

export default UserCard;