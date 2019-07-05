import { API } from "./api.js"

const welcomeTitle = document.querySelector("#container")
welcomeTitle.innerHTML = "<h2>Welcome to Nutshell</h2>"

//Creating Elements for login Login
const loginParentDiv = document.createElement("div")
const passwordlogin = document.createElement("input")
const userlogin = document.createElement("input")
const registerButton = document.createElement("button")
registerButton.textContent = "login"

//Setting ID's for login Elements
loginParentDiv.setAttribute("id", "loginParentDivId")
passwordlogin.setAttribute("id", "loginpasswordId")
userlogin.setAttribute("id", "loginUserId")
registerButton.setAttribute("id", "registerButtonId")

//Attaching Elements to the DOM
loginParentDiv.appendChild(passwordlogin)
loginParentDiv.appendChild(userlogin)
loginParentDiv.appendChild(registerButton)

//Putting it in the DOM
const outputLocation = document.querySelector("#container")
outputLocation.appendChild(loginParentDiv)

//Adding event listener to register button
registerButton.addEventListener("click", ()=> {
    //TODO: check to see if the user exists in the database
    //if the user exists, log them in. If user doesn't exist offer the the chance to /////register and remove login button and replace with register button.
    //need event listener on a new register button.
    const valueloginpassword = document.getElementById("loginpasswordId").value
    const valueloginUser = document.getElementById("loginUserId").value
    const oneUser = {
        username: `${valueloginUser}`,
        password: `${valueloginpassword}`
    }
    API.addtoDatabase("users", oneUser).then(data => data.json()).then(id =>
        console.log("id", id))
    sessionStorage.setItem("password", valueloginpassword)
    sessionStorage.setItem("username", valueloginUser)
    console.log(valueloginpassword)
    console.log(valueloginUser)
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