import { API } from "./api.js";

function createChats() {
  //create message container
  const messageTitle = document.querySelector("#test1");
  messageTitle.innerHTML = "<h1>Messages</h1>";

  // create message textarea element
  const messageInputParentDiv = document.createElement("div");
  const messageInput = document.createElement("div");
  const editMessageButton = document.createElement("button");
  editMessageButton.textContent = "edit message";

  //set attributes for message input
  messageInputParentDiv.setAttribute("id", "messageInputParentDiv");
  messageInput.setAttribute("placeholder", "Say What's Up...");
  messageInput.setAttribute("cols", "100");
  messageInput.setAttribute("rows", "5");
  messageInput.setAttribute("id", "messageInputId");
  editMessageButton.setAttribute("id", "editMessageButtonId");

  //Add message input to the DOM with appendChild
  const messageLocation = document.querySelector("#test1");
  messageLocation.appendChild(messageInputParentDiv);
  messageLocation.appendChild(messageInput);
  messageLocation.appendChild(editMessageButton);
  messageLocation.addEventListener("click", ()=>{
    if (event.target.id.startsWith("edit")){
      console.log(`Hi, I am the edit button with id ${event.target.id}`)
      let id = event.target.id.split("-")[1]
      console.log(`Here is the id you need! ${id}`)
      let divIWantToTarget = document.querySelector(`#msg-container-${id}`)
      let message = document.querySelector(`#taco-${id}`).textContent
      console.log(message)
      divIWantToTarget.innerHTML = ""
      divIWantToTarget.innerHTML = `<h1>Hi</h1>
      <input value="${message}"></input>`
    }

  })

  //add event listener
  editMessageButton.addEventListener("click", () => {
getData(resources)
    console.log("resources", messageInputId);
  });
}

// function updateMessages(id, shape, creation) {
//   fetch(`http://localhost:8088/legos/${id}`)
//   .then( lego => lego.json())
//   .then( lego => {
//     console.log(lego)
//     lego.shape = shape
//     lego.creation = creation
//     fetch(`http://localhost:8088/legos/${id}`, {
//       method: "PUT",
//       headers:{
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(lego)
//     })
//   })

function messageDate() {
  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.getMonth(); //Be careful! January is 0 not 1
  let year = currentDate.getFullYear();
  let dates = new Date();
  let timestamp = dates.getTime();
  let dateString = date + "-" + (month + 1) + "-" + year + " " + timestamp;
  console.log(dateString);
}
// get message data from database
function getData(resources) {
  return fetch(`http://localhost:8088/${resources}`)
    .then(data => data.json())
    .then(data => {
      //   console.log("data", data),
      data.forEach(message => {
        document.querySelector("#messageInputId").innerHTML += `<div id="msg-container-${message.id}">
        <div id="taco-${message.id}">${
          message.messageInput
        }</div><p>${message.timestamp}<p>
        <button id="edit-${message.id}">Edit</button>
        <div>`
        ;
      });
    });
}

function createNewChat() {
  // create input dynamically for new message
  const newMessageInputParentDiv = document.createElement("div");
  const newMessage = document.createElement("input");
  const newMessageBtn = document.createElement("button");
  newMessageBtn.textContent = "Create New Message";

  // set attributes for new Message
  newMessage.setAttribute("type", "text");
  newMessage.setAttribute("id", "newMessageId");
  newMessage.setAttribute("placeholder", "Enter new message");
  newMessageBtn.setAttribute("id", "newMessageBtnId");

  //Attach new message input to the DOM with appendChild
  const newMessageLocation = document.querySelector("#test2");
  newMessageLocation.appendChild(newMessage);
  newMessageLocation.appendChild(newMessageBtn);

  // Add new message to the DOM
  newMessageLocation.appendChild(newMessageInputParentDiv);

  function newMessageObj(newMessage) {
    return {
      userId: 1,
      messageInput: newMessage,
      timestamp: messageDate()
    };
  }
  // add event listener to new message button

  newMessageBtn.addEventListener("click", () => {
    let newMessages = document.querySelector("#newMessageId").value;
    let addMessage = newMessageObj(newMessages);
    API.addNewMessage(addMessage).then(data => data.json());
  });
}
export { createChats, getData, messageDate, createNewChat };
