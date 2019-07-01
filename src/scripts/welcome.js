import { API } from "./api.js"

const welcomeTitle = document.querySelector("#container")
welcomeTitle.innerHTML = "<h2>Welcome to Nutshell</h2>"



//Creating Elements for Registration Login
const registrationParentDiv = document.createElement("div")
const passwordRegistration = document.createElement("input")
const userRegistration = document.createElement("input")
const registerButton = document.createElement("button")

//Setting ID's for Registration Elements
registrationParentDiv.setAttribute("id", "registrationParentDivId")
passwordRegistration.setAttribute("id", "registrationpasswordId")
userRegistration.setAttribute("id", "registrationUserId")
registerButton.setAttribute("id", "registerButtonId")

//Attaching Elements to the DOM
registrationParentDiv.appendChild(passwordRegistration)
registrationParentDiv.appendChild(userRegistration)
registrationParentDiv.appendChild(registerButton)

//Creating Elements for Existing User Login
// const loginParentDiv = document.createElement("div")
// const passwordLogin = document.createElement("input")
// const userLogin = document.createElement("input")
// const loginButton = document.createElement("button")

//Setting ID's for Existing Login
// loginParentDiv.setAttribute("id", "loginParentDivId")
// passwordLogin.setAttribute("id", "loginpasswordId")
// userLogin.setAttribute("id", "loginUserId")
// loginButton.setAttribute("id", "loginButtonId")

//Attaching Elements to the DOM
// loginParentDiv.appendChild(passwordLogin)
// loginParentDiv.appendChild(userLogin)
// loginParentDiv.appendChild(loginButton)

//Putting it in the DOM
const outputLocation = document.querySelector("#container")
outputLocation.appendChild(registrationParentDiv)
// outputLocation.appendChild(loginParentDiv)

//Adding event listener to register button
registerButton.addEventListener("click", ()=> {
    const valueRegistrationpassword = document.getElementById("registrationpasswordId").value
    const valueRegistrationUser = document.getElementById("registrationUserId").value
    const oneUser = {
        username: `${valueRegistrationUser}`,
        password: `${valueRegistrationpassword}`
    }
    API.postJournalEntries(oneUser).then(data => data.json()).then(id =>
        console.log("id", id))
    sessionStorage.setItem("password", valueRegistrationpassword)
    sessionStorage.setItem("username", valueRegistrationUser)
    console.log(valueRegistrationpassword)
    console.log(valueRegistrationUser)
})

//Adding event listener to existing login button
// loginButton.addEventListener("click", ()=> {
//     const valueLoginpassword = document.getElementById("loginpasswordId").value
//     const valueLoginUser = document.getElementById("loginUserId").value
//     sessionStorage.setItem("password", valueLoginpassword)
//     sessionStorage.setItem("username", valueLoginUser)
//     console.log(valueLoginpassword)
//     console.log(valueLoginUser)
// })
















export { welcomeTitle }