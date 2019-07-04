// Instructions for this section:

// As a user who needs to track tasks, I should be able to enter in a task name, and an expected completion date, and be able to mark them as complete

// Acceptance Criteria
// Given a user wants to enter a task
// When the user clicks an affordance for entering a new task (i.e. button or hyperlink)
// Then a form should be presented to the user with a field to enter in the task name
// And a field to enter in the expected completion date

// Given a user wants to mark a task complete
// When the user is viewing their task list
// Then there should be a checkbox next to each task that, when clicked, should mark the task as complete in the database
// And prevent the task from being displayed in the list

// Given a user wants to edit a task name
// When the user clicks on the name of a task
// Then the user should be able to edit the name of the task
// And when the enter key is pressed, the new task name should be saved to the database
// And the task list should be updated to display the new task name

// Tasks
// { "id": 1, "userId": 3, "task": "Take out garbage" }

function nut_taskRelated() {
  let placeonDOMtree = document.querySelector("#joytest"); //Where in the DOM do you want to place this?
  let enterNewTaskBtn = document.createElement("button"); //Create <enter a new task> button
  enterNewTaskBtn.textContent = "Enter a New Task"; //Label the button
  enterNewTaskBtn.setAttribute("id", "enterNewTaskBtnId"); //Give the button a new id
  placeonDOMtree.appendChild(enterNewTaskBtn);
  enterNewTaskBtn.addEventListener("click", () => {// What to do when the <Enter New Task> button is clicked
    document.querySelector("#enterNewTaskBtnId").style.display = "none";//Hide the <Enter New Task> button
    let placetoPutForm = document.createElement("div") //Create a new div element to place this form.
    let createTaskTemplate = `
        <h3 id="headingCreateTask">Create a New Task<h3>
        <label for="nameofTask">Name of Task</label>
        <input type="text" name="nameofTaskInp" id="nameofTaskInpId" placeholder="Enter task here" required>
        <label for="expectCompDate">Expected Completion Date</label>
        <input type="date" name="expectCompDateInp" id="expectCompDateInpId" required>`
    placetoPutForm.innerHTML = createTaskTemplate //Feed the createTaskTemplate to the div
    placeonDOMtree.appendChild(placetoPutForm) //Place the form on the DOM
    let saveNewTaskBtn = document.createElement("button")
    saveNewTaskBtn.textContent = "Save This Task"
    saveNewTaskBtn.setAttribute("id", "saveNewTaskBtnId")
    placeonDOMtree.appendChild(saveNewTaskBtn)
    saveNewTaskBtn.addEventListener("click", () => {
      document.querySelector("#saveNewTaskBtnId").style.display = "none";//Hide the <Save New Task> button
    })
  });
}

export { nut_taskRelated };

// const buildHTML = Object.create({

//   buildUpDOMElement: function(singleJournalEntry) {

//     let outerdiv = document.createElement("div")
//     let innerdiv = document.createElement("div")
//     outerdiv.innerHTML = `<h1>Concepts Covered:  ${ //Basic elements from database to be put into the DOM
//       singleJournalEntry.Concepts_Covered
//     }<h3>Date of Entry:  ${
//       singleJournalEntry.Date_of_Entry
//     } <h3><p>Journal Entry:  ${
//       singleJournalEntry.Journal_Entry
//     }<p><h3>Mood for the Day:  ${singleJournalEntry.Mood_for_the_Day}</h3>`
//     innerdiv.setAttribute("id", `editFormContainer-${singleJournalEntry.id}`) //Location where the edit form will appear
//     outerdiv.appendChild(innerdiv);
//     let deleteBtn = document.createElement("button") //Create delete button
//     let editBtn = document.createElement("button") //Create edit button
//     deleteBtn.setAttribute("id", `delButton-${singleJournalEntry.id}`) //Setting ids on buttons to access specific buttons later
//     editBtn.setAttribute("id", `editButton-${singleJournalEntry.id}`)
//     deleteBtn.textContent = "delete"
//     editBtn.textContent = "edit"
//     deleteBtn.addEventListener("click", () => {//Eventlistener for the delete button
//       API.deleteJournalEntry(singleJournalEntry.id).then(API.getJournalEntries).then(parsedEntries => {
//         DOMMethods.addThisToTheDOM(parsedEntries);
//       });

