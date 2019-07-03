
let time = console.log("is this working")

let limmy = console.log("I wanna fuckn party")

function articleForm(){
const articleHeader = document.querySelector("#container")
articleHeader.innerHTML = "<h1>Articles<h1>"

//variables for articles page
const titleFormParent = document.createElement("div")
const titleInput = document.createElement("input")
const synopsisInput = document.createElement("input")
const urlInput = document.createElement("input")
const submitBtn = document.createElement("button")
submitBtn.textContent = "Submit"


titleFormParent.setAttribute("id", "titleFormParentId")
titleInput.setAttribute("id", "titleInputId")
synopsisInput.setAttribute("id", "synopsisInputId")
urlInput.setAttribute("id", "urlInputId")
submitBtn.setAttribute("id", "submitBtnId")


//appending these children
titleFormParent.appendChild(titleInput)
titleFormParent.appendChild(synopsisInput)
titleFormParent.appendChild(urlInput)
titleFormParent.appendChild(submitBtn)

const outPutToPage = document.querySelector("#container")
outPutToPage.appendChild(titleFormParent)
}

function getDate() {
let currentDate = new Date();
let date = currentDate.getDate();
let month = currentDate.getMonth(); //Be careful! January is 0 not 1
let year = currentDate.getFullYear();
let dates = new Date();
let timestamp = dates.getTime();
let dateString = date + "-" +(month + 1) + "-" + year + " " + timestamp;

console.log(dateString)
}


// function getData(resource, queryParams) {
//     let url = `http://localhost:8080/${resource}`
//     if (queryParams) {
//       url += `?${queryParams}`
//     }
//     return fetch(url)
//     .then( data => data.json() )
//   }
// const resources = "users"


function getData(resources) {
    return fetch(`http://localhost:8088/${resources}`)
      .then(data => data.json())
      .then(data => {
        console.log(`${resources}`, data)
    }
)}






export{time, limmy, articleForm, getDate, getData}