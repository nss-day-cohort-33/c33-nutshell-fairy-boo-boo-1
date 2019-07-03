//import "./welcome.js"
//import "./articles.js"
import { articleForm, getDate, getData} from "./articles.js";
import { get } from "https";
console.log("Your Webpack application is set up and ready to go. Please start writing code.")

articleForm()
getDate()
const fakeName = "users"
const messages = "messages"
const events = "events"
const articles = "articles"
const friends = "friends"


getData(fakeName)
getData(messages)
getData(events)
getData(articles)
getData(friends)
//console.log(getData())

// console.log(welcomeTitle);