//     })
//     editBtn.addEventListener("click", () => {//Eventlistener for the edit button

//       document.querySelector(`#delButton-${singleJournalEntry.id}`).style.display = "none" //Remove both delete and edit buttons
//       document.querySelector(`#editButton-${singleJournalEntry.id}`).style.display = "none"
//       let editFormforThisEntry = createEditForm(singleJournalEntry)
//       let innerDivId = innerdiv.id //Each DOM Component will have its own innerDivId (location for editing)
//       setupEditFormandFunctionality(innerDivId, editFormforThisEntry, singleJournalEntry)

//     })
//     outerdiv.appendChild(deleteBtn) //Attach the buttons to the Outer Div element
//     outerdiv.appendChild(editBtn)
//     return outerdiv; //Return the component to the calling location
//   }

// });

// //Create the edit form component
// function createEditForm(oneJournalEntry) { //Create a template containing the data for the component from the database
//   let editFormTemplate = `
//             *************************
//             -------Please edit the Entry below (Origninal Information Shown Above)---------
//             *************************
//         <fieldset>
//             <label for="journalDate">Date of Entry</label>
//             <input type="date" name="journalDate1" id="journalDate1" value =${oneJournalEntry.Date_of_Entry} required>
//         </fieldset>
//         <input type="hidden" id="journal-id1" value=${oneJournalEntry.id}>
//         <fieldset>
//             <label for="conceptsCovered">Concepts Covered</label>
//             <input type="text" name="conceptsCovered1" id="conceptsCovered1" value="${oneJournalEntry.Concepts_Covered}"required>
//         </fieldset>
//         <fieldset>
//             <label for="journalEntry">Journal Entry</label>
//             <textarea name="journalEntry1" id="journalEntry1" required></textarea>
//         </fieldset>
//         <fieldset>
//             <label for="moodForDay">Mood For the Day</label>
//             <select id="moodForDay1" required>
//                 <option value="excited" ${oneJournalEntry.Mood_for_the_Day === "excited" ? "selected": ""}>Excited</option>
//                 <option value="happy" ${oneJournalEntry.Mood_for_the_Day === "happy" ? "selected": ""}>Happy</option>
//                 <option value="stressed" ${oneJournalEntry.Mood_for_the_Day === "stressed" ? "selected": ""}>Stressed</option>
//                 <option value="overwhelmed" ${oneJournalEntry.Mood_for_the_Day === "overwhelmed" ? "selected": ""}>Overwhelmed</option>
//             </select>
//         </fieldset>
//         <button id="journal-save-btn">save journal entry</button>` //Textarea VALUE cannot be set-up within the string--done in the setupEditFormandFunctionality function
// return editFormTemplate
// }

// function setupEditFormandFunctionality(editContainerId, editForm, oneJournalEntry) {

//   document.querySelector(`#${editContainerId}`).innerHTML = editForm //Place the edit form into the edit location for that id
//   document.querySelector("#journalEntry1").innerHTML = oneJournalEntry.Journal_Entry; //Backfill component value into the Textarea element
//   document.querySelector("#journal-save-btn").addEventListener("click", () => {//Add eventlistener for the <Save the Edited Entry> button
//     //When the <Save the Edited Entry> button is clicked, collect the value of each field (including the hidden id field!)
//     let journalDate = document.querySelector("#journalDate1").value
//     let journalId = document.querySelector("#journal-id1").value
//     let journalConcepts = document.querySelector("#conceptsCovered1").value
//     let journalEntry = document.querySelector("#journalEntry1").value
//     let journalMood = document.querySelector("#moodForDay1").value
//     //Send the values to create an object [calling the Factory Function createEntryItem]
//     let updatedJournal = createEntryItem( journalDate, journalConcepts, journalEntry, journalMood )
//     //Add the id from the hidden entry field into the newly created object so that the right data can be updated in the database
//     updatedJournal.id = journalId
//     //Update the data, get the latest instance of the database and show it in the DOM
//     API.updateJournalEntry(updatedJournal).then(API.getJournalEntries).then(parsedEntries => {
//       DOMMethods.addThisToTheDOM(parsedEntries);
//     });
//   })
// }
