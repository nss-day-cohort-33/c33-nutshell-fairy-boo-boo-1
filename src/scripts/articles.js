
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











export{time, limmy, articleForm}