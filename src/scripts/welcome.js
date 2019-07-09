//This is the welcome page where the login and registration features are implemented

import { API } from "./api.js";
import { createChats, getData, messageDate, createNewChat } from "./chats.js";
import { getDate } from "./articles.js";

function getOurSessionItems() {
  let activeUserId = sessionStorage.getItem("username");
  let activePasswordId = sessionStorage.getItem("password");
  console.log(
    "welcome",
    "activeUserId",
    activeUserId,
    "activePasswordId",
    activePasswordId
  );
}

function checkifUserExists(userComingIn, passComingIn) {
  let userCheck = {
    userExists1: false,
    passwordExists1: false
  };
  API.getfromDatabase("users").then(data => {
    let userExists = false;
    let passwordExists = false;
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].username === userComingIn &&
        data[i].password === passComingIn
      ) {
        userExists = true;
        passwordExists = true;
      } else if (
        data[i].username === userComingIn &&
        data[i].password !== passComingIn
      ) {
        userExists = true;
        passwordExists = false;
      }
    }
    userCheck.userExists1 = userExists; //set the values of the userCheck object
    userCheck.passwordExists1 = passwordExists;
  });
  return userCheck;
}

const welcomeTitle = document.querySelector("#container");
welcomeTitle.innerHTML = "<h1>Welcome to Nutshell</h1>";
const loginHeader = document.createElement("h4");
loginHeader.textContent = "If you are a returning user, login here:";
loginHeader.setAttribute("id", "loginHeaderId");
const newUserHeader = document.createElement("a"); //anchor element for registration link
newUserHeader.textContent = "If you are a new user, click here to register";
newUserHeader.setAttribute("href", "#");
newUserHeader.setAttribute("id", "registerUserLinkId");

//Creating Elements for Registration Login
const loginParentDiv = document.createElement("div");
const passwordLogin = document.createElement("input");
const userLogin = document.createElement("input");
const loginButton = document.createElement("button");
loginButton.textContent = "login";

const registrationButton = document.createElement("button");
registrationButton.textContent = "register";

//Setting ID's for Login Elements
loginParentDiv.setAttribute("id", "loginParentDivId");
passwordLogin.setAttribute("id", "loginpasswordId");
passwordLogin.setAttribute("placeholder", "password");
userLogin.setAttribute("id", "loginUserId");
userLogin.setAttribute("placeholder", "username");
loginButton.setAttribute("id", "loginButtonId");

//Setting ID's for Registration Elements
registrationButton.setAttribute("id", "registrationButtonId");

//Attaching Elements to the DOM
loginParentDiv.appendChild(loginHeader);
loginParentDiv.appendChild(userLogin);
loginParentDiv.appendChild(passwordLogin);
loginParentDiv.appendChild(loginButton);
loginParentDiv.appendChild(newUserHeader);

//Putting it in the DOM
const outputLocation = document.querySelector("#container");
outputLocation.appendChild(loginParentDiv);

//Adding event listener to login button
loginButton.addEventListener("click", () => {
  //TODO: check to see if the user exists in the database
  //if the user exists, log them in. If user doesn't exist offer the the chance to /////login and remove login button and replace with login button.
  //need event listener on a new login button.
  const valueLoginPassword = document.getElementById("loginpasswordId").value;
  const valueLoginUser = document.getElementById("loginUserId").value;
  const oneUser = {
    username: valueLoginUser,
    password: valueLoginPassword
  };
  API.addtoDatabase("users", oneUser)
    .then(data => data.json())
    .then(id => console.log("id", id));
  sessionStorage.setItem("password", valueloginpassword);
  sessionStorage.setItem("username", valueloginUser);
  console.log(valueloginpassword);
  console.log(valueloginUser);
});

newUserHeader.addEventListener("click", () => {
  //TODO: console.log("link clicked")
  document.querySelector("#loginButtonId").style.display = "none";
  document.querySelector("#loginHeaderId").textContent =
    "Please register Below";
  document.querySelector("#registerUserLinkId").style.display = "none";
  registrationParentDiv.appendChild(registrationButton);
});
createChats(); //for testing
getData("messages"); //misty's stuff
messageDate("dateString");
createNewChat(); // testing new message
export { welcomeTitle };
