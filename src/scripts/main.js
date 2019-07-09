import "./welcome.js"
import { eventsjs, getEventDataFromDatabase, deleteEventListener, editEventListener} from "./events.js"

//import "./articles.js"
import { articleForm, getArticleData } from "./articles.js"
import { nut_taskRelated } from "./tasks.js" //Import this for testing the tasks portion--joy

//This console.log is done to make sure that the application is loading into the browser properly.
console.log("Your Webpack application is set up and ready to go. Please start writing code.")

nut_taskRelated(); //Call the function defined in tasks.js--joy
articleForm()
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

eventsjs(); //to test Karla's stuff
getEventDataFromDatabase(events);
deleteEventListener();
