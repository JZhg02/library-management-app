function getId(token, app) {
    fetch("/api/login/getId", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token })
    })
        .then(response => response.json())
        .then(data => {
            app.config.globalProperties.$id = data.id
            console.log("(server) id: " + app.config.globalProperties.$id)
        })
}

function isTokenInLocalStorage(app) {
    app.config.globalProperties.$token = localStorage.getItem('token')
    if (app.config.globalProperties.$token == undefined) {
        app.config.globalProperties.$token = ''
        console.log("no token found in local storage")
        alert("Please log in !")
        return false
    }
    else {
        console.log("(localStorage) token: " + app.config.globalProperties.$token)
        return true
    }
}

function isLoggedIn(app) {
    fetch("/api/login/check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: app.config.globalProperties.$token })
    })
        .then(response => response.json())
        .then((data) => {
            console.log("(server) Logged in ? : " + data.isLoggedIn)
        })
}
export { getId, isTokenInLocalStorage, isLoggedIn }