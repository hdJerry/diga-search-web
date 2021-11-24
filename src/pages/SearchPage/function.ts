export function searchGithub (search: string, token: any) {
    let auth = {
        "Authorization": `token ${token}`
    }

return new Promise ((resolve, reject) => {
    fetch('https://api.github.com/graphql', {
        method: 'POST',
        mode: "cors",
        cache: "no-cache",
        referrerPolicy: "no-referrer",
        headers: {
            'Content-Type': 'application/json',
            ...auth,
        },
        body: JSON.stringify({
            query: `
                query($username: String!){
                    user(login: $username) {
                        status {
                            emojiHTML
                            message
                            __typename
                        }
                        name
                        login
                        bio
                        company
                        avatarUrl
                        followers {
                            totalCount
                        }
                        repositories(last: 20) {
                            nodes {
                                name
                                description
                                url
                                stargazerCount
                                updatedAt
                                forkCount
                                isPrivate
                                languages(first: 5, orderBy: {
                                    field: SIZE,
                                    direction: DESC
                                }) {
                                    nodes {
                                        color
                                        name
                                        __typename
                                    }
                                    __typename
                                }
                                __typename
                            }
                            __typename
                        }
                    }
                }
                `,
            variables: {
                "username": search,
            },
        }),
    })
        .then((res) => res.json())
        .then((result:any) => {
            resolve(result)
        })
        .catch((error:any) => {
            reject(error)
        })

})
};
