// Get Id based on token
async function getId(token, globalProperties) {
    try {
        const response = await fetch("/api/login/getId", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: token })
        })
        const data = await response.json()

        globalProperties.$id = data.id
    } catch (err) {
        console.log(err)
    }

    console.log("(server) id: " + globalProperties.$id)
}

// if a token is stored in localstorage, assign it to gloabal variable '$token'
function isTokenInLocalStorage(globalProperties) {
    // get token from local storage
    globalProperties.$token = localStorage.getItem('token')

    // if there is no token in local storage, return false 
    // else return true
    if (globalProperties.$token == undefined) {
        globalProperties.$token = ''
        console.log("no token found in local storage")
        return false
    }
    else {
        console.log("(localStorage) token: " + globalProperties.$token)
        return true
    }
}

// check if logged in
async function isLoggedIn(globalProperties) {
    let data;


    if(!(await isTokenInLocalStorage(globalProperties))) {
        return false;
    }

    try {
        const response = await fetch("/api/login/check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token: globalProperties.$token })
        })
        //.then(response => response.json()).then(data => console.log(data))
        data = await response.json()
    } catch (err) {
        console.log(err)
    }
    console.log("(server) Logged in ? : " + data.isLoggedIn)
    return data.isLoggedIn
}

async function isTokenValid(globalProperties) {
    const response = await fetch("/api/isTokenValid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: globalProperties.$token })
    })
    const data = await response.json()
    if (data.msg == "token is valid") {
        return true
    }
    else if (data.msg == "token is not valid") {
        return false
    }
}

async function askNewToken(globalProperties) {
    globalProperties
    let data;
    try {
        const response = await fetch('/api/getNewToken', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userId: globalProperties})
        })
        data = await response.json()
        return data.token
   } catch(err) {
    console.log(err)
   }
}


export { getId, isTokenInLocalStorage, isLoggedIn, isTokenValid, askNewToken}