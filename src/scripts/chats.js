//create message container
const messageTitle = document.querySelector("#messageTitle")
messageTitle.innerHTML = "<h1>Messages</h1>"

// create message textarea element
const messageInput = document.createElement("textarea")
const messageInputParentDiv = document.createElement("textarea")

//set attributes for message input
messageInputParentDiv.setAttribute("id", "messageInputParentDiv")
messageInput.setAttribute("placeholder", "Say What's Up...")
messageInput.setAttribute("cols", "100")
messageInput.setAttribute("rows", "5")

//Add message input to the DOM
const messageLocation = document.querySelector("#messageTitle")
messageLocation.appendChild(messageInput)