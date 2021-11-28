export function searchGithubUser(username: string, token: any) {
    let auth = {
        "Authorization": `token ${token}`
    }

    return new Promise((resolve, reject) => {
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
                        name
                        bio
                        company
                     }
                }
                `,
                variables: {
                    "username": username,
                },
            }),
        })
            .then((res) => res.json())
            .then((result: any) => {
                resolve(result)
            })
            .catch((error: any) => {
                reject(error)
            })

    })
};
