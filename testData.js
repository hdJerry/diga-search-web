let data = [{
        "name": "Tom-and-Jerry-Game",
        "description": "Android Game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either Three Tom or three Jerry to wins the game.",
        "url": "https://github.com/hemantj99/Tom-and-Jerry-Game",
        "stargazerCount": 0,
        "updatedAt": "2021-06-04T13:20:30Z",
        "forkCount": 0,
        "isPrivate": false,
        "owner": {
            "login": "hemantj99",
            "url": "https://github.com/hemantj99",
            "__typename": "User"
        },
        "languages": {
            "nodes": [{
                "name": "Java"
            }]
        }
    },
    {
        "name": "ThreadPool",
        "description": "A simple ThreadPool that doesn't return results and operates on a queue",
        "url": "https://github.com/voukatas/ThreadPool",
        "stargazerCount": 0,
        "updatedAt": "2020-05-24T14:26:02Z",
        "forkCount": 0,
        "isPrivate": false,
        "owner": {
            "login": "voukatas",
            "url": "https://github.com/voukatas",
            "__typename": "User"
        },
        "languages": {
            "nodes": [{
                "name": "C++"
            }]
        }
    },
    {
        "name": "jerry",
        "description": "A Multi-threaded HTTP Server with Blocking I/O",
        "url": "https://github.com/voukatas/jerry",
        "stargazerCount": 0,
        "updatedAt": "2020-06-27T21:28:55Z",
        "forkCount": 0,
        "isPrivate": false,
        "owner": {
            "login": "voukatas",
            "url": "https://github.com/voukatas",
            "__typename": "User"
        },
        "languages": {
            "nodes": [{
                    "name": "C++"
                },
                {
                    "name": "Makefile"
                },
                {
                    "name": "C"
                },
                {
                    "name": "HTML"
                }
            ]
        }
    },
    {
        "name": "mysite",
        "description": "人这一生不应该没有梦想，我得用这个网站记录下我的逐梦人生，指不定哪天不能成为我传记的素材呢:sparkles::sparkles::sparkles:本站将记录我逐梦路上的点点滴滴，包括但不限于技术、生活感悟、读书笔记等等。",
        "url": "https://github.com/alphajc/mysite",
        "stargazerCount": 1,
        "updatedAt": "2021-10-10T06:51:25Z",
        "forkCount": 0,
        "isPrivate": false,
        "owner": {
            "login": "alphajc",
            "url": "https://github.com/alphajc",
            "__typename": "User"
        },
        "languages": {
            "nodes": []
        }
    },
    {
        "name": "HackTheBox-Writeups",
        "description": null,
        "url": "https://github.com/fatihh92/HackTheBox-Writeups",
        "stargazerCount": 91,
        "updatedAt": "2021-11-18T03:40:53Z",
        "forkCount": 24,
        "isPrivate": false,
        "owner": {
            "login": "fatihh92",
            "url": "https://github.com/fatihh92",
            "__typename": "User"
        },
        "languages": {
            "nodes": []
        }
    }
];

let repoLength = data.length;
console.log(repoLength);
let users = data.map(res => res.owner?.login);
console.log(users);
console.log(new Set(users).size);

