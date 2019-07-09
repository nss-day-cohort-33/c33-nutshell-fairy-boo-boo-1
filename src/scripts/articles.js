import { API } from "./api.js";
//attaching the articles form to the hard dom element
function articleForm() {
  const articleContainer = document.querySelector("#container2");
  articleContainer.innerHTML = "<h1>Articles<h1>";

  //variables for articles page
  const titleFormParent = document.createElement("div");
  const titleInput = document.createElement("input");
  const synopsisInput = document.createElement("input");
  const urlInput = document.createElement("input");
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";

  titleFormParent.setAttribute("id", "titleFormParentId");
  titleInput.setAttribute("id", "titleInputId");
  synopsisInput.setAttribute("id", "synopsisInputId");
  urlInput.setAttribute("id", "urlInputId");
  submitBtn.setAttribute("id", "submitArticleBtnId");

    titleInput.setAttribute("placeholder", "Title")
    synopsisInput.setAttribute("placeholder", "Synopsis")
    urlInput.setAttribute("placeholder", "URL")

  //appending these children
  titleFormParent.appendChild(titleInput);
  titleFormParent.appendChild(synopsisInput);
  titleFormParent.appendChild(urlInput);
  titleFormParent.appendChild(submitBtn);

  articleContainer.appendChild(titleFormParent);
  console.log(submitBtn);
  //new buttons for editing, saving, and deleting.
  const articleSaveBtn = document.createElement("button");
  articleSaveBtn.textContent = "Save";
  console.log(submitBtn);

  submitBtn.addEventListener("click", () => {
    console.log("button Clicked");
    const valueArticleName = document.getElementById("titleInputId").value;
    const valueArticleDate = document.getElementById("synopsisInputId").value;
    const valueArticleLocation = document.getElementById("urlInputId").value;

    const articleItem = {
      userId: 1,
      title: valueArticleName,
      location: valueArticleLocation,
      date: valueArticleDate
    };
    let putitHere = document.querySelector("#container4");
    API.getfromDatabase("articles")
    //API.postEventEntries(articleItem)
      .then(API.getfromDatabase("articles"))
      .then(entireObject => {
        console.log("entireObject", entireObject);
        let outerdiv = document.createElement("div");
        console.log(putitHere);
        for (let i = 0; i < entireObject.length; i++) {
          outerdiv.setAttribute("id", `div-${entireObject[i].id}`);
          outerdiv.innerHTML = `
               <p>User Id:${entireObject[i].userId}</p>
               <p>Title:${entireObject[i].title}</p>
               <p>Location:${entireObject[i].location}</p>
               <p>Date: ${entireObject[i].date}</p>
            `;
          console.log(putitHere);
          putitHere.appendChild(outerdiv);
          const articleDeleteButton = document.createElement("button");
          console.log("Object Id", entireObject[i].id);
          articleDeleteButton.setAttribute("id", `${entireObject[i].id}`);
          articleDeleteButton.textContent = "Delete Article";

          articleDeleteButton.addEventListener("click", () => {
            let idOfItemToBeDeleted = event.target.id;
            let divToBeDeleted = document.querySelector(
              `#div-${idOfItemToBeDeleted}`
            );
            divToBeDeleted.innerHTML = "";
            API.deleteEventEntry(entireObject[i].id);

          });
          outerdiv.appendChild(articleDeleteButton);
        }
      });
  });
}

function getDate() {
  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.getMonth(); //Be careful! January is 0 not 1
  let year = currentDate.getFullYear();
  let dates = new Date();
  let timestamp = dates.getTime();
  let dateString = date + "-" + (month + 1) + "-" + year + " " + timestamp;

  console.log(dateString);
}

function getArticleData(resources) {
  return fetch(`http://localhost:8088/${resources}`)
    .then(data => data.json())
    .then(data => {
      console.log(`${resources}`, data);
      const placeToPutOutPut = document.querySelector("#container3");
      console.log(placeToPutOutPut);
      data.forEach(article => {
        document.querySelector("#container4").innerHTML += `<div>${article.id}
                  ${article.title} ${article.synopsis} <a>${
          article.URL
        }</a> </div>`;
      });
    });
}
console.log()

export { articleForm, getArticleData };
