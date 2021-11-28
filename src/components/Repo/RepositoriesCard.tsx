import { abbreviateNumber } from "../../pages/globagFunction";
import { RepoCard } from "../../pages/RepoPage/repo.style";

const RepositoriesCard = ({data}:any) => {

    return (
        <RepoCard>
            <h3 className="name">{data.nameWithOwner}</h3>
            <p className="desc">{data.description}</p>
            <p className="others">{abbreviateNumber(data.stargazerCount)} Stars | {data.languages.nodes.length ? data.languages.nodes[0].name + ' | ' : null} GPL-2.0 License | Updated 4 hours ago</p>
        </RepoCard>
    )
};

export default RepositoriesCard;