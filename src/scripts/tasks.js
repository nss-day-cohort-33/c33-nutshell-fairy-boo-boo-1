import { API } from "./api"

// Instructions for this section:  -- Section being coded by Joy

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

// function getAllTasksfromDB () {
//   API.getfromDatabase("tasks")
//         .then(data => {
//         const placeonDOMtree = document.querySelector("#joytest"); //Where in the DOM do you want to place this?
//         console.log("Tasks data", data);
//         const listoftasksTitle = document.createElement("h3"); //Create a heading element for the list of tasks section
//         listoftasksTitle.innerHTML = "List of Tasks"
//         placeonDOMtree.appendChild(listoftasksTitle)
//         const divforTaskslist = document.createElement("div")
//         divforTaskslist.innerHTML = "" //Initialize it with nothing in it
//         let displayTaskTemplate = "" //Initialize the template for holding all the tasks as well
//         let taskItemNumber = 0; //Initialize the value for taskItemNumber to 0
//         for (let i = 0; i < data.length; i++) {
//           taskItemNumber += 1;
//           if (data[i].completedTask === false) {//Show only tasks that are not completed
//             displayTaskTemplate += `
//             <h3 id="headingCreateTask">Task ${taskItemNumber}<h3>
//             <label for="nameofTask">Name of Task:  ${data[i].taskName}</label>
//             <label for="expectCompDate">Expected Completion Date:  ${data[i].completionDate}</label>
//             <label for="Completed">Completed?</label>
//             <input type="checkbox" name="completedCheckbox" id="completedCheckbox-${i}">`
//           }
//           else {
//             taskItemNumber -= 1;  //Reset taskitem number backward if the Completed task value is true
//           }
//         }
//         divforTaskslist.innerHTML = displayTaskTemplate //Fill the Div with its values
//         placeonDOMtree.appendChild(divforTaskslist) //Send it to the DOM
// }

function nut_taskRelated() {
  let activeUserid = 17; //TODO: Need to update this with actual value when ready
  let placeonDOMtree = document.querySelector("#joytest"); //Where in the DOM do you want to place this?
  let tasksTitle = document.createElement("h2"); //Create a heading element for the Tasks section
  tasksTitle.innerHTML = "Tasks"
  placeonDOMtree.appendChild(tasksTitle)
  let enterNewTaskBtn = document.createElement("button"); //Create <enter a new task> button
  enterNewTaskBtn.textContent = "Enter a New Task"; //Label the button
  enterNewTaskBtn.setAttribute("id", "enterNewTaskBtnId"); //Give the button a new id
  placeonDOMtree.appendChild(enterNewTaskBtn)
  enterNewTaskBtn.addEventListener("click", () => {// What to do when the <Enter New Task> button is clicked
    document.querySelector("#enterNewTaskBtnId").style.display = "none";//Hide the <Enter New Task> button
    let placetoPutTaskStuff = document.createElement("div") //Create a new div element to place this form.
    let createTaskTemplate = `
        <h3 id="headingCreateTask">Create a New Task<h3>
        <label for="nameofTask">Name of Task</label>
        <input type="text" name="nameofTaskInp" id="nameofTaskInpId" placeholder="Enter task here" required>
        <label for="expectCompDate">Expected Completion Date</label>
        <input type="date" name="expectCompDateInp" id="expectCompDateInpId" required>`
    placetoPutTaskStuff.innerHTML = createTaskTemplate //Feed the createTaskTemplate to the div
    placeonDOMtree.appendChild(placetoPutTaskStuff) //Place the form on the DOM
    let saveNewTaskBtn = document.createElement("button") //Creating a <Save> button for saving a new task
    saveNewTaskBtn.textContent = "Save This Task"
    saveNewTaskBtn.setAttribute("id", "saveNewTaskBtnId")
    placeonDOMtree.appendChild(saveNewTaskBtn)
    saveNewTaskBtn.addEventListener("click", () => {
      const valueNameofTask = document.querySelector("#nameofTaskInpId").value
      const valueTaskCompletionDate = document.querySelector("#expectCompDateInpId").value
      let theNewlyCreatedTask = {
        "userId": activeUserid,
        "taskName": valueNameofTask,
        "completionDate": valueTaskCompletionDate,
        "completedTask": false
      }
      placetoPutTaskStuff.innerHTML=""; //Clear the <Enter the New Task Form> in the DOM
      document.querySelector("#saveNewTaskBtnId").style.display = "none"; //Hide the <Save New Task> button
      document.querySelector("#enterNewTaskBtnId").style.display = "block"; //Bring back the <Enter New Task> button
      API.addtoDatabase("tasks", theNewlyCreatedTask) //Post the new data to the database
      .then(() => {
        API.getfromDatabase("tasks")
        .then(data => {
        console.log("Tasks data", data);
        let listoftasksTitle = document.createElement("h3"); //Create a heading element for the list of tasks section
        listoftasksTitle.innerHTML = "List of Tasks"
        placeonDOMtree.appendChild(listoftasksTitle)
        let divforTaskslist = document.createElement("div")
        divforTaskslist.innerHTML = "" //Initialize it with nothing in it
        let displayTaskTemplate = "" //Initialize the template for holding all the tasks as well
        let taskItemNumber = 0; //Initialize the value for taskItemNumber to 0
        for (let i = 0; i < data.length; i++) {
          taskItemNumber += 1;
          if (data[i].completedTask === false) {//Show only tasks that are not completed
            let headingTaskNumber = document.createElement("h3")
            let labelNameofTask = document.createElement("label")
            let labelCompletionDate = document.createElement("label")
            let labelCompleted = document.createElement("label")
            let hiddenInput = document.createElement("input")
            headingTaskNumber.innerHTML = `Task ${taskItemNumber}`
            labelNameofTask.innerHTML = `Name of Task:  ${data[i].taskName}`
            labelCompletionDate.innerHTML = `Expected Completion Date:  ${data[i].completionDate}`
            labelCompleted.innerHTML = "Completed?"
            hiddenInput.setAttribute("type", "hidden")
            hiddenInput.setAttribute("value", `${data[i].id}`)
            let checkboxTask = document.createElement("input")
            checkboxTask.setAttribute("type", "checkbox")
            checkboxTask.setAttribute("id", `completedCheckbox-${data[i].id}`)
            checkboxTask.addEventListener("click", () => {
              console.log("I was checked")
            })
            divforTaskslist.appendChild(headingTaskNumber)
            divforTaskslist.appendChild(labelNameofTask)
            divforTaskslist.appendChild(labelCompletionDate)
            divforTaskslist.appendChild(labelCompleted)
            divforTaskslist.appendChild(hiddenInput)
            divforTaskslist.appendChild(checkboxTask) //Attach the checkbox
            placeonDOMtree.appendChild(divforTaskslist)
          }
          else {
            taskItemNumber -= 1;  //Reset taskitem number backward if the Completed task value is true
          }
        }
      })}) //The parenthesis has to be in the right place!!
    })
  })
}



export { nut_taskRelated };