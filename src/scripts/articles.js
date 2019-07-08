import { API } from "./api.js";

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
  submitBtn.setAttribute("id", "submitBtnId");

  //appending these children
  titleFormParent.appendChild(titleInput);
  titleFormParent.appendChild(synopsisInput);
  titleFormParent.appendChild(urlInput);
  titleFormParent.appendChild(submitBtn);

  articleContainer.appendChild(titleFormParent);

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

  //new buttons for editing, saving, and deleting.
  const articleSaveBtn = document.createElement("button");
  articleSaveBtn.textContent = "Save";

  submitBtn.addEventListener("click", () => {
      console.log("button Clicked")
    const valueArticleName = document.getElementById("titleInputId").value;
    const valueArticleDate = document.getElementById("synopsisInputId").value;
    const valueArticleLocation = document.getElementById("urlInputId").value;

    const articleItem = {
      userId: 1,
      title: valueArticleName,
      location: valueArticleLocation,
      date: valueArticleDate
    };

    API.postEventEntries(articleItem)
      .then(API.getEventEntries)
      .then(entireObject => {
        console.log("entireObject", entireObject);
        let putitHere = document.querySelector("#container4");
        let outerdiv = document.createElement("div");

        for (let i = 0; i < entireObject.length; i++) {
          outerdiv.setAttribute("id", `div-${entireObject[i].id}`);
          outerdiv.innerHTML = `
               <p>User Id:${entireObject[i].userId}</p>
               <p>Title:${entireObject[i].title}</p>
               <p>Location:${entireObject[i].location}</p>
               <p>Date: ${entireObject[i].date}</p>
            `;
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
            //   console.log("DIV DELETED", divToBeDeleted)
            //   console.log("entireObject", entireObject, "entireObject id", entireObject[i].id)
            API.deleteEventEntry(entireObject[i].id);
            // .then(API.getEventEntries)
            // .then(eventsData => { //the second loop starts here
            // })
          });
          outerdiv.appendChild(articleDeleteButton);
        }
      });
    function getArticleData(resources) {
      return fetch(`http://localhost:8088/${resources}`)
        .then(data => data.json())
        .then(data => {
          console.log(`${resources}`, data);
          const placeToPutOutPut = document.querySelector("#container3");
          console.log(placeToPutOutPut);
          data.forEach(article => {
            document.querySelector("#container2").innerHTML += `<div>${
              article.id
            } 
                    ${article.title} ${article.synopsis} <a>${
              article.URL
            }</a> ${article.timestamp} </div>`;
          });
        });
    }
    getArticleData("articles");
  });
}

export { articleForm };
