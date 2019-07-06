import { API } from "./api";

// Story
// As a user, I should be able to enter in an event that will happen at a future date, and when that event is next on the agenda, it should be more prominent in the application

// Acceptance Criteria
// Given a user wants to keep track on a future event
// When the user clicks an affordance to enter a new event in the application
// Then a form should be presented to the user in which the following properties of the event can be provided

function eventsjs () {
const eventsOutput = document.querySelector("#karlaTest") //location in index.html file
eventsOutput.innerHTML = "<h1>Events</h1>" //header for my events section

//created my elements
const eventsParentDiv = document.createElement("div")
const eventsDateInput = document.createElement("input")
const eventsNameInput = document.createElement("input")
const eventsLocationInput = document.createElement("input")
const eventsSaveButton = document.createElement("button")

//created my events save button
eventsSaveButton.textContent = "save"

//adding ID's to each element
eventsParentDiv.setAttribute("id", "eventsParentDivId")
eventsNameInput.setAttribute("id", "eventsNameInputId")
eventsDateInput.setAttribute("id", "eventsDateInputId")
eventsDateInput.setAttribute("type", "date")
eventsLocationInput.setAttribute("id", "eventsLocationInputId")
eventsSaveButton.setAttribute("id", "eventsSaveButtonId")

//added placeholder to input text boxes
eventsNameInput.setAttribute("placeholder", "event name")
eventsDateInput.setAttribute("placeholder", "date")

eventsLocationInput.setAttribute("placeholder", "location")

//attaching each item to it's parent DIV
eventsParentDiv.appendChild(eventsDateInput)
eventsParentDiv.appendChild(eventsNameInput)
eventsParentDiv.appendChild(eventsLocationInput)
eventsParentDiv.appendChild(eventsSaveButton)

//attached it to the DOM
eventsOutput.appendChild(eventsParentDiv)

//Save Button event listener

eventsSaveButton.addEventListener("click", () => {
    const valueEventName = document.getElementById ("eventsNameInputId").value
    const valueEventDate = document.getElementById ("eventsDateInputId").value
    const valueEventLocation = document.getElementById ("eventsLocationInputId").value

        const eventItem = {
            "userId": 1,
            "title": valueEventName,
            "location": valueEventLocation,
            "date": valueEventDate
                }

API.postEventEntries(eventItem)
.then(API.getEventEntries)
.then(entireObject => {
    console.log("entireObject", entireObject)
    let putitHere = document.querySelector("#karlaTest");
    let outerdiv = document.createElement("div")

        for (let i = 0; i < entireObject.length; i++) {
            outerdiv.setAttribute("id", `div-${entireObject[i].id}`)
            outerdiv.innerHTML =
            `
               <p>User Id:${entireObject[i].userId}</p>
               <p>Title:${entireObject[i].title}</p>
               <p>Location:${entireObject[i].location}</p>
               <p>Date: ${entireObject[i].date}</p>
            `
          putitHere.appendChild(outerdiv);
          const eventsDeleteButton = document.createElement("button")
          console.log("Object Id", entireObject[i].id)
          eventsDeleteButton.setAttribute("id", `${entireObject[i].id}`)
          eventsDeleteButton.textContent = "Delete Event"

          eventsDeleteButton.addEventListener("click", () => {
              let idOfItemToBeDeleted = event.target.id;
              let divToBeDeleted = document.querySelector(`#div-${idOfItemToBeDeleted}`)
              divToBeDeleted.innerHTML = ""
            //   console.log("DIV DELETED", divToBeDeleted)
            //   console.log("entireObject", entireObject, "entireObject id", entireObject[i].id)
            API.deleteEventEntry(entireObject[i].id)
            // .then(API.getEventEntries)
            // .then(eventsData => { //the second loop starts here
            // })

          });
            outerdiv.appendChild(eventsDeleteButton)



        }
  })

})



// we can delete one thing but something with the append child and that's why I can't delete more...




// function myFunction() {
//     var x = document.getElementById("item1").nextSibling.innerHTML;
//     document.getElementById("demo").innerHTML = x;
//   }





// deleteBtn.addEventListener("click", () => {//Eventlistener for the delete button
//     //   API.deleteJournalEntry(singleJournalEntry.id).then(API.getJournalEntries).then(parsedEntries => {
//     //     DOMMethods.addThisToTheDOM(parsedEntries);
//     //   });
}































