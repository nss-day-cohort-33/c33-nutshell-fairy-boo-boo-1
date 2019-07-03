function createChats() {
  //create message container
  const messageTitle = document.querySelector("#test"); //TODO: refactor to match page location
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
  const messageLocation = document.querySelector("#test");
  messageLocation.appendChild(messageInputParentDiv);
  messageLocation.appendChild(messageInput);
  messageLocation.appendChild(editMessageButton);

  //add event listener
  editMessageButton.addEventListener("click", () => {
    console.log("link clicked");
  });
}

// get message data from database
function getData(resources) {
  return fetch(`http://localhost:8088/${resources}`)
    .then(data => data.json())
    .then(data => {
      //   console.log("data", data),
      data.forEach(message => {
        document.querySelector("#messageInputId").innerHTML += `<div>${message.messageInput}</div>`;
      });
    });
}

//edit messages functionality
// fetch(`http://localhost:8088/resource/${id}`, {
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(objectContainingNewProperties)
// })
// .then(res => res.json())
export { createChats, getData };
