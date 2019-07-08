function createChats() {
  //create message container
  const messageTitle = document.querySelector("#test1"); //TODO: refactor to match page location
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

  //add event listener
  editMessageButton.addEventListener("click", () => {
    console.log("link clicked");
  });
}

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
        document.querySelector("#messageInputId").innerHTML += `<div>${
          message.messageInput
        }</div><p>${message.timestamp}<p>`;
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
  newMessage.setAttribute = ("type", "text");
  newMessage.setAttribute = ("placeholder", "Enter new message");
  newMessage.setAttribute("cols", "100");
  newMessage.setAttribute("rows", "5");
  newMessage.setAttribute("id", "newMessageId");
  newMessageBtn.setAttribute("id", "newMessageBtnId");

  //Attach new message input to the DOM with appendChild
  newMessageLocation.appendChild(newMessage);
  newMessageLocation.appendChild(newMessageBtn);

  // Add new message to the DOM
  const newMessageLocation = document.querySelector("#test2");
  newMessageLocation.appendChild(newMessageInputParentDiv);

  //add event listener to new message button
  newMessageBtn.addEventListener("click", () => {
    console.log("link clicked");
  });
}
// post new message to database
function postData(resources, data) {
  return fetch(`http://localhost:8088/${resources}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export { createChats, getData, messageDate, createNewChat, postData };

// function makeFormComponent() {
//   return `
//     <input type="text" id="message-input" placeholder="your message">
//     <button id="message-btn">Post message</button>
//   `
//   function renderForm(form) {  //TODO: renderForm
//     document.querySelector("#container").innerHTML = form //TODO: change container
//   }

//edit messages functionality
// fetch(`http://localhost:8088/resource/${id}`, {
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(objectContainingNewProperties)
// })
// .then(res => res.json())