// const DOMMethods = Object.create(

//     {
//       addThisToTheDOM: function(entireObject) {
//         let putitHere = document.querySelector("#karlaTest"); //Location for placing the HTML that was generated
//         for (let i = 0; i < entireObject.length; i++) {
//             outerdiv.innerHTML =
//             `<h1>User Id:${entireObject[i].userId}</h1>
//                <h3>Title:${entireObject[i].title}</h3>
//                <h3>Location:${entireObject[i].location}</h3>
//                <h3>Date: ${entireObject[i].date}</h3>`

//           putitHere.appendChild(outerdiv); //Pass each journal entry into the function that creates the template and have it add to the previous value
//         }
//       }
//     }
//   )

//   let outerdiv = document.createElement("div")
//   // let innerdiv = document.createElement("div")
//   outerdiv.innerHTML = `<h1>Concepts Covered:  ${ //Basic elements from database to be put into the DOM
//     singleJournalEntry.Concepts_Covered
//   }<h3>Date of Entry:  ${
//     singleJournalEntry.Date_of_Entry
//   } <h3><p>Journal Entry:  ${
//     singleJournalEntry.Journal_Entry
//   }<p><h3>Mood for the Day:  ${singleJournalEntry.Mood_for_the_Day}</h3>`
//   // innerdiv.setAttribute("id", `editFormContainer-${singleJournalEntry.id}`) //Location where the edit form will appear
//   // outerdiv.appendChild(innerdiv);

//   return outerdiv; //Return the component to the calling location










//post events




//Steps to delete stuff
//1. creat a delete button
//2.set ID for delete button
//2a. ID for delte button should contain the ID of the object being deleted
//3. add event listener to the delete button
//inside the event listener do the following:
//a. call deletejournalentry (fetch Call to database)
//b. after deleting in database - fetch call to get current list of items in database
//c. data brought back from fetch call has to be displayed in DOM

//in step c1: send all the items that were brough back
//c2: determine location where to put output (where in the Dom)
//c3: loop throuhg entire object
//and build up the html file.
//c3a: one single piece of data is coming in through the loop.
//we are going to wrap it in HTML.
//c3b: returned HTML component is going to be appended to an element that currently exists in index.html...













//wrap it in a function and after exporting, and importing it to main.js, then you can console log it there.

// Name of event
// Date of event
// Location of event
// Given a user has entered in all details of an event
// When the user performs a gesture to save the event
// Then the event should be displayed in the application in the Events component

// Given a user has entered in 1, or more, events
// When the event component is updated
// Then the next event on the agenda should have bold text
// And it should be slightly larger in size
// And it should have a non-white, and non-offensive background color

// Given a user wants to change the details of an event
// When the user performs a gesture to edit an event
// Then the user should be presented with a form that has the event details pre-filled into the fields
// And there should be an affordance to save the new details

export { eventsjs }

//tehres my data, i fetched it (get) it ands see it on the DOM

//write a fetch call
//displaying
//create fake events

// set up dummy data in json database
//create fetch call for everythign to make sure it is working.

//1.created dummy data in database.json file
//2.create fetch calls



// const myNewDeleteButton = document.querySelector("#deleteButtonEvents");
// // const thing = document.querySelector("#savedObjectId")
// let art = document.getElementById("karlaTest")
// let thing = art.getElementsByTagName("div")
// myNewDeleteButton.addEventListener("click", () => {
//     console.log("hey");
//     // thing.parentElement.remove();
//     thing.innerHTML = ""
// })



// const createEventTemplate =
// `
// <h1 id="eventsHeading">Events<h1>

// <label for="eventDate">Date of Event Entry</label>
// <input type="date" name="eventDate" id="eventsDateInputId">

// <label for="eventName">Journal Entry</label>
// <textarea type="text" name="eventName" id="eventsNameInputId"
// placeholder="Enter task here" required>></textarea>

// <label for="eventLocation">Journal Entry</label>
// <textarea type="text" name="eventLocation" id="eventsLocationId"
// placeholder="Enter task here" required>></textarea>


// `