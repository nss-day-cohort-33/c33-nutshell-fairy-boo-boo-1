import { API } from "./api.js"

const welcomeTitle = document.querySelector("#container")
welcomeTitle.innerHTML = "<h1>Welcome to Nutshell</h1>"
const loginHeader = document.createElement("h4")
loginHeader.textContent = "If you are a returning user, login here:"
loginHeader.setAttribute("id", "loginHeaderId")
const newUserHeader = document.createElement("a")  //anchor element for registration link
newUserHeader.textContent = "If you are a new user, click here to register"
newUserHeader.setAttribute("href", "#")
newUserHeader.setAttribute("id", "registerUserLinkId")

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
registrationParentDiv.appendChild(loginHeader)
registrationParentDiv.appendChild(passwordRegistration)
registrationParentDiv.appendChild(userRegistration)
registrationParentDiv.appendChild(registerButton)
registrationParentDiv.appendChild(newUserHeader)


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

newUserHeader.addEventListener("click", ()=> {
//TODO: console.log("link clicked")
document.querySelector("#registerButtonId").style.display = "none"
document.querySelector("#loginHeaderId").textContent = "Please Register Below"
document.querySelector("#registerUserLinkId").style.display = "none"
})

















//TODO: fix regiter word in variable names

//TODO:
//1.  Under Welcome to Nutshell, place a heading element (give it an id to grab it later) in a line that says--"If you're a returning user, login in here:"
// 2.  Under the userid and password input fields and login button, place an another heading element (give it an id to grab it later) and an anchor element within it  that says--If you're a new user, <click here to register>.  When they click this, change the messages, and display a register button.
// 3.  If they click the login button, check to see if they are an existing user and if NOT, ask them if they want to register.  If they want to register, sent them to the registration screen (has a register button on it).  If they don't want to register, (stretch goal?-->tell them thanks for visiting), and return them to the login screen.
// 4.  If they click the register choice, then have them enter the information to register (and change the button to the register button).   After entering the data, if they exist in the system, put a message "You already have an account with us.  Please login."  And send them back to the login screen (has a login button).











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