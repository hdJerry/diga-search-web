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
                query($search: String!){
                    topic(name: $search) {
                        repositories(last: 5) {
                            nodes {
                                name
                                description
                                url
                                stargazerCount
                                updatedAt
                                forkCount
                                isPrivate
                                owner{
                                login
                                }
                                languages(first: 5, orderBy: {
                                    field: SIZE,
                                    direction: DESC
                                })
                                {
                                    nodes {
                                        name
                                    }
                                }
                              }
                            }
                        stargazerCount
                    }
                   
                }
                `,
            variables: {
                "search": search,
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
