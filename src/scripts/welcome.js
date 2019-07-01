import { API } from "./api.js"

const welcomeTitle = document.querySelector("#container")
welcomeTitle.innerHTML = "<h2>Welcome to Nutshell</h2>"



//Creating Elements for Registration Login
const registrationParentDiv = document.createElement("div")
const emailRegistration = document.createElement("input")
const userRegistration = document.createElement("input")
const registerButton = document.createElement("button")

//Setting ID's for Registration Elements
registrationParentDiv.setAttribute("id", "registrationParentDivId")
emailRegistration.setAttribute("id", "registrationEmailId")
userRegistration.setAttribute("id", "registrationUserId")
registerButton.setAttribute("id", "registerButtonId")

//Attaching Elements to the DOM
registrationParentDiv.appendChild(emailRegistration)
registrationParentDiv.appendChild(userRegistration)
registrationParentDiv.appendChild(registerButton)

//Creating Elements for Existing User Login
const loginParentDiv = document.createElement("div")
const emailLogin = document.createElement("input")
const userLogin = document.createElement("input")
const loginButton = document.createElement("button")

//Setting ID's for Existing Login
loginParentDiv.setAttribute("id", "loginParentDivId")
emailLogin.setAttribute("id", "loginEmailId")
userLogin.setAttribute("id", "loginUserId")
loginButton.setAttribute("id", "loginButtonId")

//Attaching Elements to the DOM
loginParentDiv.appendChild(emailLogin)
loginParentDiv.appendChild(userLogin)
loginParentDiv.appendChild(loginButton)

//Putting it in the DOM
const outputLocation = document.querySelector("#container")
outputLocation.appendChild(registrationParentDiv)
outputLocation.appendChild(loginParentDiv)

//Adding event listener to register button
registerButton.addEventListener("click", ()=> {
    const valueRegistrationEmail = document.getElementById("registrationEmailId").value
    const valueRegistrationUser = document.getElementById("registrationUserId").value
    const oneUser = {
        username: `${valueRegistrationUser}`,
        email: `${valueRegistrationEmail}`
    }
    API.postJournalEntries(oneUser).then(data => data.json).then(id =>
        console.log("id", id))
    sessionStorage.setItem("email", valueRegistrationEmail)
    sessionStorage.setItem("username", valueRegistrationUser)
    console.log(valueRegistrationEmail)
    console.log(valueRegistrationUser)
})

//Adding event listener to existing login button
loginButton.addEventListener("click", ()=> {
    const valueLoginEmail = document.getElementById("loginEmailId").value
    const valueLoginUser = document.getElementById("loginUserId").value
    sessionStorage.setItem("email", valueLoginEmail)
    sessionStorage.setItem("username", valueLoginUser)
    console.log(valueLoginEmail)
    console.log(valueLoginUser)
})
















export { welcomeTitle }