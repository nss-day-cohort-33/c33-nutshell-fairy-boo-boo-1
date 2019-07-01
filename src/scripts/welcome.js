import { API } from "./api.js"

const welcomeTitle = document.querySelector("#container")
welcomeTitle.innerHTML = "<h2>Welcome to Nutshell</h2>"

//Creating Elements for Registration Login
const registrationParentDiv = document.createElement("div")
const passwordRegistration = document.createElement("input")
const userRegistration = document.createElement("input")
const registerButton = document.createElement("button")
registerButton.textContent = "login"

//Setting ID's for Registration Elements
registrationParentDiv.setAttribute("id", "registrationParentDivId")
passwordRegistration.setAttribute("id", "registrationpasswordId")
userRegistration.setAttribute("id", "registrationUserId")
registerButton.setAttribute("id", "registerButtonId")

//Attaching Elements to the DOM
registrationParentDiv.appendChild(passwordRegistration)
registrationParentDiv.appendChild(userRegistration)
registrationParentDiv.appendChild(registerButton)

//Putting it in the DOM
const outputLocation = document.querySelector("#container")
outputLocation.appendChild(registrationParentDiv)

//Adding event listener to register button
registerButton.addEventListener("click", ()=> {
    //TODO: check to see if the user exists in the database
    //if the user exists, log them in. If user doesn't exist offer the the chance to /////register and remove login button and replace with register button.
    //need event listener on a new register button.
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

//TODO: fix regiter word in variable names




//TODO: Delete this below sometime soon
// outputLocation.appendChild(loginParentDiv)

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