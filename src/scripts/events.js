import { API } from "./api";

function eventsjs() {
  const eventsOutput = document.querySelector("#karlaTest"); //location in index.html file
  eventsOutput.innerHTML = "<h1>Events</h1>"; //header for my events section

  //created my elements
  const eventsParentDiv = document.createElement("div");
  const eventsDateInput = document.createElement("input");
  const eventsNameInput = document.createElement("input");
  const eventsLocationInput = document.createElement("input");
  const eventsSaveButton = document.createElement("button");

  //created my events save button
  eventsSaveButton.textContent = "save";

  //adding ID's to each element
  eventsParentDiv.setAttribute("id", "eventsParentDivId");
  eventsNameInput.setAttribute("id", "eventsNameInputId");
  eventsDateInput.setAttribute("id", "eventsDateInputId");
  eventsDateInput.setAttribute("type", "date");
  eventsLocationInput.setAttribute("id", "eventsLocationInputId");
  eventsSaveButton.setAttribute("id", "eventsSaveButtonId");

  //added placeholder to input text boxes
  eventsNameInput.setAttribute("placeholder", "event name");
  eventsDateInput.setAttribute("placeholder", "date");

  eventsLocationInput.setAttribute("placeholder", "location");

  //attaching each item to it's parent DIV
  eventsParentDiv.appendChild(eventsDateInput);
  eventsParentDiv.appendChild(eventsNameInput);
  eventsParentDiv.appendChild(eventsLocationInput);
  eventsParentDiv.appendChild(eventsSaveButton);

  //attached it to the DOM
  eventsOutput.appendChild(eventsParentDiv);

  //Save Button event listener

  eventsSaveButton.addEventListener("click", () => {
    const valueEventName = document.getElementById("eventsNameInputId").value;
    const valueEventDate = document.getElementById("eventsDateInputId").value;
    const valueEventLocation = document.getElementById("eventsLocationInputId")
      .value;

    const eventItem = {
      userId: 1,
      title: valueEventName,
      location: valueEventLocation,
      date: valueEventDate
    };

    API.postEventEntries(eventItem).then(() => {
      getEventDataFromDatabase("events");
    });
  });
}

//function to render all events to DOM
function getEventDataFromDatabase(resources) {
  return fetch(`http://localhost:8088/${resources}`)
    .then(data => data.json())
    .then(data => {
      document.querySelector("#karlaTest2").innerHTML = "";
      data.forEach(events => {
        document.querySelector("#karlaTest2").innerHTML += `
            <div>
               <p>User Id: ${events.userId}</p>
               <p>Title: ${events.title}</p>
               <p>Location: ${events.location}</p>
               <p>Date: ${events.date}</p>
               <button id="delete-${events.id}">Delete Event</button>
               <button id="edit-${events.id}">Edit Event</button>
               </div>
            `;
      });
    });
}

function deleteEventListener() {
  document.querySelector("#karlaTest2").addEventListener("click", () => {
    if (event.target.id.startsWith("delete")) {
      const id = +event.target.id.split("-")[1];
      API.deleteEventEntry(id).then(response => {
        document.querySelector("#karlaTest2").innerHTML = "";
        getEventDataFromDatabase("events");
      });
    }
    if (event.target.id.startsWith("edit")) {
      const id = +event.target.id.split("-")[1];
      API.getEventEntries(); //fetch it
      //function to edit
      //    API.postEventEntries(eventItem);
    }
  });
}

const eventsForm = {
  inputForm: `
        <section id="eventsInputContainer">
            <input type="hidden" id=eventsHiddenInput value="">
            <input type="text" id="eventTitleInput" class="inputField" placeholder="Event Name">
            <input type="text" id="eventLocationInput" class="inputField" placeholder="Event Location">
            <input type="date" id="eventDateInput" class="inputField">
            <div class="postButtonContainer">
                <button id="postEventBtn" class="postButton">Save</button>
                <button id="cancelEventPost" class="postButton">Cancel</button>
            </div>
        </section>`,
  formButton: `
        <button id="createEventBtn">Create A New Event</button>
        `
};

export { eventsjs, getEventDataFromDatabase, deleteEventListener };
