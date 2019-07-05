// import "./welcome.js" //TODO: Uncomment this line to get welcome page to display
import { nut_taskRelated } from "./tasks.js" //Import this for testing the tasks portion

//This console.log is done to make sure that the application is loading into the browser properly.
console.log("Your Webpack application is set up and ready to go. Please start writing code.")

nut_taskRelated(); //Call the function defined in tasks.js
import "./welcome.js"
//import "./articles.js"
import { articleForm, getDate, getArticleData} from "./articles.js";
console.log("Your Webpack application is set up and ready to go. Please start writing code.")

articleForm()
getDate()
const fakeName = "users"
const messages = "messages"
const events = "events"
const articles = "articles"
const friends = "friends"


// getData(fakeName)
// getData(messages)
// getData(events)
getArticleData("articles")
// getData(friends)
//console.log(getData())

