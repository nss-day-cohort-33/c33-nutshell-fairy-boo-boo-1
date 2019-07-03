
function articleForm(){
    const articleContainer = document.querySelector("#container2")
    articleContainer.innerHTML = "<h1>Articles<h1>"

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

    articleContainer.appendChild(titleFormParent)
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


function getArticleData(resources) {
    return fetch(`http://localhost:8088/${resources}`)
      .then(data => data.json())
      .then(data => {
        console.log(`${resources}`, data)
        const placeToPutOutPut = document.querySelector("#container3")
        console.log(placeToPutOutPut)
        data.forEach(article => {
            document.querySelector("#container2").innerHTML += `<div>${article.id} 
            ${article.title} ${article.synopsis} <a>${article.URL}</a> ${article.timestamp} </div>`
        });
    }
)}





export{articleForm, getDate, getArticleData}